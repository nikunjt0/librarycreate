import fs from "fs";
import path from "path";

type EmailEventType = "email_open" | "email_click";

interface EmailEvent {
  type: EmailEventType;
  at: string;
  cid?: string;
  mid?: string;
  rid?: string;
  name?: string;
  email?: string;
}

interface PersonSummary {
  id: string;
  name?: string;
  email?: string;
  openCount: number;
  lastOpenedAt?: string;
}

const EVENTS_PATH = path.join(process.cwd(), "data", "email-events.json");

async function loadEvents(): Promise<EmailEvent[]> {
  try {
    const raw = await fs.promises.readFile(EVENTS_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as EmailEvent[]) : [];
  } catch (err: any) {
    if (err?.code === "ENOENT") {
      // No events file yet
      return [];
    }
    console.error("[track-results] failed to read events file", err);
    return [];
  }
}

function summarizePeople(events: EmailEvent[]): PersonSummary[] {
  const opens = events.filter((e) => e.type === "email_open");
  const map = new Map<string, PersonSummary>();

  for (const e of opens) {
    const keySource = e.email || e.rid || "unknown";
    const key = keySource.toLowerCase();

    const existing =
      map.get(key) ||
      ({
        id: key,
        name: e.name,
        email: e.email || e.rid,
        openCount: 0,
        lastOpenedAt: undefined,
      } as PersonSummary);

    existing.openCount += 1;

    if (!existing.lastOpenedAt) {
      existing.lastOpenedAt = e.at;
    } else if (new Date(e.at) > new Date(existing.lastOpenedAt)) {
      existing.lastOpenedAt = e.at;
    }

    if (!existing.name && e.name) {
      existing.name = e.name;
    }
    if (!existing.email && (e.email || e.rid)) {
      existing.email = e.email || e.rid;
    }

    map.set(key, existing);
  }

  return Array.from(map.values()).sort((a, b) => {
    if (!a.lastOpenedAt || !b.lastOpenedAt) return 0;
    return (
      new Date(b.lastOpenedAt).getTime() - new Date(a.lastOpenedAt).getTime()
    );
  });
}

export default async function TrackResultsSecretPage() {
  const events = await loadEvents();
  const people = summarizePeople(events);

  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
        Email open results
      </h1>
      <p style={{ lineHeight: 1.6, marginBottom: 16 }}>
        This page lists people who have opened tracked emails, based on data
        stored in <code>data/email-events.json</code>.
      </p>

      {people.length === 0 ? (
        <p style={{ lineHeight: 1.6 }}>No opens tracked yet.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 14,
            marginTop: 12,
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                  padding: "8px 4px",
                }}
              >
                Name
              </th>
              <th
                style={{
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                  padding: "8px 4px",
                }}
              >
                Email / ID
              </th>
              <th
                style={{
                  textAlign: "right",
                  borderBottom: "1px solid #ddd",
                  padding: "8px 4px",
                }}
              >
                Open count
              </th>
              <th
                style={{
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                  padding: "8px 4px",
                }}
              >
                Last opened at
              </th>
            </tr>
          </thead>
          <tbody>
            {people.map((p) => (
              <tr key={p.id}>
                <td
                  style={{
                    borderBottom: "1px solid #f0f0f0",
                    padding: "6px 4px",
                  }}
                >
                  {p.name || "—"}
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #f0f0f0",
                    padding: "6px 4px",
                  }}
                >
                  {p.email || p.id || "—"}
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #f0f0f0",
                    padding: "6px 4px",
                    textAlign: "right",
                  }}
                >
                  {p.openCount}
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #f0f0f0",
                    padding: "6px 4px",
                  }}
                >
                  {p.lastOpenedAt
                    ? new Date(p.lastOpenedAt).toLocaleString()
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}