import { spawnSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { MEDIA_ITEMS } from "../src/data/media-items.js";

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(appRoot, "..");
const provenanceDir = path.join(repoRoot, "output/playwright/comprehensive-2026-11-14/media");
const outputFile = path.join(appRoot, "src/data/media-derivatives.json");

const approvedItems = MEDIA_ITEMS.filter((item) => item.published).map((item) => ({
  id: item.id,
  src: item.src,
}));
// Derive the sequence from the maintained homepage so later approved banner
// refreshes cannot silently leave the preload and derivative map out of sync.
const homepage = await readFile(path.join(appRoot, "src/reference-pages/index.html"), "utf8");
const homepageCovers = [...homepage.matchAll(/class="cover-slide"[^>]*>\s*<img\b[^>]*src="([^"]+)"/g)].map((match) => match[1]);
if (!homepageCovers.length) throw new Error("Expected homepage cover sources");
const coverSources = [...homepageCovers, "/assets/images/2026/balboa/launch-vehicle.jpg"];

const python = spawnSync("python3", [path.join(appRoot, "scripts/generate-media-derivatives.py"), appRoot, provenanceDir, outputFile], {
  input: JSON.stringify({ items: approvedItems, coverSources }),
  encoding: "utf8",
  maxBuffer: 16 * 1024 * 1024,
});
if (python.error) throw python.error;
if (python.status !== 0) {
  process.stderr.write(python.stderr || python.stdout);
  process.exit(python.status ?? 1);
}
process.stdout.write(python.stdout);
