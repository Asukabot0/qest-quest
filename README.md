# Q/est Website

This repository contains the source for the Q/est website. The site is built with [Jekyll](https://jekyllrb.com/) and published via GitHub Pages.

## Prerequisites

- Ruby (version 3.1 or newer is recommended)
- [Bundler](https://bundler.io/)

## Installation

Install the gem dependencies locally by running:

```sh
bundle install
```

## Local development

To run the site locally with hot reloading:

```sh
bundle exec jekyll serve
```

By default this will serve the site at <http://localhost:4000>. Use `bundle exec jekyll build` to generate the static site into the `_site/` directory without serving it.

## Repository structure

- `_config.yml` — Global site configuration, locales, collections, and plugin settings.
- `_layouts/`, `_includes/` — Liquid templates shared across pages.
- `index.md`, `activities.md`, `projects.md`, etc. — Markdown content pages for the Japanese site.
- `en/` — English translations for the main content pages and news.
- `assets/` — Static assets such as stylesheets, scripts, and images.

## Deployment

The site is configured to be deployed through GitHub Pages. Pushing to the default branch triggers the GitHub Pages build and publishes the latest content.
