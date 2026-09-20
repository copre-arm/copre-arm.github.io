# CoPRE project website

Anonymous, self-contained static project page. No build step, third-party fonts, analytics, embedded video service, or authors. All runtime resources are same-origin.

## Preview

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000. The published host should support HTTP Range requests for efficient seeking.

## Files

- `index.html`, `styles.css`: responsive project page, main comparisons, then manipulation demonstrations. Protocol details and per-condition tables are folded; seven ablation/temporal comparisons and data downloads sit inside a single optional evaluation disclosure.
- `site.js`: six video chapter buttons; native playback still works without JavaScript.
- `assets/video/copre-v36.mp4`: the supplied v36, 180 seconds, 1920 × 1080, H.264/AAC, 21.8 MB. Streams are copied without re-encoding; MP4 `moov` is before `mdat` for progressive playback. Metadata is stripped. `preload="none"` avoids preloading the film; no autoplay.
- `assets/video/poster.webp`: lightweight poster extracted at 15 seconds.
- `assets/video/copre-en.vtt`: English captions converted from the matching v36 SRT. The video also contains baked-in subtitles; the optional caption track is not enabled by default.
- `assets/data/`: anonymous presentation CSVs, a 90-contact-trial index, and definitions. These are curated summaries, not a raw-data release.
- `assets/*.webp`: project figures, including the G1 condition strip exported from the manuscript PDF.

## Evidence and update rules

Main results and ablation numbers follow the current manuscript Figures 3–5. G1 per-resistance rates were checked against `paper_exports/paper_main/force_levels.csv`. The contact index and archive counts were checked against the detection `recordings.csv` indexes in the supplied September 20 archive: ARX 45 contact + 42 free; G1 45 contact + 51 free. Each arm has 5 masses × 3 speeds × 3 repeats. Do not multiply physical trial counts by model seeds, folds, or ablations.

Some older ARX exports contain provisional force labels. The webpage uses the manuscript's separately measured 1.5–5.5 N reference resistances. Do not copy provisional force columns into public tables. Contact timing is geometric, not independently measured onset. Calibration protocols and evaluation windows differ by robot. The GRU result on G1 and the alarm-time trade-offs are retained.

Manipulation remains qualitative; candidate placement/insertion logs are not used to claim success rates or additional benchmark trials. Preserve anonymity in all new files, metadata, resource links, and credits. No author list should be added to this version.

## Hosting

The site is compatible with GitHub Pages, served from `main` at the repository root (`.nojekyll`). Publishing requires committing/pushing the reviewed files and checking the Pages deployment. Local preview is not evidence of deployment.

The current 21.8 MB video does not need an HLS dependency. If later traffic or slow-network measurements justify adaptive streaming, host video renditions on a suitable CDN and keep captions, poster, native fallback, and user-initiated playback.
