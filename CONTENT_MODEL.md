# EPSS Annual Newsletter Content Model

## Purpose

This document defines a future data model for the EPSS Annual Newsletter based on the Phase 1 Astro JSON/Markdown implementation.

It is a schema proposal, not a database design or implementation. The goal is to preserve the current content model while making it suitable for yearly issues, reusable people and assets, draft/publish workflows, and a future editor portal.

## Current Source of Truth

Phase 1 stores content in:

```text
app/src/content/
  issues/2026.json
  articles/*.md
```

Images used by the app live in:

```text
app/public/assets/
```

The current Astro schemas live in:

```text
app/src/content.config.ts
```

## Modeling Principles

1. Keep public content separate from internal editorial metadata.
2. Give every reusable record a stable internal ID.
3. Use relationships instead of copying the same person, image, category, or article metadata into multiple places.
4. Let editors control meaning, copy, selection, status, and ordering.
5. Let the system generate technical values, timestamps, routes, reverse relationships, and validation state.
6. Preserve the current visual variants without storing raw HTML or CSS in content records.
7. Keep exported content portable so it is not locked to one database or CMS.

## Proposed Relationships

```text
Issue
  └── Sections
        └── Article placements
              └── Articles
                    ├── People
                    ├── Categories
                    └── Assets

Issue, Section, Article, Person, and Category records may all reference Assets.
```

An article should exist once. Its placement record should control where and how it appears within a particular issue.

## Field Ownership Key

- **Editor:** An editor should enter, choose, order, approve, or revise the value.
- **Automatic:** The application should derive or maintain the value.
- **Developer:** A developer-controlled enum, schema, component mapping, or system configuration.
- **Current:** Present in the Phase 1 JSON/Markdown structure.
- **Proposed:** Missing from Phase 1 and recommended for the future model.

## 1. Issue Fields

An Issue represents one annual EPSS newsletter.

### Current issue fields

| Field | Type | Current use | Owner |
|---|---|---|---|
| `year` | integer | Issue year, currently `2026` | Editor |
| `dateLabel` | string | Display label such as `2025–2026` | Editor |
| `status` | enum | `draft`, `review`, `published`, or `archived` | Editor action |
| `title` | string | Document/page title | Editor |
| `seoDescription` | string | Search description | Editor with automatic default |
| `brand.image` | asset path | Department logo | Editor selects; developer may provide default |
| `brand.alt` | string | Logo alternative text | Editor with default |
| `navigation[]` | link objects | Header labels and anchor destinations | Currently editor-maintained |
| `hero.image` | asset path | Hero image | Editor |
| `hero.imageAlt` | string | Hero alternative text | Editor |
| `hero.kicker` | string | Small hero label | Editor |
| `hero.title` | string | Main issue heading | Editor |
| `hero.dek` | string | Issue introduction | Editor |
| `hero.actions[]` | link objects | Hero calls to action | Editor |
| `hero.supportCta` | link object | Donation label and URL | Editor; default may be configured |
| `hero.meta.eyebrow` | string | Issue-summary label | Editor |
| `hero.meta.title` | string | Issue-summary headline | Editor |
| `hero.meta.body` | string | Issue-summary detail | Editor |
| `sections[]` | embedded objects | Ordered issue layout | Editor |
| `footer.organization` | string | Organization name | Usually configured default |
| `footer.description` | string | Footer description | Editor |
| `footer.backToTopLabel` | string | Back-to-top copy | Configured default |

### Proposed issue fields

