# EPSS Newsletter Editor Requirements

## Purpose

This document defines requirements for a future private editor/admin portal for the EPSS Annual Newsletter.

It is based on:

- `EDITING_GUIDE.md`, which documents the current Phase 1 JSON/Markdown workflow.
- `CONTENT_MODEL.md`, which proposes reusable Issue, Section, Category, Article, Article Placement, Person, and Asset records.

This document does not select or implement a database, CMS, authentication provider, or editor framework.

## Product Goal

The editor should let authorized EPSS staff create and maintain annual newsletter issues without editing JSON, Markdown frontmatter, file paths, anchor IDs, or application code.

The portal should preserve the existing public visual system. Editors may choose from approved content types and visual variants, but should not be able to introduce arbitrary HTML, CSS, JavaScript, or untested page layouts.

## Core Principles

1. Structured content over free-form page building.
2. One canonical record for each article, person, category, and asset.
3. Article placement controls where and how an article appears in an issue.
4. Draft and review content must never leak into the public site.
5. Preview should use the same rendering components as the public site.
6. Editors control content, selection, status, and ordering.
7. The system controls technical IDs, routes, timestamps, validation, and derived navigation.
8. Destructive actions should be reversible whenever possible.
9. Accessibility fields, especially image alt text, should be part of the normal workflow rather than an afterthought.

## Status Model

### Issue publication status

Recommended issue statuses:

- **Draft:** Work in progress; private.
- **Review:** Ready for internal review; private.
- **Published:** Publicly accessible.
- **Archived:** Historical and read-only by default; remains publicly accessible unless explicitly withdrawn.

### Current issue designation

“Current” should not be a publication status. It should be a separate issue designation:

- Only one issue may be current at a time.
- Only a published issue may be current.
- Publishing an issue does not have to make it current automatically.
- Setting a new current issue removes the current designation from the previous issue without archiving it.
- The issue archive may contain multiple published issues but only one current issue.

The editor should expose a clear **Set as current issue** action with confirmation.

### Article status

Recommended article statuses:

- **Draft:** Work in progress; private.
- **Review:** Ready for editorial review; private.
- **Published:** Eligible to appear publicly in published placements.
- **Archived:** Retained but unavailable for new placements by default.

Article placement should have a separate visible/hidden state. Hiding one placement must not archive the canonical article or remove it from other issues.

## Primary Users

### Editor

Can create and edit issues, sections, categories, articles, people, and assets; arrange issue content; and open previews.

### Publisher/Admin

Has editor capabilities plus permission to publish, archive, set the current issue, manage restricted asset metadata, and perform approved recovery actions.

Phase 2 should start with these two practical permission levels. More granular roles should wait until actual workflow evidence requires them.

## Essential Phase 2 Editor Features

### 1. Issue list and annual issue metadata

The editor must provide an issue list showing:

- Issue year and academic-year label.
- Issue title.
- Publication status.
- Current-issue designation.
- Last updated time.
- Publish/archive time when applicable.
- Validation or readiness state.

Editors must be able to create or edit:

- Issue year.
- Academic-year display label.
- Issue title.
- Hero kicker, title, dek, and summary panel.
- Hero image.
- Donation CTA label and destination.
- SEO title/description overrides where needed.
- Footer description where issue-specific.

The system should generate:

- Internal issue ID.
- Default slug from year.
- Created and updated timestamps.
- Default SEO values from issue content.
- Public route preview.

Validation must prevent duplicate issue years or slugs.

### 2. Section management

Editors must be able to:

- Add a section from approved section types.
- Edit section kicker, title, introduction, and accessible label.
- Choose an approved layout variant and theme where supported.
- Reorder sections.
- Hide or show a section.
- Choose whether a section appears in navigation.
- Choose whether a section appears in the table of contents.
- Set an optional shorter navigation label.
- Review which articles are assigned to the section.

The editor must not expose raw section IDs, component names, or CSS classes as ordinary editable fields.

The system should generate section anchors, navigation destinations, and table-of-contents links from section settings.

### 3. Category management

Editors must be able to:

- Select an existing category for an article.
- Create a category when an appropriate one does not exist.
- Edit category name, public label, and description.
- Reorder categories where order is displayed.
- Archive unused categories without breaking historical issues.

Category slugs and internal IDs should be automatic. Duplicate or near-duplicate category names should trigger a warning.

### 4. Article library and article editing

The article library must show:

- Article title.
- Issue associations.
- Primary category.
- Status.
- Assigned section placements.
- Featured image thumbnail.
- Last updated time.
- Validation state.

Editors must be able to:

- Create an article.
- Edit title, subtitle, kicker, summary, and body.
- Select primary and secondary categories.
- Assign authors, subjects, and contributors.
- Select a primary image.
- Add related links or related articles where supported.
- Change article status.
- Hide a specific placement without deleting the article.
- Archive an article.

The first editor should support a constrained rich-text or Markdown-compatible body field with:

