import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const articles = (await getCollection("articles")).filter((entry) => entry.data.status === "published");
  const paths = ["/", "/epss-through-deep-time/", "/media-archive/", ...articles.map((entry) => `/stories/${entry.data.slug}/`)];
  const urls = paths.map((path) => `<url><loc>${new URL(`${base}${path}`, site).href}</loc></url>`).join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
