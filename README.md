# CoPRE project website

Independent static website for **CoPRE: Improving Sensitivity in Proprioceptive Contact Detection for Low-Cost Robot Arms**.

## Local preview

From this directory:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://localhost:8000>. No package installation or build step is required.

## Edit the page

- `index.html`: project title, introduction, method, and resource links.
- `styles.css`: colors, typography, spacing, and responsive layout.
- `assets/`: self-contained copies of the project figures and favicon.

The figures were exported from the corresponding PDFs in `../icra27-overleaf/images/`. This website does not load files from the parent repository. Update its copies explicitly when figures change.

Paper, research code, and video are marked “Coming soon.” Replace their status text with real links when released. Add the confirmed author list when appropriate. The results section reports the manuscript’s combined-calibration benchmark on ARX L5 and G1, including within-platform calibration rules and reference-force interpretation. Manipulation sequences are qualitative.

## GitHub Pages

After committing and pushing this website to `copre-arm/copre-arm.github.io`, configure the repository's Pages settings to serve the `main` branch from `/ (root)` if branch-based publishing is not already enabled. The expected address is <https://copre-arm.github.io/> once GitHub Pages is configured and deployment completes.

`.nojekyll` lets the plain static files be served without Jekyll processing. There is no server-side code or runtime dependency.

This directory has its own Git repository. Run Git commands here (or use `git -C website` from the parent workspace). The parent research repository locally excludes this directory; it is not a submodule.
