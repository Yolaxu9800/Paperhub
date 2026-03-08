# Paperhub

Simple static webpage to spotlight the paper **arXiv:2602.05016**.

## Host on GitHub Pages (no local server needed)

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that deploys the site to GitHub Pages whenever you push to `main`.

### One-time setup

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually from **Actions**).

After deployment, your page will be available at:

- `https://<your-github-username>.github.io/<repo-name>/`

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