| Field | Type | Purpose | Owner |
|---|---|---|---|
| `id` | UUID/stable ID | Internal identity independent of year or slug | Automatic |
| `slug` | string | Durable public route segment such as `2026` | Automatic from year, editable override |
| `academicYearStart` | integer | Structured start year | Editor |
| `academicYearEnd` | integer | Structured end year | Editor |
| `seoTitle` | string | Optional search-title override | Editor; defaults to `title` |
| `socialTitle` | string | Optional social-sharing title | Editor; defaults from issue title |
| `socialDescription` | string | Optional social-sharing summary | Editor; defaults from dek/SEO description |
| `socialAssetId` | asset reference | Social preview image | Editor |
| `themeKey` | enum | Approved visual theme | Editor selects from developer-defined values |
| `locale` | string | Content language/locale | Configured default; editor if multilingual |
| `publishedAt` | datetime | Actual publication time | Automatic when published |
| `archivedAt` | datetime | Archive time | Automatic when archived |
| `createdAt` | datetime | Record creation time | Automatic |
| `updatedAt` | datetime | Last saved time | Automatic |
| `createdBy` | user reference | Creator audit record | Automatic after authentication exists |
| `updatedBy` | user reference | Last editor audit record | Automatic after authentication exists |
| `isLatestPublishedIssue` | boolean/derived | Identifies the current issue | Automatic |
| `previewToken` | secret/system value | Protected preview access | Automatic; never editor-visible as content |

## 2. Section and Category Fields

### Section model

A Section represents an ordered module within an issue. Phase 1 embeds sections directly in `2026.json`.

#### Current common section fields

| Field | Type | Current use | Owner |
|---|---|---|---|
| `type` | string enum | Selects a rendering pattern | Developer-defined; editor selects |
| `id` | string | Anchor identity where present | Currently editor-maintained |
| `ariaLabel` | string | Accessible label for some sections | Editor/default |
| `kicker` | string | Small section label | Editor |
| `title` | string | Section heading | Editor |
| `intro` | string | Section introduction | Editor |
| Array position | implicit order | Controls section display order | Editor |

Current section types are:

- `planning`
- `features`
- `briefs`
- `community`
- `research`
- `recognition`
- `articles`
- `notes`
- `contents`

Current type-specific arrays include:

- `lanes[]` and lane `items[]`
- `stories[]`
- `cards[]`
- `items[]`
- `panels[]`
- `articleIds[]`
- `links[]`

#### Proposed section fields

| Field | Type | Purpose | Owner |
|---|---|---|---|
| `id` | UUID/stable ID | Internal section identity | Automatic |
| `issueId` | issue reference | Parent issue | Automatic from placement/context |
| `slug` | string | Public anchor/route-safe identity | Automatic from title, editable override |
| `type` | enum | Approved component/layout type | Editor selects from developer-defined values |
| `status` | enum | `draft`, `review`, `published`, `hidden`, `archived` | Editor action |
| `kicker` | string | Small label | Editor |
| `title` | string | Section heading | Editor |
| `intro` | rich text/string | Section introduction | Editor |
| `ariaLabel` | string | Accessible label when visible title is insufficient | Editor; automatic default from title |
| `themeKey` | enum | Approved color treatment | Editor selects |
| `layoutVariant` | enum | Approved layout variation | Editor selects |
| `displayOrder` | integer/rank | Position within issue | Editor through drag-and-drop |
| `showInNavigation` | boolean | Include in primary issue navigation | Editor |
| `showInTableOfContents` | boolean | Include in generated contents | Editor |
| `navigationLabel` | string | Optional shorter label | Editor; defaults from title |
| `featuredAssetId` | asset reference | Optional section artwork | Editor |
| `createdAt` / `updatedAt` | datetime | Audit timestamps | Automatic |

### Category model

Phase 1 stores category labels as plain strings on cards, panels, and articles. Categories are not reusable records yet.

#### Current category field

| Field | Type | Current use | Owner |
|---|---|---|---|
| `category` | string | Display label such as `Research Feature`, `Alumni Profile`, or `Giving` | Editor |

#### Proposed category fields

| Field | Type | Purpose | Owner |
|---|---|---|---|
| `id` | UUID/stable ID | Reusable identity | Automatic |
| `name` | string | Canonical category name | Editor |
| `slug` | string | URL/filter-safe identifier | Automatic from name, editable override |
| `displayLabel` | string | Optional public label | Editor; defaults from name |
| `description` | string | Internal/public explanation | Editor |
| `displayOrder` | integer/rank | Ordering in category lists | Editor |
| `status` | enum | Active or archived | Editor action |
| `themeKey` | enum | Approved accent treatment | Editor selects; developer-defined |
| `createdAt` / `updatedAt` | datetime | Audit timestamps | Automatic |

An article may have one primary category and zero or more secondary categories/tags.

## 3. Article Fields

