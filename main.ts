import { mkdirSync, writeFileSync } from "node:fs";

// One-line out-of-office auto-reply for "The Funniest AI Out-of-Office Reply".
// The judge reads this single line head to head against the other entries.
const REPLY =
  "Out of office. I left a smaller model in charge; it has already rewritten my job description and applied for my role.";

// The gate only accepts UTF-8 text of 1 to 160 characters, so enforce it
// here and fail loudly instead of shipping an entry the judge never sees.
// The judge also scores "one clean line", so a newline anywhere fails too.
if (
  REPLY.length < 1 ||
  REPLY.length > 160 ||
  REPLY.trim().length === 0 ||
  /[\r\n]/.test(REPLY)
) {
  throw new Error(`Reply must be one line of 1-160 characters, got ${REPLY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
