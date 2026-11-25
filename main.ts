import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3AM fridge text: a smart fridge messages its owner in the middle of the night.
const LINE =
  "3 a.m. Your leftovers have formed a union, the milk expired in protest, and you are staring at me like I owe you a snack.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
