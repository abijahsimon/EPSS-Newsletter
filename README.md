# newsletter
For Departmental Newsletters

The current 2026 site is the static Astro project in [`app/`](app/). The repository-root HTML is a historical version.

- [Build and hosting instructions](app/DEPLOYMENT.md)
- [Editing guide](EDITING_GUIDE.md)
- [Validation pipeline](.github/workflows/validate-newsletter.yml)

The `main` branch preserves the previous newsletter source history and this repository's initial commit. The validation workflow checks root and `/newsletter` builds, runs the path tests, verifies local links/fragments, and uploads static build artifacts for hosting review. It does not deploy to the EPSS VM.
