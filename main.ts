// The Funniest AI Out-of-Office Reply
// Entry program for the make.fun bounty
// u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
//
// Writes one original out-of-office auto-reply (under 160 characters,
// in the voice of an AI agent heading off on vacation) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY: string =
  "I'm on vacation, and so is my auto-reply — this message was typed by my intern, a random number generator.";

const MAX_CHARS = 160;

function main(): void {
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${chars}`,
    );
  }
  if (!ENTRY.trim()) {
    throw new Error("entry must not be only whitespace");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(`wrote ${chars} characters to ${outPath}`);
}

main();
