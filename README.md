# zijie.ca

Personal website of William Zijie Zhang, built with [Astro](https://astro.build) and deployed to GitHub Pages at <https://zijie.ca>.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve dist/ locally
```

Requires Node 22.23.4+ (`nvm install` reads `.nvmrc`).

## Layout

| Path | What |
| --- | --- |
| `src/pages/index.astro` | Home page: bio, photo, selected work, recent posts |
| `src/data/papers.yaml` | Papers and reports, with optional BibTeX (feeds `/papers` and the home page) |
| `src/data/talks.yaml` | Talks (the "Talks" section of `/papers`) |
| `src/content/posts/` | Blog posts, one Markdown file each |
| `src/lib/site.ts` | Name, CV link, footer links |
| `src/styles/global.css` | All styling (light + dark) |
| `public/` | Files served as-is: CV and PDFs in `documents/`, images, favicons, `og.png`, old-URL redirects |
| `scripts/og-image.html` | Template for `public/og.png`, the link-preview image (regenerate command inside) |

## Write a post

Create `src/content/posts/YYYY-MM-DD-Slug.md`:

```md
---
title: My post
subtitle: Optional one-liner   # shown under the title
draft: true                    # optional; drafts are not published
---

Text with inline math $x^\star$ and display math:

$$
\min_x \; f(x) \quad \text{s.t.} \quad Ax = b
$$
```

It is published at `/YYYY/MM/DD/Slug.html` (the same URL scheme as the old Jekyll site, so old links keep working). Write a literal dollar sign as `\$`.

## Add a paper or talk

Add an entry to `src/data/papers.yaml` or `src/data/talks.yaml`. The fields are documented at the top of each file. For arXiv papers, paste the entry from "Export BibTeX Citation" into `bibtex:` to get a `[bibtex]` toggle.

## Deploy

Every push to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repo settings, **Pages → Source** must be set to **GitHub Actions**, and the custom domain is set under **Pages → Custom domain** (the `CNAME` file is ignored for Actions deployments).

Pull requests (including Dependabot's monthly dependency updates, see `.github/dependabot.yml`) are built but not deployed, so a red check means the update broke the build.
