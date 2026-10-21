import { defineConfig } from "astro/config";

import { siteBase } from "./scripts/site-base.mjs";

export default defineConfig({
  base: siteBase(),
  output: "static",
});

