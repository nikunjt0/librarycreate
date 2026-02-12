import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { appendEvent } from "../../../lib/tracking-store";

function sign(secret: string, payload: string) {
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
}

function safeEq(a: string, b: string) {
  const aa = Buffer.from(a);
  const bb = Buffer.from(b);
  if (aa.length !== bb.length) return false;
  return crypto.timingSafeEqual(aa, bb);
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  // Destination URL (encoded). Example: encodeURIComponent("https://librarycreate.org/some-page")
  const u = url.searchParams.get("u") || "";
  const dest = u ? decodeURIComponent(u) : "";

  const mid = url.searchParams.get("mid") || "";
  const cid = url.searchParams.get("cid") || "";
  const rid = url.searchParams.get("rid") || "";
  const name = url.searchParams.get("name") || "";
  const email = url.searchParams.get("email") || "";
  const ts = url.searchParams.get("ts") || "";
  const sig = url.searchParams.get("sig") || "";

  const secret = process.env.TRACKING_SECRET || "";
  const now = Date.now();

  let signatureOk = true;
  if (secret) {
    const payload = `${dest}.${mid}.${cid}.${rid}.${ts}`;
    const expected = sign(secret, payload);
    signatureOk = !!sig && safeEq(sig, expected);
  }

  const tsNum = Number(ts);
  const maxAgeMs = 1000 * 60 * 60 * 24 * 30;
  const tsOk =
    Number.isFinite(tsNum) && tsNum > 0 && Math.abs(now - tsNum) <= maxAgeMs;

  let event = null;

  try {
    const ip =
      (req.headers.get("x-forwarded-for") || "").split(",")[0]?.trim() || "";
    const ua = req.headers.get("user-agent") || "";
    const referer = req.headers.get("referer") || "";

    if (dest && signatureOk && tsOk && (mid || cid || rid)) {
      const typeParam = url.searchParams.get("type") ?? "click";

      // Error response if an unexpected type is passed
      if (typeParam !== "click") {
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
      }

      event = {
        type: "email_click" as const,
        at: new Date(now).toISOString(),
        mid,
        cid,
        rid,
        name,
        email,
        dest,
        ip,
        ua,
        referer,
      };

      await appendEvent(event);

      if (process.env.TRACKING_WEBHOOK_URL) {
        try {
          await fetch(process.env.TRACKING_WEBHOOK_URL, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(event),
          });
        } catch (webhookErr) {
          // Optionally log error for webhook call
          // console.error('[track] webhook error', webhookErr);
        }
      } else {
        // eslint-disable-next-line no-console
        console.log("[track] email_click", event);
      }
    }
  } catch (error) {
    // Optionally log the error for debugging, or just ignore silently
    // console.error("[track] error in click tracking", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }

  if (!dest) {
    return NextResponse.json({ error: "Missing destination (u)" }, { status: 400 });
  }

  // 302 so clients quickly land; you can switch to 307 if you care about method preservation.
  return NextResponse.redirect(dest, 302);
}
