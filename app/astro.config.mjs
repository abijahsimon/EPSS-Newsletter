import { defineConfig } from "astro/config";

import { siteBase } from "./scripts/site-base.mjs";

export default defineConfig({
  site: "https://newsletter.epss.ucla.edu",
  base: siteBase(),
  output: "static",
});

