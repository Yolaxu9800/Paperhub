# Paperhub

Interactive companion webpage for **arXiv:2602.05016**.

## What this page now includes

- A hero/banner section inspired by conference/project pages.
- A **block-by-block quick digest** that works like a table of contents.
- Clickable digest cards that jump to the corresponding detailed section.
- A longer scrollable deep-dive area with reveal-on-scroll effects.

## Host on GitHub Pages (no local server needed)

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that deploys the site to GitHub Pages whenever you push to `main`.

### One-time setup

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push your changes to the `main` branch (the default branch in most GitHub repos).
   - If your repo uses a different default branch (for example `master`), either rename it to `main` or update `.github/workflows/deploy-pages.yml`.
   - You can also open **Actions** and click **Run workflow** to deploy manually.

> 中文说明：这里的 `main` 是仓库的默认分支名。意思是把代码提交并推送到默认分支后，GitHub Pages 会自动部署；如果你的默认分支不是 `main`，需要改 workflow 里的分支名。

After deployment, your page will be available at:

- `https://<your-github-username>.github.io/<repo-name>/`

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
