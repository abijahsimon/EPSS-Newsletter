# Launch Open Items - 2026-09-10

Items fixed in the current cleanup:

- Edwin Schauble now uses the planning-sheet title: "Investigating Earth's History with Isotopic Fingerprints."
- Allen Glazner now uses the supplied draft title as the working display title; only article approval remains pending.
- Lizzie Su's portrait path is normalized to `lizzie-su.jpeg` across the current source, mirrored export, and older Astro reference files.
- The issue page now separates John He's Spring 2026 field dispatch from the still-forthcoming Geophysics 136C photo essay.
- The RIMFAX section is visibly labelled as a draft summary pending team review, with the video decision marked pending.
- The Peng Ni page no longer repeats hero/lab images in the gallery grid; the gallery now shows the two additional meteorite field photos.
- The Vite source uses relative asset paths and `base: './'` so a GitHub Pages project subpath can serve the build.
- The review build was deployed from the Vite/DC source to GitHub Pages at `https://abijahsimon.github.io/EPSS-Newsletter/`.
- The refreshed review build, including awards portraits, is pushed to `gh-pages` at commit `92d943f`.
- The GitHub repository was renamed from `abijahsimon/Newsletter-Site` to `abijahsimon/EPSS-Newsletter`; local remotes were updated, and the Omar vanity-URL Gmail draft now uses the new review URL.
- Awards/recognition portraits: 14 public-source originals were staged in raw media, normalized to 400x400 JPEGs, and wired into the awards page wherever a matching portrait exists.
- The 2025 "people walking into infinity" reference image was extracted from `tmp/pdfs/2025.pdf` and staged for Claude as a backup/reference asset.
- Signals from the Lab media decision was documented: use the BALBOA launch photo as review-build hero; keep the Peng Ni YouTube video as a link unless a clean high-resolution frame is exported.
- A fresh Claude handoff packet is available at `source-review/claude-transfer/claude-review-handoff-20260910.zip`.

Deployment/QA notes:

- All 16 live GitHub Pages URLs returned HTTP 200 after the portrait refresh.
- The live awards page contains the new `award-portrait` markup and newly added portrait assets return HTTP 200.
- GitHub's legacy Pages API still reports the latest build record as `errored` for commit `92d943f`, even though the live URL is serving that commit's updated content. Treat this as a GitHub Pages status/display issue to monitor, not a current reviewer-facing outage.

Items still needing human/source confirmation:

- Lizzie Su article approval.
- Edwin Schauble article approval.
- Allen Glazner article approval.
- Allen Glazner Distinguished Alumni Lecture recording URL, if the issue should embed or link it.
- John He Spring 2026 field photo photographer credits for the 12 selected images.
- Peng Ni field photo credits and Sapphire Lab group names/photographer credit.
- Final Chair note copy; the spreadsheet still says "Not started."
- Craig Manning retirement/memoriam statement.
- Ming-Chang Liu portrait; the awards page currently leaves him text-only.
- RIMFAX final body copy approval from Paige/Cardarelli team and the final video decision.
- Geophysics 136C photo essay decision: keep separate as forthcoming, replace with John He's field dispatch, or merge them editorially.
- Final public URL/vanity URL setup from Omar; Gmail draft has been prepared but not sent.
- UCLA/College postcard production specifications.
