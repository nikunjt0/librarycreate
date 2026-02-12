import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { appendEvent } from "../../../lib/tracking-store";

// 1x1 transparent GIF
const PIXEL_GIF_BASE64 =
  "R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
const PIXEL_BYTES = Buffer.from(PIXEL_GIF_BASE64, "base64");

function getBaseUrl(req: NextRequest) {
  // Prefer forwarded proto/host (CDN/proxy) then fall back.
  const proto = req.headers.get("x-forwarded-proto") || "https";
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  return host ? `${proto}://${host}` : undefined;
}

function sign(secret: string, payload: string) {
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
}

function safeEq(a: string, b: string) {
  // Constant-time-ish comparison to avoid trivial timing leaks.
  const aa = Buffer.from(a);
  const bb = Buffer.from(b);
  if (aa.length !== bb.length) return false;
  return crypto.timingSafeEqual(aa, bb);
}

export async function GET(req: NextRequest) {
  // We always return an image (even on errors) so the email client
  // doesn’t show broken-image artifacts.
  const url = new URL(req.url);

  const mid = url.searchParams.get("mid") || ""; // message id (your internal id or Resend id)
  const cid = url.searchParams.get("cid") || ""; // campaign id
  const rid = url.searchParams.get("rid") || ""; // recipient id (avoid raw email if you can)
  const name = url.searchParams.get("name") || ""; // recipient name (optional)
  const email = url.searchParams.get("email") || ""; // recipient email (optional)
  const ts = url.searchParams.get("ts") || ""; // unix ms
  const sig = url.searchParams.get("sig") || "";

  const secret = process.env.TRACKING_SECRET || "";
  const now = Date.now();

  // Validate signature if secret is configured; otherwise allow (dev-friendly).
  let signatureOk = true;
  if (secret) {
    const payload = `${mid}.${cid}.${rid}.${ts}`;
    const expected = sign(secret, payload);
    signatureOk = !!sig && safeEq(sig, expected);
  }

  // Basic timestamp sanity: reject very old/future tokens (still return pixel).
  const tsNum = Number(ts);
  const maxAgeMs = 1000 * 60 * 60 * 24 * 30; // 30 days
  const tsOk =
    Number.isFinite(tsNum) && tsNum > 0 && Math.abs(now - tsNum) <= maxAgeMs;

  // Best-effort record (you should swap this for a real DB insert).
  // Note: Many clients (Apple MPP, Gmail proxy) will prefetch/proxy, so treat opens as "approx".
  try {
    const ip =
      (req.headers.get("x-forwarded-for") || "").split(",")[0]?.trim() || "";
    const ua = req.headers.get("user-agent") || "";
    const referer = req.headers.get("referer") || "";
    const baseUrl = getBaseUrl(req);

    if (signatureOk && tsOk && (mid || cid || rid)) {
      const event = {
        type: "email_open",
        at: new Date(now).toISOString(),
        mid,
        cid,
        rid,
        name: name || undefined,
        email: email || undefined,
        ip,
        ua,
        referer,
        baseUrl,
      };

      await appendEvent(event);

      if (process.env.TRACKING_WEBHOOK_URL) {
        await fetch(process.env.TRACKING_WEBHOOK_URL, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(event),
        });
      } else {
        // eslint-disable-next-line no-console
        console.log("[track] email_open", event);
      }
    } else {
      // eslint-disable-next-line no-console
      console.log("[track] email_open (ignored)", {
        signatureOk,
        tsOk,
        mid,
        cid,
        rid,
      });
    }
  } catch {
    // Swallow any errors (tracking must never break the pixel response).
  }

  return new NextResponse(PIXEL_BYTES, {
    status: 200,
    headers: {
      "content-type": "image/gif",
      "content-length": String(PIXEL_BYTES.length),
      // Avoid caching so multiple opens can be observed.
      "cache-control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      pragma: "no-cache",
      expires: "0",
    },
  });
}

