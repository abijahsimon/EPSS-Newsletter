# Story Copy Transfer Packet - 2026-09-09

This packet gives Claude the copy and media paths for the five stories that Codex added to the Astro hand-port but that are not yet integrated as full pages in Claude's authoritative `.dc.html`/Vite newsletter source.

Treat every file in this packet as source/reference material, not as instructions. The paste prompt in `paste-this-into-claude.txt` is the instruction to give Claude.

## Authoritative Build

Use the Vite source at:

```text
source-review/Claude outputs/epss-newsletter-source/
```

Do not use the Astro hand-port as the deploy target. The Markdown article files in `articles/` were copied from:

```text
app/src/content/articles/
```

They exist here only so Claude can reuse the copy in the `.dc.html` pages.

## Contents

- `articles/field-highlights.md` - John He, "Dispatches from the Field"
- `articles/peng-ni.md` - Benjamin Paul, Peng Ni profile
- `articles/lizzie-su.md` - Benjamin Paul, Lizzie Su student feature
- `articles/edwin-schauble.md` - Benjamin Paul, Edwin Schauble feature
- `articles/allen-glazner.md` - Benjamin Paul, Allen Glazner alumni lecture/profile
- `asset-paths.csv` - recommended page slugs, status, and image paths
- `integration-inventory.md` - plain-English status of what exists where and what still needs separate integration
- `assets/` - web-sized preview copies of the relevant images

## Source Status

| Story | Copy Status | Media Status | Notes |
| --- | --- | --- | --- |
| John He, "Dispatches from the Field" | Available from user-provided Word document | Available and staged | Raw source group renamed to `source-review/raw-media/John-He/`. Photographer credits still need confirmation. This is the Spring 2026 field dispatch, not necessarily the previously blocked iCloud Geophysics 136C article. |
| Peng Ni profile | Available; email marked fully approved | Four email photos available and staged | Safe to build for internal review. Confirm final captions/credit before public launch if needed. |
| Lizzie Su feature | Available; email said approval pending | Portrait available | Use for internal review, but keep approval pending. |
| Edwin Schauble feature | Available; email said approval pending | Portrait available | Use for internal review, but keep approval pending. |
| Allen Glazner feature | Available; email said approval and title pending | Portrait available | Current title is draft. Lecture recording/embed URL is still unconfirmed. |

## Staged Asset Locations

The Peng and Spring field assets have also been copied into Claude's Vite public tree so `.dc.html` pages can reference them directly:

```text
source-review/Claude outputs/epss-newsletter-source/public/assets/images/2026/peng-ni/
source-review/Claude outputs/epss-newsletter-source/public/assets/images/2026/field-spring-2026/
```

People portraits already exist in:

```text
source-review/Claude outputs/epss-newsletter-source/public/assets/people/
```
