# EPSS Newsletter Editing Guide

This guide covers content editing for the Phase 1 Astro newsletter app in `app/`.

The legacy static site remains at the repository root. Content changes for the Astro app should be made inside `app/`, not in the root `index.html`.

## 1. Run the Local Preview

### Requirements

- Node.js 22.12 or newer.
- pnpm 11.7.

Check the installed versions:

```sh
node --version
pnpm --version
```

### First run

From the repository root:

```sh
cd app
pnpm install
pnpm dev
```

Astro will print a local address, normally:

```text
http://localhost:4321/
```

Leave the development server running while editing. Astro will usually refresh the page after a content file is saved.

Stop the server with `Control-C`.

### Validate before finishing

From `app/`:

```sh
pnpm check
pnpm build
```

- `pnpm check` checks Astro, TypeScript, and the content schemas.
- `pnpm build` creates a production build in `app/dist/`.

Both commands should pass before content changes are committed.

## 2. Where Newsletter Content Lives

The current content source is:

```text
app/src/content/
  issues/
    2026.json
  articles/
    rimfax.md
    suburban-retrospective.md
```

### `app/src/content/issues/2026.json`

This file contains:

- Issue title, year, description, and status.
- Header navigation.
- Hero copy and hero image.
- Calls to action and donation link.
- Section/category titles and introductions.
- Feature cards and brief cards.
- Community cards and people information.
- Research updates.
- Recognition, commencement, and giving panels.
- Section ordering.
- Article ordering.
- Table-of-contents links.
- Footer text.

### `app/src/content/articles/*.md`

These Markdown files contain the long-form article text and article-level metadata.

### `app/public/assets/`

This folder contains the image copies used by the Astro app:

```text
app/public/assets/
  brand/
  images/
  people/
```

## 3. Edit Article Text

Open the relevant file in:

```text
app/src/content/articles/
```

Each article begins with frontmatter followed by Markdown content:

```md
---
articleId: rimfax-full
issue: 2026
slug: rimfax
status: published
category: Long-form Template
title: RIMFAX Feature Full Article
variant: feature
---

Article text begins here.

Add another paragraph by leaving a blank line between paragraphs.
```

The fields above the second `---` control the article record:

- `articleId`: Unique ID used to place the article in the issue.
- `issue`: Issue year; currently `2026`.
- `slug`: URL-friendly article name reserved for future article routes.
- `status`: `draft`, `review`, `published`, or `archived`.
- `category`: Small label displayed above the article title.
- `title`: Public article title.
- `variant`: `feature` for the dark treatment or `standard` for the light treatment.

Do not change `articleId` without also updating the matching `articleIds` entry in `2026.json` and any links pointing to `#articleId`.

## 4. Edit Section or Category Titles

Open:

```text
app/src/content/issues/2026.json
```

The `sections` array contains the page sections in display order. Common editable fields include:

- `kicker`: Small uppercase section label.
- `title`: Main section heading.
- `intro`: Introductory paragraph.
- `category`: Label on an individual story or card.

Example:

```json
{
  "type": "briefs",
  "id": "briefs",
  "kicker": "Issue Briefs",
  "title": "Short stories about events, students, and EPSS research.",
  "intro": "Use this module for planned pieces..."
}
```

Safe edits:

- Change `kicker`, `title`, `intro`, `category`, or summary text.
- Reorder complete section objects within the `sections` array.
- Reorder complete card objects within a section's `cards`, `stories`, `items`, or `panels` array.

Use care with:

- `type`: Selects the layout component. Do not rename it casually.
- `id`: Controls anchor links. If changed, update every matching `href`.
- `href`: Must point to an existing ID or a valid external URL.

JSON does not support comments. Maintain commas, quotation marks, brackets, and braces exactly.

## 5. Add or Replace Images

### Recommended method

1. Add the new file to the appropriate folder:
   - General photography: `app/public/assets/images/`
   - Headshots: `app/public/assets/people/`
   - Approved brand artwork: `app/public/assets/brand/`
2. Use a descriptive, stable filename.
3. Update the relevant `image` path in `app/src/content/issues/2026.json`.
4. Update the matching `imageAlt` text.
5. Review the result at desktop and mobile widths.
6. Run `pnpm check` and `pnpm build`.

Example:

```json
{
  "image": "/assets/images/mars-radar-team-2026.jpg",
  "imageAlt": "EPSS researchers reviewing RIMFAX radar observations."
}
```

Paths beginning with `/assets/` resolve from `app/public/assets/`.

### Image recommendations

- Use JPG or WebP for photographs.
- Use SVG only for approved vector artwork.
- Prefer adding a new filename instead of overwriting an unrelated image.
- Use images large enough for their intended display size.
- Hero and card images use `object-fit: cover`, so their edges may be cropped.
- Confirm the subject remains visible on mobile.
- Write useful alt text describing what matters in the image.
- Keep image-credit, copyright, and permission records separately until media metadata is added in a later phase.

Do not move, rename, or overwrite the source archive under the repository-root `assets/` folder when changing the Astro app.

## 6. Edit People or Headshots

Phase 1 does not yet have a separate people collection. Person details are stored directly inside community card objects in:

```text
app/src/content/issues/2026.json
```

Look for the section with:

```json
"type": "community"
```

A person/profile card currently looks like:

