import test from "node:test";
import assert from "node:assert/strict";
import { siteBase, rewriteSitePaths } from "./site-base.mjs";

test("base accepts root and nested paths, rejects URLs and traversal", () => {
  assert.equal(siteBase("/"), "/");
  assert.equal(siteBase("/newsletter/"), "/newsletter");
  assert.equal(siteBase("/epss/newsletter"), "/epss/newsletter");
  for (const bad of ["https://example.com", "../x", "/a/../b", "/a?b", "//other"]) {
    assert.throws(() => siteBase(bad));
  }
});

test("prefixes static HTML, CSS, gallery and archive paths exactly once", () => {
  const source = '<a href="/#awards"><img src="/assets/a.jpg"></a>\n' +
    'src: "assets/covers/a.jpg"; "src": "assets/covers/b.jpg";\n' +
    'a.href = "/stories/" + slug + "/"; url(/assets/font.woff2); url("/assets/bg.jpg")';
  const result = rewriteSitePaths(source, "/newsletter");
  assert.ok(result.includes('href="/newsletter/#awards"'));
  assert.ok(result.includes('src: "/newsletter/assets/covers/a.jpg"'));
  assert.ok(result.includes('"src": "/newsletter/assets/covers/b.jpg"'));
  assert.ok(result.includes('"/newsletter/stories/" + slug + "/"'));
  assert.ok(result.includes('url(/newsletter/assets/font.woff2)'));
  assert.equal(rewriteSitePaths(result, "/newsletter"), result);
});

test("preserves third-party signup, remote PDFs, fragments and protocol-relative URLs", () => {
  const source = '<form action="https://docs.google.com/forms/u/0/d/e/example/formResponse">' +
    '<a href="https://epss.ucla.edu/wp-content/file.pdf"><a href="#top">' +
    '<script src="//cdn.example.com/assets/a.js">';
  assert.equal(rewriteSitePaths(source, "/newsletter"), source);
  assert.equal(rewriteSitePaths(source, "/"), source);
});
