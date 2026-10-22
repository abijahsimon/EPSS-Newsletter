import { rm } from "node:fs/promises";

// Preserve originals and all seven editorial holds in source. These two files
// have no approved article use, so they must not be distributed with the site.
const heldOnlyAssets = [
  "assets/images/2026/photo-contest/westwood-family.jpg",
  "assets/images/2026/balboa/balboa-magnetosphere-diagram.png",
];
for (const path of heldOnlyAssets) {
  await rm(new URL(`../dist/${path}`, import.meta.url), { force: true });
}
console.log(`Public media: omitted ${heldOnlyAssets.length} held-only files; source originals preserved`);