```json
{
  "id": "faculty-feature",
  "image": "/assets/people/edwin-schauble.jpg",
  "imageAlt": "Edwin Schauble portrait.",
  "category": "Faculty Feature",
  "title": "Edwin Schauble: Isotope Analysis",
  "summary": "Feature slot for a faculty profile..."
}
```

To change a person or headshot:

1. Add the headshot to `app/public/assets/people/`.
2. Update `image` and `imageAlt`.
3. Update `title`, `category`, and `summary` as needed.
4. Keep the card `id` unique.
5. Update table-of-contents links if the ID changes.

Because person data is embedded in the issue JSON, changing one card does not automatically update references elsewhere.

## 7. Add a New Article

### Add the long-form article

1. Copy an existing Markdown file in `app/src/content/articles/` as a starting point.
2. Give the new file a descriptive lowercase filename, such as:

```text
app/src/content/articles/new-faculty-research.md
```

3. Set unique frontmatter:

```md
---
articleId: new-faculty-research-full
issue: 2026
slug: new-faculty-research
status: published
category: Faculty Research
title: A New Faculty Research Story
variant: standard
---

Write the article here.
```

4. In `app/src/content/issues/2026.json`, find the section with `"type": "articles"`.
5. Add the new `articleId` to `articleIds` in the desired display order:

```json
{
  "type": "articles",
  "ariaLabel": "Long-form article placeholders",
  "articleIds": [
    "rimfax-full",
    "suburban-full",
    "new-faculty-research-full"
  ]
}
```

### Add a card or link to the article

Long-form articles do not automatically create a feature, brief, community card, navigation item, or table-of-contents entry.

If the article needs a teaser card, add a card to the appropriate `stories` or `cards` array and link it to the article anchor:

```json
"link": {
  "label": "Read story",
  "href": "#new-faculty-research-full"
}
```

Then add or update table-of-contents and navigation links where appropriate.

Finally, run:

```sh
pnpm check
pnpm build
```

## 8. Remove or Hide an Article

### Hide a long-form article from the public page

Change its Markdown frontmatter status from `published` to one of:

```text
draft
review
archived
```

Only published articles are rendered publicly.

Also remove or update any public card, table-of-contents entry, or link that points to the hidden article. Cards currently do not inherit the Markdown article status.

### Remove an article from the issue layout

Remove its `articleId` from the `articleIds` array in `2026.json`.

The Markdown file may remain as an unpublished source record, or it may be deleted in a separate intentional cleanup. Prefer changing its status first when unsure.

### Remove a card-only article

For feature, brief, community, research, or recognition items stored only in `2026.json`, remove the complete object from its array.

After removal:

- Check commas around neighboring objects.
- Remove dangling navigation or table-of-contents links.
- Run `pnpm check` and `pnpm build`.

Phase 1 has no `enabled` or status field for most card and section types. Hiding those items requires removing their object from the rendered array.

## 9. Files That Should Not Be Edited Manually

Do not manually edit:

- `app/dist/`: Generated by `pnpm build`.
- `app/.astro/`: Generated Astro metadata and types.
- `app/node_modules/`: Installed dependencies.
- `app/pnpm-lock.yaml`: Update only through intentional dependency commands.
- `app/pnpm-workspace.yaml`: Package-manager build permissions, not newsletter content.

For ordinary content updates, avoid editing:

- `app/src/pages/index.astro`: Rendering logic.
- `app/src/layouts/`: Shared HTML shell.
- `app/src/components/`: Reusable visual components.
- `app/src/scripts/`: Mobile-menu behavior.
- `app/src/styles/newsletter.css`: Phase 1 visual baseline.
- `app/src/content.config.ts`: Content schemas.
- Root `index.html`, `styles.css`, and `script.js`: Legacy backup site.
- Root `assets/`: Legacy/source asset archive.

If a requested change requires one of these files, treat it as an application or design change rather than a content edit.

## 10. Known Phase 1 Limitations

The current JSON/Markdown workflow is intentionally small and local. Known limitations include:

- No database or CMS.
- No authentication, roles, or private editor portal.
- No WYSIWYG or rich-text editor.
- No protected preview for draft or review content.
- Only published issues and articles render in the public app.
- Section, card, navigation, and table-of-contents relationships are maintained manually.
- Cards do not automatically inherit an article's publication status.
- Most sections and cards do not have an `enabled` or status field.
- People are embedded in issue JSON rather than stored as reusable person records.
- Images have no structured caption, credit, copyright, rights, focal-point, or permission fields.
- Asset files are not automatically removed when content stops referencing them.
- Nested section data has lighter schema validation than issue and article metadata, so some structural mistakes may appear only during rendering.
- Article slugs are recorded but Phase 1 does not yet create standalone article routes.
- The issue JSON is large and can produce merge conflicts if several people edit it simultaneously.
- There is no automatic annual issue duplication workflow yet.

## Quick Editing Checklist

Before committing a content change:

- [ ] Preview the page locally.
- [ ] Confirm the edited text appears in the correct section.
- [ ] Confirm image paths and alt text.
- [ ] Check desktop and mobile crops.
- [ ] Check navigation and table-of-contents anchors.
- [ ] Run `pnpm check`.
- [ ] Run `pnpm build`.
- [ ] Confirm generated folders are not staged.

