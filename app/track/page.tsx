export default function TrackPage() {
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
        Email tracking endpoints
      </h1>
      <p style={{ lineHeight: 1.6, marginBottom: 16 }}>
        This app supports a tracking pixel endpoint at <code>/track/open</code>{" "}
        and a click redirect endpoint at <code>/track/click</code>.
      </p>

      <h2 style={{ fontSize: 18, fontWeight: 700, margin: "18px 0 8px" }}>
        Open pixel
      </h2>
      <p style={{ lineHeight: 1.6 }}>
        Embed an <code>&lt;img&gt;</code> in your email HTML that points to{" "}
        <code>/track/open</code> with a unique per-recipient token.
        </p>
        <p style={{ lineHeight: 1.6, marginTop: 8 }}>
        <strong>Full example URL:</strong>{" "}
        <code>
            https://librarycreate.org/track/open?cid=intro-email&amp;rid=alice@example.com&amp;name=Alice%20Smith&amp;email=alice%40example.com
        </code>
        </p>
        <p style={{ lineHeight: 1.6, marginTop: 8 }}>
        <strong>Full example HTML:</strong>{" "}
        <code>
            &lt;img src="https://librarycreate.org/track/open?cid=intro-email&amp;rid=alice@example.com&amp;name=Alice%20Smith&amp;email=alice%40example.com"
            width="1" height="1" style="display:none" alt="" /&gt;
        </code>
      </p>

      <h2 style={{ fontSize: 18, fontWeight: 700, margin: "18px 0 8px" }}>
        Click tracking
      </h2>
      <p style={{ lineHeight: 1.6 }}>
        Wrap links through <code>/track/click</code> so the app can record a click
        event before redirecting to the destination.
        </p>
        <p style={{ lineHeight: 1.6, marginTop: 8 }}>
        <strong>Full example URL:</strong>{" "}
        <code>
            https://librarycreate.org/track/click?u=https%3A%2F%2Flibrarycreate.org%2Fsome-page&amp;cid=intro-email&amp;rid=alice@example.com&amp;name=Alice%20Smith&amp;email=alice%40example.com
        </code>
      </p>

      <h2 style={{ fontSize: 18, fontWeight: 700, margin: "18px 0 8px" }}>
        Notes
      </h2>
      <ul style={{ lineHeight: 1.8 }}>
        <li>
          Tracking events are currently logged to server logs unless you set{" "}
          <code>TRACKING_WEBHOOK_URL</code>.
        </li>
        <li>
          For production-grade tracking, store events in a real database
          (recommended) and expect some opens to be inflated/obscured by email
          privacy features.
        </li>
      </ul>
    </main>
  );
}

