#!/usr/bin/env python3
"""Generate responsive public thumbnails and hero variants from approved sources."""

import json
import os
import sys
from pathlib import Path

from PIL import Image, ImageOps

app_root = Path(sys.argv[1]).resolve()
provenance_dir = Path(sys.argv[2]).resolve()
geometry_path = Path(sys.argv[3]).resolve()
payload = json.load(sys.stdin)
public_dir = app_root / "public"


def local_path(url):
    if not url.startswith("/assets/"):
        raise ValueError(f"Expected a local approved asset path: {url}")
    path = (public_dir / url.lstrip("/")).resolve()
    if not path.is_relative_to(public_dir) or not path.is_file():
        raise FileNotFoundError(f"Approved source image is missing: {url}")
    return path


def public_url(path):
    return "/" + path.relative_to(public_dir).as_posix()


def save_variant(image, target, fmt, quality, icc):
    target.parent.mkdir(parents=True, exist_ok=True)
    if fmt == "JPEG" and image.mode not in ("RGB", "L"):
        canvas = Image.new("RGB", image.size, "white")
        if "A" in image.getbands():
            canvas.paste(image, mask=image.getchannel("A"))
        else:
            canvas.paste(image.convert("RGB"))
        image = canvas
    options = {"quality": quality, "optimize": True, "icc_profile": icc} if icc else {"quality": quality, "optimize": True}
    if fmt == "JPEG":
        options.update(progressive=True, subsampling=0)
    image.save(target, format=fmt, **options)


def resized(image, width):
    if image.width == width:
        return image.copy()
    height = max(1, round(image.height * width / image.width))
    return image.resize((width, height), Image.Resampling.LANCZOS)


def source_image(url):
    source = local_path(url)
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened).copy()
        image.info["_source_bytes"] = source.stat().st_size
        image.info["_source_path"] = str(source)
        return image


def distinct_widths(source_width, desired):
    widths = sorted({min(w, source_width) for w in desired if w < source_width} | {source_width})
    return widths


generated_files = set()
gallery = {}
cover_map = {}
source_dimensions = {}
source_bytes = {}

# Exactly the published manifest entries are read. Held records never enter the
# generation list, derivative tree, public geometry map, or public endpoint.
for item in payload["items"]:
    src = item["src"]
    image = source_image(src)
    source_dimensions[src] = list(image.size)
    source_bytes[src] = image.info["_source_bytes"]
    icc = image.info.get("icc_profile")
    base = local_path(src)
    widths = distinct_widths(image.width, [320, 480, 768, 960])
    sources = []
    for width in widths:
        variant = resized(image, width)
        target = base.with_name(f"{base.stem}-thumb-w{width}.webp")
        save_variant(variant, target, "WEBP", 80, icc)
        generated_files.add(target)
        sources.append({"src": public_url(target), "width": width})
    gallery[item["id"]] = {
        "width": image.width,
        "height": image.height,
        "thumbnailSrc": sources[-1]["src"],
        "thumbnailSrcset": sources,
    }

# The homepage's approved cover photos and BALBOA's approved lead image
# get matching WebP and JPEG responsive variants. Their existing originals stay
# available for their full-size uses and as the non-derivative reference source.
for src in payload["coverSources"]:
    image = source_image(src)
    source_dimensions[src] = list(image.size)
    source_bytes[src] = image.info["_source_bytes"]
    icc = image.info.get("icc_profile")
    base = local_path(src)
    widths = distinct_widths(image.width, [480, 768, 1200, 1600, 1920])
    formats = {}
    for fmt, extension, quality in [("WEBP", "webp", 82), ("JPEG", "jpg", 84)]:
        variants = []
        for width in widths:
            variant = resized(image, width)
            target = base.with_name(f"{base.stem}-responsive-w{width}.{extension}")
            save_variant(variant, target, fmt, quality, icc)
            generated_files.add(target)
            variants.append({"src": public_url(target), "width": width})
        formats[extension] = variants
    cover_map[src] = {
        "width": image.width,
        "height": image.height,
        "webp": formats["webp"],
        "jpeg": formats["jpg"],
        "fallback": formats["jpg"][min(range(len(widths)), key=lambda i: abs(widths[i] - 1200))]["src"],
    }

geometry = {"gallery": gallery, "covers": cover_map, "coverOrder": payload["coverSources"][:-1]}
geometry_path.parent.mkdir(parents=True, exist_ok=True)
geometry_path.write_text(json.dumps(geometry, indent=2) + "\n", encoding="utf-8")

provenance_dir.mkdir(parents=True, exist_ok=True)
total_original_bytes = sum(source_bytes.values())
total_derivative_bytes = sum(file.stat().st_size for file in generated_files)
report = {
    "generatedAtUtc": __import__("datetime").datetime.now(__import__("datetime").timezone.utc).isoformat(),
    "approvedPublicItems": len(payload["items"]),
    "heldItemsGenerated": 0,
    "uniqueSourceImages": len(source_dimensions),
    "sourceImages": [
        {"src": src, "width": dimensions[0], "height": dimensions[1], "bytes": source_bytes[src]}
        for src, dimensions in sorted(source_dimensions.items())
    ],
    "generatedDerivativeFiles": len(generated_files),
    "sourceBytes": total_original_bytes,
    "generatedBytes": total_derivative_bytes,
    "derivativesPerSource": "Gallery: WebP thumbnail srcsets at up to 320, 480, 768, 960 px. Homepage cover and BALBOA: WebP and progressive JPEG srcsets at up to 480, 768, 1200, 1600, 1920 px. No crop or upscaling.",
}
(provenance_dir / "derivative-generation.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
print(json.dumps({
    "approvedPublicItems": len(payload["items"]),
    "heldItemsGenerated": 0,
    "uniqueSourceImages": len(source_dimensions),
    "derivativeFiles": len(generated_files),
    "sourceBytes": total_original_bytes,
    "derivativeBytes": total_derivative_bytes,
    "geometryFile": str(geometry_path),
    "provenanceFile": str(provenance_dir / "derivative-generation.json"),
}, indent=2))