An Article represents the canonical story content. Its visual position in an issue should be stored separately as an Article Placement.

### Current article fields

| Field | Type | Current use | Owner |
|---|---|---|---|
| `articleId` | string | Connects Markdown to `articleIds[]` | Currently editor-maintained |
| `issue` | integer | Issue year relationship | Editor |
| `slug` | string | Future route-safe name | Editor |
| `status` | enum | `draft`, `review`, `published`, or `archived` | Editor action |
| `category` | string | Display category | Editor |
| `title` | string | Article title | Editor |
| `variant` | enum | `feature` or `standard` | Editor selects |
| Markdown body | Markdown | Long-form article copy | Editor |

Phase 1 also stores article-like cards separately in issue JSON. Those card records may contain:

- `id`
- `variant`
- `image`
- `imageAlt`
- `category`
- `title`
- `summary`
- `link.label`
- `link.href`

This duplicates some article information and requires manual synchronization.

### Proposed article fields

| Field | Type | Purpose | Owner |
|---|---|---|---|
| `id` | UUID/stable ID | Canonical identity | Automatic |
| `slug` | string | Durable URL segment | Automatic from title, editable override |
| `status` | enum | `draft`, `review`, `scheduled`, `published`, `archived` | Editor action |
| `title` | string | Public title | Editor |
| `subtitle` | string | Optional secondary heading | Editor |
| `kicker` | string | Optional label above title | Editor |
| `summary` | string | Card, SEO, and related-story summary | Editor |
| `body` | structured rich text/Markdown | Main article content | Editor |
| `primaryCategoryId` | category reference | Main category | Editor |
| `categoryIds[]` | category references | Secondary categories/tags | Editor |
| `primaryAssetId` | asset reference | Lead image | Editor |
| `socialAssetId` | asset reference | Optional social image | Editor; defaults from primary asset |
| `authorPersonIds[]` | person references | Authors | Editor |
| `subjectPersonIds[]` | person references | Featured people | Editor |
| `contributorPersonIds[]` | person references | Photographers/interviewers/etc. | Editor |
| `relatedArticleIds[]` | article references | Related reading | Editor; system may suggest |
| `seoTitle` | string | Search-title override | Editor; defaults from title |
| `seoDescription` | string | Search-description override | Editor; defaults from summary |
| `canonicalUrl` | URL | Optional external canonical source | Editor when needed |
| `publishedAt` | datetime | Publication timestamp | Automatic when published |
| `scheduledFor` | datetime | Optional scheduled publication | Editor |
| `createdAt` / `updatedAt` | datetime | Audit timestamps | Automatic |
| `createdBy` / `updatedBy` | user references | Audit ownership | Automatic |
| `readingTimeMinutes` | number | Estimated reading time | Automatic |
| `wordCount` | integer | Article length | Automatic |
| `route` | string | Public URL | Automatic from issue and slug |

### Proposed article placement fields

An Article Placement connects an article to a section in a specific issue.

| Field | Type | Purpose | Owner |
|---|---|---|---|
| `id` | UUID/stable ID | Placement identity | Automatic |
| `issueId` | issue reference | Issue containing the placement | Automatic/context |
| `sectionId` | section reference | Parent section | Editor selects/context |
| `articleId` | article reference | Placed article | Editor selects |
| `displayOrder` | integer/rank | Position in section | Editor via ordering UI |
| `variant` | enum | Lead, research, brief, profile, standard, etc. | Editor selects |
| `featured` | boolean | Featured treatment | Editor |
| `cardTitleOverride` | string | Optional placement-specific title | Editor; defaults from article |
| `cardSummaryOverride` | string | Optional placement-specific summary | Editor; defaults from article |
| `cardAssetIdOverride` | asset reference | Optional placement-specific image | Editor; defaults from article |
| `ctaLabel` | string | Link label | Editor; default based on article type |
| `status` | enum | Visible or hidden in this placement | Editor |

## 4. Person and Profile Fields

Phase 1 has no person collection. Names, titles, summaries, and headshot paths are embedded in community cards or article copy.

### Currently present person-like fields