- Paragraphs.
- Headings.
- Bulleted and numbered lists.
- Links.
- Emphasis.
- Images with captions where the article renderer supports them.
- Pull quotes if supported by the existing public components.

It should not allow arbitrary scripts, styles, iframes, or unvalidated HTML.

### 5. Article placement and section assignment

Editors must be able to:

- Assign an article to one or more issue sections.
- Remove an article from a section without deleting it.
- Reorder articles within a section.
- Choose an approved placement variant such as lead, research, brief, profile, or standard.
- Mark a placement featured where the section supports it.
- Hide or show the placement.
- Override the card title, summary, image, or CTA label when necessary.
- Reset an override to inherit the canonical article value.

The system must prevent:

- Placements that reference missing articles or sections.
- Public placements of draft/review articles.
- Duplicate placements where the selected section does not allow them.
- Broken links caused by changing a title or slug.

### 6. Asset library and image selection

The editor must provide an asset library that supports:

- Uploading approved image formats.
- Selecting an existing image.
- Searching by title or filename.
- Filtering by asset type or status.
- Viewing image dimensions and aspect ratio.
- Seeing where an asset is currently used.
- Archiving an asset without breaking existing published content.

During upload, the system should automatically record:

- Safe stored filename.
- MIME type.
- File size.
- Width and height.
- Aspect ratio.
- Upload timestamp and uploader.
- Duplicate/checksum warning where practical.

The editor should reject or warn about unsupported formats, very small images, oversized files, and missing rights information.

### 7. Image metadata

Editors must be able to edit:

- Internal image title.
- Alt text.
- Public caption.
- Photographer/creator credit.
- Copyright holder.
- Rights/permission status.
- Source URL or source issue.
- Internal permission notes, restricted to appropriate users.
- Focal point when responsive cropping is used.

Alt text should be required for meaningful public images. Decorative images should have an explicit decorative designation instead of fake or empty descriptive copy.

A placement-level alt-text override should be available when the same image communicates different information in a different context.

### 8. People/profile library

The editor must provide reusable person profiles.

Editors must be able to edit:

- Full and preferred names.
- Pronouns when provided.
- Role title.
- Affiliation type.
- Department or organization.
- Class year and degree program where relevant.
- Short and long biography.
- Headshot.
- Approved website or social links.
- Profile status.

Editors must be able to associate a person with an article as:

- Author.
- Subject/profiled person.
- Contributor.
- Photographer.
- Award recipient.
- Honoree or memorial subject.

Updating a reusable person record should update future/current references while preserving a deliberate strategy for historical published copy.

### 9. Preview before publishing

Editors must be able to preview an issue containing draft and review content before publication.

Preview requirements:

- Use the same Astro components and responsive styles as the public site.
- Show a persistent private-preview banner with issue status.
- Support desktop and mobile viewport review.
- Include hidden/draft content only for authorized preview users.
- Prevent search-engine indexing.
- Use protected, non-guessable access.
- Clearly distinguish unsaved editor changes from the last saved preview.
- Show validation warnings without inserting them into public page content.

Preview must never be implemented as a public route that merely hides navigation links.

### 10. Publish, current, and archive actions

The editor must support:

- Save as draft.
- Submit or mark ready for review.
- Publish issue.
- Set a published issue as current.
- Remove current designation.
- Archive issue.
- Restore an archived issue to published status with confirmation and permission.

Before publishing, the system must run a readiness check for:

- Required issue metadata.
- At least one visible section.
- Broken article, person, asset, and section references.
- Draft/review articles in public placements.
- Missing alt text, captions/credits where required, and unresolved asset rights.
- Duplicate slugs.
- Broken internal or external links where validation is available.
- Empty required headings or summaries.
- Navigation and table-of-contents integrity.

Publishing, archiving, restoring, and setting the current issue require explicit confirmation and appropriate permission.

### 11. Validation and safe editing

Essential safety behavior:

- Explicit save action for important forms.
- Clear unsaved-changes indicator.
- Field-level validation messages.
- Page-level readiness summary.
- Warning before navigation with unsaved changes.
- Soft delete/archive instead of immediate permanent deletion.
- Stable IDs that editors cannot modify.
- Automatic timestamps and audit attribution.
- No raw JSON, file paths, or Markdown frontmatter required for routine editing.
- No public output when required relationships are invalid.

### 12. Essential screen inventory

Phase 2 should include:

1. Issue list/dashboard.
2. Issue metadata editor.
3. Section manager and ordering view.
4. Category list/editor.
5. Article library.
6. Article editor.
7. Article placement/assignment view.
8. Asset library and asset metadata editor.
9. People library and profile editor.
10. Issue validation/readiness view.
11. Protected preview.
12. Publish/current/archive confirmation flows.

## Nice-to-Have Later Features

These features may be valuable after the essential workflow is proven:

### Workflow and collaboration

- Comments and review threads.
- Article assignments and due dates.
- Email or Slack notifications.
- Multi-step approval workflows.
- Side-by-side revision comparison.
- Version history and one-click rollback.
- Real-time presence indicators.

### Publishing operations

