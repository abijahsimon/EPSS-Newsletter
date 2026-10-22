// Shared by Astro and the final static-file pass. Default local development stays at /.
export function siteBase(value = process.env.NEWSLETTER_BASE ?? "/") {
  const base = value.replace(/\/+$/, "") || "/";
  if (!/^\/(?:[A-Za-z0-9_-]+(?:\/[A-Za-z0-9_-]+)*)?$/.test(base)) {
    throw new Error("NEWSLETTER_BASE must be / or a path such as /newsletter");
  }
  return base;
}

export function rewriteSitePaths(source, base) {
  if (base === "/") return source;
  // Cover data from the exported page uses relative asset strings. Normalize them
  // before the runtime's startsWith('/') helper sees them on a nested route.
  return source
    // The copied media archive does not pass through Astro's metadata component.
    .replace(/(["'])https:\/\/newsletter\.epss\.ucla\.edu\/(assets\/|media-archive\/)/g,
      (_, quote, path) => `${quote}https://newsletter.epss.ucla.edu${base}/${path}`)
    .replace(/((?:\bsrc|"src")\s*:\s*")assets\//g, '$1/assets/')
    // Only known site-owned roots: do not touch external URLs, protocol-relative
    // URLs, fragments, or the '/' string used to join a dynamic story URL.
    .replace(/(["'`])\/(assets\/|stories\/|media-archive(?:\/|(?=["'`]))|downloads\/|epss-through-deep-time\/|archive-poster\/|support\.js|analytics\.js|covers-data\.js|doc-page\.js)/g,
      (_, quote, path) => `${quote}${base}/${path}`)
    .replace(/(\b(?:href|src|action)\s*=\s*["'])\/(?=[#"'])/g, `$1${base}/`)
    .replace(/url\(\/(assets\/)/g, `url(${base}/$1`);
}