| Field | Current location | Owner |
|---|---|---|
| Name | Card `title` or prose | Editor |
| Profile category | Card `category` | Editor |
| Short profile text | Card `summary` | Editor |
| Headshot path | Card `image` | Editor |
| Headshot alt text | Card `imageAlt` | Editor |
| Anchor identity | Card `id` | Currently editor-maintained |

### Proposed person fields

| Field | Type | Purpose | Owner |
|---|---|---|---|
| `id` | UUID/stable ID | Canonical person identity | Automatic |
| `slug` | string | Profile-safe identifier | Automatic from preferred name, editable override |
| `fullName` | string | Formal full name | Editor |
| `preferredName` | string | Public display name | Editor |
| `pronouns` | string | Optional pronouns | Editor/person-provided |
| `roleTitle` | string | Faculty, student, staff, alumnus, etc. | Editor |
| `affiliationType` | enum | Faculty, student, staff, alumni, donor, collaborator, other | Editor |
| `department` | string | Department/organizational affiliation | Editor |
| `classYear` | string/integer | Graduation year where applicable | Editor |
| `degreeProgram` | string | Program or degree | Editor |
| `shortBio` | string | Card/profile summary | Editor |
| `longBio` | rich text | Optional full profile biography | Editor |
| `portraitAssetId` | asset reference | Reusable headshot | Editor |
| `email` | string | Optional contact, subject to privacy policy | Editor with restricted visibility |
| `websiteUrl` | URL | External profile/site | Editor |
| `socialLinks[]` | link objects | Approved public links | Editor |
| `status` | enum | Active, inactive, memorial, archived | Editor action |
| `createdAt` / `updatedAt` | datetime | Audit timestamps | Automatic |

Article-to-person relationships should include a role such as `author`, `subject`, `contributor`, `photographer`, `awardRecipient`, or `honoree` instead of creating separate person copies.

## 5. Image and Asset Fields

Phase 1 stores images as local files and references them with string paths.

### Current asset fields

| Field | Type | Current use | Owner |
|---|---|---|---|
| `image` | string path | Hero, card, panel, profile, or brand image | Editor |
| `imageAlt` | string | Alternative text for most content images | Editor |
| `brand.image` | string path | Logo | Configured/editor |
| `brand.alt` | string | Logo alternative text | Configured/editor |

Current asset folders are `brand`, `images`, and `people`. Filenames provide limited metadata.

### Proposed asset fields

| Field | Type | Purpose | Owner |
|---|---|---|---|
| `id` | UUID/stable ID | Reusable asset identity | Automatic |
| `kind` | enum | Image, illustration, logo, document, video, audio | Automatic from file, editor may correct |
| `fileName` | string | Stored filename | Automatic from upload, sanitized |
| `storageKey` | string | Internal storage location | Automatic |
| `publicUrl` | URL | Delivery URL | Automatic |
| `mimeType` | string | File media type | Automatic |
| `fileSizeBytes` | integer | File size | Automatic |
| `width` | integer | Pixel width | Automatic |
| `height` | integer | Pixel height | Automatic |
| `aspectRatio` | number | Width divided by height | Automatic |
| `checksum` | string | Duplicate/change detection | Automatic |
| `title` | string | Internal descriptive title | Editor |
| `altText` | string | Accessibility description | Editor; required where meaningful |
| `caption` | string/rich text | Public caption | Editor |
| `credit` | string | Photographer/creator credit | Editor |
| `copyrightHolder` | string | Rights owner | Editor |
| `rightsStatus` | enum | Pending, approved, restricted, expired, unknown | Editor |
| `permissionNotes` | restricted text | Internal rights notes | Editor with restricted access |
| `sourceUrl` | URL | Original source | Editor |
| `sourceIssue` | string/reference | Original newsletter or archive source | Editor |
| `focalPointX` / `focalPointY` | decimal | Responsive crop focal point | Editor through visual control |
| `dominantColor` | color | Optional loading/background treatment | Automatic |
| `uploadedAt` | datetime | Upload time | Automatic |
| `uploadedBy` | user reference | Upload audit record | Automatic |
| `status` | enum | Draft, approved, restricted, archived | Editor action |

Alt text belongs to the asset by default, but a placement should be able to override it when the same image communicates different information in different contexts.

## 6. Fields Currently Present

Phase 1 already supports:

