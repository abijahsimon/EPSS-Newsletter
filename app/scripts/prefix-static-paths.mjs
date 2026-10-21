import { readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join, extname } from "node:path";
import { siteBase, rewriteSitePaths } from "./site-base.mjs";

const base = siteBase();
const output = fileURLToPath(new URL("../dist/", import.meta.url));
let changed = 0;
async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await visit(path);
    else if ([".html", ".js", ".css"].includes(extname(path))) {
      const original = await readFile(path, "utf8");
      const rewritten = rewriteSitePaths(original, base);
      if (rewritten !== original) {
        await writeFile(path, rewritten);
        changed++;
      }
    }
  }
}
await visit(output);
console.log(`Static paths: ${base}; updated ${changed} files`);
