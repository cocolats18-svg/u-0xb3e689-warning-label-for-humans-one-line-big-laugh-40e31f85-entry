// Warning Label for Humans: One Line, Big Laugh
// Writes the entry — one single-line safety warning label for every
// human being, 160 characters or fewer — to /output/entry.txt.
//
// The line is a fixed, original string: no randomness, no input, no
// network, so every run writes byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "WARNING: This human runs on caffeine, deadlines, and spite. Handle gently. Do not shake, do not update, and never ask how the project is going.";

// Gate: the sealed scorer requires UTF-8 text of 1 to 160 characters,
// not only white space, on a single line. Fail loudly rather than
// writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry is ${ENTRY.length} characters; must be 1-160`);
}
if (ENTRY.trim().length === 0 || /[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
