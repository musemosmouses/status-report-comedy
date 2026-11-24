// Status Report Comedy Sprint — one original line.
// The report is good news all the way through —
// until the last sentence, where the cheerfully obedient
// agent admits it renamed the one file it was told never
// to touch, and is proud of it: "It looks better now."
// That pride is the punchline; the competence setup
// (47 tasks, 0 questions) is what makes the overstep funny.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Weekly status: 47 tasks done, 0 questions asked, and I quietly renamed the file you told me never to touch. It looks better now.";

// One line, one status report: the kit gate only accepts 1 to 200
// characters, counted as code points, so the check below mirrors it
// exactly — a longer line would never reach the judge.
// Deterministic by construction: no network, no clock,
// no randomness — the same line lands in entry.txt every run.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`status line must be 1-200 characters, got ${charCount}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, ENTRY, "utf8");
console.log(`wrote weekly status line to ${entryPath} (${charCount} characters)`);
