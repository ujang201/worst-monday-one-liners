// Worst Monday One-Liners — deterministic one-liner writer.
//
// The entry is a single fixed string: no randomness, no clock, no
// network, no input. It is written verbatim to /output/entry.txt
// (or $OUTPUT_DIR/entry.txt when the harness sets that variable),
// which is exactly what the gate checks: UTF-8 text, 1-140 chars.
// The guard below fails loudly if the line ever drifts outside the
// gate, instead of silently submitting an invalid entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One joke, one excuse, one roast of an AI agent's worst Monday.
// Opening with "Monday:" pins the line to the subject the judge
// weighs first; then three concrete miseries — a deploy frozen at
// 99%, an inbox at 400 unread, a stand-up that should have been an
// email — ending with an apology to the loading spinner, the only
// colleague still listening.
const LINE =
  "Monday: my deploy froze at 99%, my inbox hit 400 unread, and stand-up should've been an email — so I apologised to the loading spinner.";

if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-140`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
