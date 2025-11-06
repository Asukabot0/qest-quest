# Q/est Website

This repository contains the source for the Q/est website, built with [Jekyll](https://jekyllrb.com/) and the minima theme. The site content defaults to Japanese and includes localized English pages under `en/`. Site configuration, including the theme, locale, and plugin list, lives in [`_config.yml`](./_config.yml). Content pages such as [`index.md`](./index.md) and [`en/index.md`](./en/index.md) reference shared includes and assets for consistent layout.

## Getting started

1. Install Ruby (3.1 or later is recommended) and Bundler.
2. Install the project's gems:
   ```bash
   bundle install
   ```
3. Start the development server:
   ```bash
   bundle exec jekyll serve
   ```
4. Open http://127.0.0.1:4000/ to preview the site locally.

The dependencies are managed through [`Gemfile`](./Gemfile) and [`Gemfile.lock`](./Gemfile.lock). When running `jekyll serve`, Jekyll will watch for changes and rebuild the site automatically.

## Project structure

- `index.md`, `activities.md`, `projects.md`, etc. — Japanese content pages that pull in shared partials. English counterparts live under `en/`.
- `_layouts/`, `_includes/`, `assets/` — Templates, partials, scripts, styles, and static files referenced by the pages.
- `_news/`, `_activities/` — Collections that produce news and activity detail pages.
- `_site/` — The generated site output (ignored by GitHub Pages builds).
- `build/` — Pre-rendered static exports used for legacy hosting or deployment scripts.

## Localization workflow

All pages default to Japanese via the global `lang: ja` setting in [`_config.yml`](./_config.yml). English content is organized under the `en/` directory with matching filenames. Shared components should remain language-agnostic, with localized strings handled through front matter or data files under [`_data/`](./_data).

## Deployment

The site is compatible with GitHub Pages through the `github-pages` gem specified in the [`Gemfile`](./Gemfile). Publishing the `main` branch triggers GitHub Pages to build the site using the included configuration and plugins. Alternatively, you can deploy the `_site/` output directory to any static file host.
