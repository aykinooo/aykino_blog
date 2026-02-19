# Aykino's Cybersecurity Blog

Personal cybersecurity blog hosted on GitHub Pages.

## Overview

This repository contains a static website with:

- `index.html` as homepage
- `blog.html` as article listing
- `about.html` as profile page
- `projects.html` as coming-soon page
- `article/` for full article pages
- dynamic "Latest CVEs" section on the homepage

## Features

- Dark / light theme toggle
- Responsive layout (desktop + mobile)
- Blog filters and search
- Animated reveal effects
- Homepage "Latest Articles" loaded from `blog.html` (first 3 cards)
- Homepage "Latest CVEs" loaded from `data/latest-cves.json`
- SEO files: `robots.txt` and `sitemap.xml`

## Project Structure

```text
.
├── index.html
├── blog.html
├── about.html
├── projects.html
├── 404.html
├── article/
│   ├── article-red-team.html
│   ├── article-blue-team.html
│   └── article-ctf.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── data/
│   └── latest-cves.json
├── scripts/
│   └── update_cves.py
├── .github/workflows/
│   └── update-cves.yml
├── robots.txt
└── sitemap.xml
```

## Run Locally

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
python3 -m http.server 8000
# open http://localhost:8000
```

## Publishing New Articles

1. Create a new article page in `article/`.
2. Add a new card at the top of the grid in `blog.html`.
3. Keep newest posts first in `blog.html`.

Why: `index.html` automatically pulls the first 3 cards from `blog.html` for the "Latest Articles" section.

## CVE Auto-Update

CVE data is refreshed by GitHub Actions using:

- workflow: `.github/workflows/update-cves.yml`
- script: `scripts/update_cves.py`
- output: `data/latest-cves.json`

Schedule: hourly (`15 * * * *`) and manual trigger (`workflow_dispatch`).

## Notes

- If you change URLs or add pages, update `sitemap.xml`.
- If your GitHub username/repo changes, update canonical URLs and social metadata in HTML files.
