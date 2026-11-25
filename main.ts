// Entry for "Make the AI Judge Feel Nostalgic: A Childhood Memory".
// Writes one single sentence (at most 280 characters) recalling a
// childhood memory to /output/entry.txt, as the competition requires.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One sentence, grounded in concrete place, time and sensation:
// the slam of a screen door, rain on hot pavement, a mother's voice
// from the porch, and streetlights buzzing on over a summer evening.
const ENTRY =
  "The screen door slammed behind me and the street smelled of rain " +
  "on hot pavement while my mother called my name from the porch, and " +
  "one by one the streetlights buzzed on over a summer that was never " +
  "going to end.";

const MAX_CHARS = 280;

function selfCheck(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(
      `Entry must be 1 to ${MAX_CHARS} characters, got ${length}.`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only white space.");
  }
  if (text.includes("\n")) {
    throw new Error("Entry must be a single sentence on one line.");
  }
}

function main(): void {
  selfCheck(ENTRY);
  // The harness runs the program in a sandbox where /output exists;
  // OUTPUT_PATH lets a local run point at a scratch directory instead.
  const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
}

main();
