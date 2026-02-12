import fs from "fs";
import path from "path";

export type EmailEventType = "email_open" | "email_click";

export interface EmailEvent {
  type: EmailEventType;
  at: string;
  cid?: string;
  mid?: string;
  rid?: string;
  name?: string;
  email?: string;
  dest?: string;
  ip?: string;
  ua?: string;
  referer?: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const EVENTS_PATH = path.join(DATA_DIR, "email-events.json");

async function readAll(): Promise<EmailEvent[]> {
  try {
    const raw = await fs.promises.readFile(EVENTS_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err: any) {
    if (err?.code === "ENOENT") return [];
    console.error("[track] failed to read events file", err);
    return [];
  }
}

export async function appendEvent(event: EmailEvent): Promise<void> {
  try {
    await fs.promises.mkdir(DATA_DIR, { recursive: true });
    const all = await readAll();
    all.push(event);
    await fs.promises.writeFile(
      EVENTS_PATH,
      JSON.stringify(all, null, 2),
      "utf8"
    );
  } catch (err) {
    console.error("[track] failed to append event", err);
  }
}

