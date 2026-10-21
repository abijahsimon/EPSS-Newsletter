# Signals from the Lab Media Decision - 2026-09-09

Update, 18 September 2026: the user requested the video be featured in
Peng's article. It now has a responsive embedded player with a YouTube
fallback link. The BALBOA image is visible below the homepage research
heading, outside the collapsible rows. See ../peng-media-update-2026-09-18.md.
The original link-only recommendation below is superseded.

## Recommendation

Use the existing BALBOA launch photo as the stronger review-build hero image for Signals from the Lab.

Selected path:

```text
source-review/Claude outputs/epss-newsletter-source/public/assets/images/2026/balboa/launch-vehicle.jpg
```

Public/site-relative path:

```text
assets/images/2026/balboa/launch-vehicle.jpg
```

Current dimensions: 1329x752.

## Why

The BALBOA photo is a clean, wide, documentary image with no baked-in text or black side bars. It also already exists in the deployable Vite source and has been verified on the website.

The available public YouTube thumbnail for Peng Ni's igneous petrology video is 1280x720 and contains black side bars plus visible title text ("Lake Crowley"). It is useful as provenance/context, but it is not a clean hero asset. This machine does not currently have `yt-dlp` or `ffmpeg`, so I could not export a clean representative frame from the video at around 2000px wide during this pass.

Video URL:

```text
https://www.youtube.com/watch?v=krWALfOHIdU
```

## Embed Decision

For the internal review build, link to the YouTube video rather than embedding it. An embed can be added later if the final editorial decision is to foreground the video, but the current review build should not depend on a third-party iframe for a core visual slot.

## Suggested Alt Text

BALBOA launch equipment and a high-altitude balloon on a field launch site.

## Caption/Provenance Notes

- Source context: BALBOA media in `assets/images/2026/balboa/`.
- Credit: confirm final BALBOA photo credit before public launch.
- Do not claim this image depicts Peng Ni's field video; keep the video as a separate linked media item if used.