- Scheduled publication.
- Scheduled unpublishing or promotion changes.
- Issue duplication or “create next year from template.”
- Bulk status changes.
- Preview share links with expiration.
- Release notes or publication checklists.

### Content and media

- Advanced rich-text blocks.
- Image crop presets and responsive focal-point previews.
- Automated image optimization previews.
- Bulk image upload and metadata editing.
- CSV import for awards, commencement, or approved donor lists.
- Reusable galleries and photo essays.
- Saved searches and advanced filters.
- Duplicate-person detection and profile merging.

### Discovery and reporting

- Content coverage dashboard.
- Broken-link monitoring after publication.
- Accessibility reporting across an issue.
- Asset usage and rights-expiration reports.
- Readership analytics.
- Search indexing controls.
- Annual content comparison reports.

### Convenience

- Keyboard shortcuts.
- Autosave with visible save history.
- Draft templates for common article types.
- Recently edited and favorite records.
- Optional dark mode for the admin portal.

## Features to Avoid for Now

These features add disproportionate risk or complexity before the core workflow is validated:

### Free-form design tools

- Arbitrary drag-and-drop page building.
- Arbitrary HTML, CSS, or JavaScript editing.
- User-created layout types or visual themes.
- Pixel-level design controls.
- A general-purpose website builder.

The public visual system should remain component-driven and developer-controlled.

### Premature custom infrastructure

- Building a custom database before the validated content schema is stable.
- Building a custom authentication system instead of using an approved provider.
- Building a custom digital asset management system beyond newsletter needs.
- Building a custom collaborative rich-text engine.
- Building a custom image-processing pipeline before storage/hosting requirements are known.

### Excessive workflow complexity

- Many granular roles before real permission needs are observed.
- Configurable workflow builders.
- Complex approval chains for every field.
- Real-time multi-user co-editing in the initial editor.
- Cross-department multi-tenancy.

### Risky automation

- Automatic publishing without explicit human confirmation.
- AI-generated copy published without editorial review.
- AI-generated alt text treated as final without review.
- Automatic fact-check claims.
- Automatic deletion of unused assets.
- Automatic merging of people or category records.

### Sensitive or specialized data

- Donor/payment-system integration.
- Unreviewed import of donor names or private contact data.
- Public user accounts, comments, or submissions.
- Broad email/contact storage without a defined privacy policy.

### Destructive actions

- Immediate permanent deletion of published issues, articles, people, or assets.
- Reusing published slugs for unrelated content.
- Breaking archived URLs when an issue is updated.
- Publishing an issue that contains failed validation checks.

## Non-Functional Requirements

### Privacy and security

- The editor and draft previews must require approved authentication before production use.
- Authorization must be enforced server-side, not only by hiding controls.
- Draft content and permission notes must never appear in public payloads.
- Sensitive asset-rights notes should have restricted visibility.
- Publishing and archive actions should be auditable.

Authentication and persistence technology require separate approval before implementation.

### Accessibility

- The admin portal should meet WCAG 2.2 AA expectations.
- All controls must be keyboard accessible.
- Forms must have labels and clear validation messages.
- Status must not be communicated by color alone.
- Image accessibility metadata must be easy to review.
- Preview controls must support desktop and mobile checks.

### Reliability

- Failed saves must not silently discard content.
- Publishing should be transactional: either the complete valid issue becomes public or no change occurs.
- Published routes should remain stable.
- Archived content should remain recoverable.
- Content should be exportable in a portable structured format.

### Performance

- Lists should remain usable with multiple annual issues, hundreds of articles, people, and assets.
- Image thumbnails should not require loading original full-resolution files.
- Preview generation should clearly communicate loading, success, and failure states.

## Phase 2 Acceptance Criteria

The essential editor is ready for controlled internal testing when an authorized user can:

1. Create or edit an annual issue without touching JSON.
2. Add, edit, hide, reorder, and remove sections using approved layouts.
3. Create an article and edit its body and metadata.
4. Assign the article to a section and choose its card treatment.
5. Upload or select an image and complete alt text, caption, credit, and rights fields.
6. Create or edit a reusable person and connect that person to the article.
7. Preview the complete draft issue with the existing public visual design.
8. Resolve blocking validation errors.
9. Publish the issue with confirmation.
10. Set one published issue as current.
11. Archive and restore an issue without breaking its public URL.
12. Confirm draft/private data is absent from the public output.

## Open Decisions Before Implementation

The following decisions require stakeholder approval before building the real editor:

- Which institution-approved authentication provider should be used?
- Which roles may publish, archive, restore, or set the current issue?
- Is a formal review status required, or is draft-to-published sufficient?
- Which CMS/database/storage options comply with UCLA requirements?
- Where should original and optimized images be stored?
- Which asset rights fields are mandatory before publication?
- Should historical person details remain frozen per issue or update globally?
- Which article body format should be canonical: Markdown or structured rich text?
- Are standalone article routes required in Phase 2?
- Should setting a new issue as current be automatic on publish or a separate action?
- What backup, export, and retention policies are required?

