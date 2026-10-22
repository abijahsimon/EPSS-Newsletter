import type { APIRoute } from "astro";
import { CATEGORIES, MEDIA_ITEMS } from "../../data/media-items.js";

// The editorial manifest stays in source. Publish only reader-facing fields and
// approved records; never ship approval notes, source filenames or held entries.
const publicFields = [
  "id", "title", "src", "thumbnailSrc", "alt", "caption", "mediaType",
  "category", "collection", "group", "season", "date", "location", "course",
  "relatedStory", "photographer", "artist", "sortOrder", "published",
];

export const GET: APIRoute = () => {
  const items = MEDIA_ITEMS.filter((item) => item.published).map((item) => {
    const record = item as Record<string, unknown>;
    return {
      ...Object.fromEntries(publicFields.filter((key) => key in record).map((key) => [key, record[key]])),
      contest: String(item.sourceId).startsWith("photo-contest"),
    };
  });
  return new Response(
    `export const CATEGORIES = ${JSON.stringify(CATEGORIES)};\nexport const MEDIA_ITEMS = ${JSON.stringify(items)};\n`,
    { headers: { "Content-Type": "application/javascript; charset=utf-8" } },
  );
};
