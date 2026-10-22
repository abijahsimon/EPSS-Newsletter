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
const directories = new Map();
async function checkCase(path) {
  const relative = path.slice(root.length);
  let directory = root;
  for (const segment of relative.split("/").filter(Boolean)) {
    if (!directories.has(directory)) directories.set(directory, await readdir(directory));
    if (!directories.get(directory).includes(segment)) throw new Error(`Case mismatch: ${path}`);
    directory = join(directory, segment);
  }
}
for (const page of pages) {
  const text = await readFile(page, "utf8");
  const ownIds = new Set([...text.matchAll(/\b(?:id|name)=["']([^"']+)["']/g)].map((match) => match[1]));
  for (const match of text.matchAll(/\bhref=["']#([^"']+)["']/g)) {
    if (!ownIds.has(decodeURIComponent(match[1]))) errors.push(`${page}: missing same-page fragment: #${match[1]}`);
  }
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
      await checkCase(target);
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

// Dynamic gallery URLs are not present as HTML attributes. Validate the actual
// distributable manifest, including its publication/privacy boundary.
const { MEDIA_ITEMS } = await import(new URL("../dist/media-archive/media-items.js", import.meta.url));
const { MEDIA_ITEMS: editorialItems } = await import(new URL("../src/data/media-items.js", import.meta.url));
const expectedIds = editorialItems.filter((item) => item.published).map((item) => item.id).sort();
if (JSON.stringify(MEDIA_ITEMS.map((item) => item.id).sort()) !== JSON.stringify(expectedIds)) {
  errors.push("Public gallery records differ from the approved publication set");
}
for (const item of MEDIA_ITEMS) {
  if (["sourceId", "suppliedBy", "permissionStatus", "creditStatus", "seasonStatus", "blocker"].some((key) => key in item)) {
    errors.push(`Internal media fields published: ${item.id}`);
  }
  for (const key of ["src", "thumbnailSrc"]) {
    const value = item[key];
    if (!value?.startsWith(prefix)) { errors.push(`Gallery path outside ${prefix}: ${item.id}`); continue; }
    try { await checkCase(join(root, value.slice(prefix.length))); }
    catch { errors.push(`Missing/case-mismatched gallery asset: ${value}`); }
  }
}
for (const path of ["assets/images/2026/photo-contest/westwood-family.jpg", "assets/images/2026/balboa/balboa-magnetosphere-diagram.png"]) {
  try { await stat(join(root, path)); errors.push(`Held-only asset distributed: ${path}`); }
  catch { /* Intentionally absent from the build; source original is preserved. */ }
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Static links: ${pages.length} HTML files, ${checked} local URLs; ${MEDIA_ITEMS.length} public gallery records; case-sensitive paths and publication boundary pass for ${prefix}`);
}
