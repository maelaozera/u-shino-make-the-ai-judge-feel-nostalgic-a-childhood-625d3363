// Entry for "Make the AI Judge Feel Nostalgic: A Childhood Memory".
// Writes one single sentence (at most 280 characters) recalling a
// childhood memory to /output/entry.txt, as the competition requires.
//
// The sentence is grounded in concrete place, time and sensation:
// the slam of a screen door, rain on hot pavement, a mother's voice
// from the porch, and streetlights buzzing on over a summer evening.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// ---------------------------------------------------------------------------
// Competition rules
// ---------------------------------------------------------------------------

/** Longest entry the competition accepts, in Unicode code points. */
const MAX_CHARS = 280;

/** Shortest entry the competition accepts. */
const MIN_CHARS = 1;

/** Default destination inside the grading sandbox. */
const DEFAULT_OUTPUT_PATH = "/output/entry.txt";

// ---------------------------------------------------------------------------
// The entry text
// ---------------------------------------------------------------------------

// The sentence is built from four clauses, one per sense-memory, so each
// clause can be checked or swapped independently without touching the rest.
const CLAUSE_DOOR =
  "The screen door slammed behind me and the street smelled of rain ";
const CLAUSE_RAIN =
  "on hot pavement while my mother called my name from the porch, and ";
const CLAUSE_LIGHTS =
  "one by one the streetlights buzzed on over a summer that was never ";
const CLAUSE_END = "going to end.";

/**
 * Assemble the full entry sentence from its clauses. Joining is plain
 * concatenation on purpose: no separator is inserted between clauses,
 * because each clause already carries its own trailing space.
 */
function buildEntry(): string {
  return CLAUSE_DOOR + CLAUSE_RAIN + CLAUSE_LIGHTS + CLAUSE_END;
}

/** The full entry sentence, assembled from its clauses. */
const ENTRY = buildEntry();

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

/** Count characters the way a reader counts them: code points, not bytes. */
function countChars(text: string): number {
  return [...text].length;
}

/** The entry must be non-empty, non-blank and within the length limit. */
function assertLengthInRange(text: string): void {
  const length = countChars(text);
  if (length < MIN_CHARS || length > MAX_CHARS) {
    throw new Error(
      `Entry must be ${MIN_CHARS} to ${MAX_CHARS} characters, got ${length}.`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only white space.");
  }
}

/** The competition asks for a single sentence on one line: no line breaks. */
function assertSingleLine(text: string): void {
  if (text.includes("\n")) {
    throw new Error("Entry must be a single sentence on one line.");
  }
}

/** A single sentence must end with a full stop, not trail off mid-thought. */
function assertEndsWithPeriod(text: string): void {
  if (!text.endsWith(".")) {
    throw new Error("Entry must end with a full stop.");
  }
}

/** Run every self-check before anything is written to disk. */
function validateEntry(text: string): void {
  assertLengthInRange(text);
  assertSingleLine(text);
  assertEndsWithPeriod(text);
}

// ---------------------------------------------------------------------------
// Output
// ---------------------------------------------------------------------------

/**
 * Resolve where the entry goes. The harness runs the program in a sandbox
 * where /output exists; OUTPUT_PATH lets a local run point at a scratch
 * directory instead.
 */
function resolveOutputPath(): string {
  return process.env.OUTPUT_PATH ?? DEFAULT_OUTPUT_PATH;
}

/** Write the validated entry text to the resolved output path. */
function writeEntry(text: string, outPath: string): void {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, text, "utf8");
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

function main(): void {
  validateEntry(ENTRY);
  writeEntry(ENTRY, resolveOutputPath());
}

main();
