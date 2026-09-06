# CoPRE project website

Independent static website for **CoPRE: Proprioceptive Weak-Contact Detection for Low-Cost Robot Arms**.

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

The figures were exported from `tex/images/teaser.pdf` and `tex/images/framework.pdf` in the research workspace. This website does not load files from the parent repository. Update its copies explicitly when figures change.

Paper, research code, and video are marked “Coming soon.” Replace their status text with real links when released. Add the confirmed author list when appropriate. Numerical experiment claims are intentionally omitted from this initial page because the source manuscript includes draft-result notes.

## GitHub Pages

After committing and pushing this website to `copre-arm/copre-arm.github.io`, configure the repository's Pages settings to serve the `main` branch from `/ (root)` if branch-based publishing is not already enabled. The expected address is <https://copre-arm.github.io/> once GitHub Pages is configured and deployment completes.

`.nojekyll` lets the plain static files be served without Jekyll processing. There is no server-side code or runtime dependency.

This directory has its own Git repository. Run Git commands here (or use `git -C website` from the parent workspace). The parent research repository locally excludes this directory; it is not a submodule.
