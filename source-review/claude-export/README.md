# Claude Export Reference

This folder contains the static export from `UCLA EPSS Newsletter Redesign.zip`, copied on 2026-09-07 for review and porting.

Excluded intentionally:

- `.thumbnail`
- `uploads/`

Those excluded files included transient generated/upload artifacts and a Gmail HTML export. They should not be treated as site assets.

## Important

The `.dc.html` files are not a drop-in replacement for the Astro app. They use generated artifact markup, inline styles, and `support.js`. Treat them as:

- content reference
- visual reference
- source-status reconciliation reference
- porting input for `app/src/content/`, `app/src/pages/`, and `app/src/styles/`

Do not deploy this folder as the public newsletter site without a separate review.

