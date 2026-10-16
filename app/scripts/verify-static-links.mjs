import { readdir, readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { siteBase } from "./site-base.mjs";

const root = fileURLToPath(new URL("../dist/", import.meta.url));
const prefix = siteBase() === "/" ? "/" : `${siteBase()}/`;
const pages = [];
async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await collect(path);
    else if (entry.name.endsWith(".html")) pages.push(path);
  }
}
await collect(root);
let checked = 0;
const errors = [];
for (const page of pages) {
  const text = await readFile(page, "utf8");
  for (const match of text.matchAll(/\b(?:href|src|action)=["'](\/[^"']*)["']/g)) {
    const value = match[1];
    if (value.startsWith("//")) continue;
    checked++;
    const url = new URL(value.replaceAll("&amp;", "&"), "https://local.invalid");
    if (!url.pathname.startsWith(prefix)) {
      errors.push(`${page}: outside ${prefix}: ${value}`);
      continue;
    }
    let target = join(root, decodeURIComponent(url.pathname.slice(prefix.length)));
    try {
      if ((await stat(target)).isDirectory()) target = join(target, "index.html");
      await stat(target);
      if (url.hash && target.endsWith(".html")) {
        const targetHtml = await readFile(target, "utf8");
        const ids = new Set([...targetHtml.matchAll(/\b(?:id|name)=["']([^"']+)["']/g)].map(m => m[1]));
        if (!ids.has(decodeURIComponent(url.hash.slice(1)))) {
          errors.push(`${page}: missing fragment: ${value}`);
        }
      }
    } catch {
      errors.push(`${page}: missing file: ${value}`);
    }
  }
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Static links: ${pages.length} HTML files, ${checked} local URLs, no missing files/fragments or paths outside ${prefix}`);
}