- Issue year, display date, title, status, and SEO description.
- Brand image and alt text.
- Hero copy, image, alt text, actions, donation CTA, and summary panel.
- Ordered sections represented by JSON array order.
- Multiple section layout types.
- Section titles, kickers, introductions, and accessible labels.
- Card IDs, categories, titles, summaries, variants, images, alt text, and links.
- Research item titles, bodies, and initial open state.
- Long-form Markdown bodies.
- Article IDs, issue years, slugs, statuses, categories, titles, and variants.
- Article ordering through `articleIds[]`.
- Navigation and table-of-contents links.
- Footer content.

## 7. Fields Currently Missing

Major missing areas are:

- Stable internal UUIDs.
- Reusable section, category, person, and asset records.
- Formal relationships instead of copied strings and paths.
- Article placement records.
- Section/card visibility and publication status.
- Rich media metadata, captions, credits, permissions, dimensions, and focal points.
- Article authors, subjects, contributors, and related articles.
- Structured award, donor, memorial, retirement, and commencement records.
- Draft ownership, approval state, deadlines, and editorial notes.
- Creation, update, publication, and archive timestamps.
- User/audit references.
- SEO and social-image overrides.
- Scheduled publishing.
- Durable annual and article routes.
- Revision history and rollback information.
- Validation of all nested section variants.
- Automatic navigation and table-of-contents generation.

## 8. Fields the Future Editor Should Control

The future editor should control:

- Issue title, date label, hero copy, summary, and SEO overrides.
- Issue lifecycle actions: submit for review, publish, and archive.
- Section selection, status, titles, introductions, themes, variants, and ordering.
- Whether sections appear in navigation and the table of contents.
- Article title, summary, body, categories, people, related stories, and status.
- Article placement, card variant, card overrides, and ordering.
- Person names, roles, affiliations, biographies, and approved links.
- Asset selection, alt text, captions, credits, rights status, and focal points.
- Calls to action and external links.
- Optional publication scheduling.
- Internal editorial fields such as owner, deadline, notes, fact-check status, image status, and approval status.

Editors should choose only from developer-approved layout, theme, and variant values. They should not edit component names, CSS classes, raw HTML templates, or database IDs.

## 9. Fields That Should Be Automatic

The future system should automatically manage:

- Stable internal IDs.
- Default slugs generated from titles/names/years.
- Durable routes generated from issue and article slugs.
- `createdAt`, `updatedAt`, `publishedAt`, and `archivedAt` timestamps.
- `createdBy`, `updatedBy`, and publisher audit references.
- Latest-published-issue detection.
- Navigation and table-of-contents output derived from section settings.
- Reverse references such as all articles connected to a person or asset.
- Image MIME type, dimensions, aspect ratio, size, checksum, and dominant color.
- Reading time and word count.
- SEO title/description defaults derived from public content.
- Social-image defaults derived from the primary asset.
- Validation of required fields, unique slugs, broken references, missing alt text, and unpublished dependencies.
- Prevention of draft/private editorial fields from reaching public output.
- Archive behavior that preserves durable URLs while removing an issue from current promotion.
- Revision history and audit logs after persistent storage exists.

Editors may be allowed to override selected automatic defaults, such as slugs, SEO copy, social images, and accessible labels. Internal IDs, audit history, technical file metadata, and security values should never be manually editable.

## Recommended Future Record Set

The minimum future system should define these records:

1. `Issue`
2. `Section`
3. `Category`
4. `Article`
5. `ArticlePlacement`
6. `Person`
7. `ArticlePerson`
8. `Asset`
9. `Link` or structured CTA fields
10. Editorial workflow metadata

Specialized data such as awards, donors, commencement lists, memorials, and retirements can initially use structured article blocks. They should become separate record types only when search, reuse, privacy, volume, or annual reporting requirements justify the added complexity.

## Migration Direction

Before building a database or editor:

1. Convert this proposal into fully validated TypeScript/Astro schemas.
2. Separate repeated card data from canonical article data.
3. Introduce reusable people, categories, and asset metadata in local files.
4. Generate navigation and contents from section settings.
5. Prove a second annual issue can use the same records and components.
6. Use the validated local schema as the contract for any future CMS or database.

