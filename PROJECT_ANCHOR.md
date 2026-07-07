# EPSS Annual Newsletter Project Anchor

## 1. Project objective

Turn the existing EPSS static newsletter into a reusable annual newsletter system while preserving its established public visual design and keeping the legacy site usable as a backup.

## 2. End deliverable

- A polished public newsletter with yearly issues, sections, articles, people, and media.
- A private editor for drafting, previewing, publishing, and archiving issues.
- Managed authentication, database records, and image storage when the project is ready for that phase.

## 3. Current status

- Phase 1 content-driven Astro app is complete and committed.
- Editing, content-model, and editor-requirements documentation is complete and committed.
- Phase 2 options are documented but not approved or implemented.
- The public front-face review is complete and awaiting content/format decisions.
- Legacy root files remain the static backup.

## 4. Current stage

**Phase 1B: Front-Face Content and Format Lock.** Phase 2 is paused until the public section hierarchy, story inventory, navigation, and audience-facing copy are approved.

## 5. Intentionally not being built yet

- Editor or admin portal
- Authentication or permissions
- Database or external storage
- Image-upload workflow
- Deployment changes
- Content-schema normalization based on the current planning-board structure

## 6. Current sources of truth

- Public renderer: `app/src/pages/index.astro`
- Issue content: `app/src/content/issues/2026.json`
- Article bodies: `app/src/content/articles/`
- Astro content definitions: `app/src/content.config.ts`
- Visual design: `app/src/styles/newsletter.css`
- Components and behavior: `app/src/components/`, `app/src/layouts/`, `app/src/scripts/`
- Astro-owned media: `app/public/assets/`
- Front-face decisions: `FRONT_FACE_REVIEW.md`
- Editing and future model: `EDITING_GUIDE.md`, `CONTENT_MODEL.md`, `EDITOR_REQUIREMENTS.md`
- Legacy backup: root `index.html`, `styles.css`, `script.js`, and `assets/`

## 7. Rules for Codex

- Work in small, reversible phases and stay within the requested phase.
- Preserve the existing public visual identity unless a change is explicitly approved.
- Do not modify legacy root files when working on the Astro app.
- Do not add editor, auth, database, storage, or deployment work early.
- Inspect current files and uncommitted changes before editing.
- Never overwrite, remove, rename, or move existing files without explicit approval.
- Validate relevant Astro checks and production builds after behavior changes.
- Do not stage, commit, or discard changes without explicit instruction.

## 8. Next safe action

Approve the Phase 1B public section sequence and decide which 2025–2026 stories should be kept, hidden, removed, or completed before making content-only Astro edits.
