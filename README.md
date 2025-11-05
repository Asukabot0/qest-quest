# Q/est Quest React Site

This repository contains a React single-page application that reimplements the original Q/est Quest site as a client-side experience generated with [Vite](https://vitejs.dev/). The app renders the familiar sections for news, activities, the project team, and reference links using structured data modules so the site can be rebuilt quickly as content changes.

## Getting started

### Prerequisites
- [Node.js](https://nodejs.org/) 18 or newer
- npm 9 or newer (bundled with recent Node.js releases)

> **Note**
> The execution environment used for automated evaluation may block access to the public npm registry. When working locally you should be able to install dependencies normally.

### Install dependencies
```bash
npm install
```

### Run the development server
```bash
npm run dev
```
This starts Vite on <http://localhost:5173>. The React Router configuration in `src/App.jsx` enables navigation between the home, news, activities, team, links, and contact pages without a full refresh.

### Create a production build
```bash
npm run build
```
The optimized static assets are emitted to the `dist/` directory, ready to be served by any static hosting provider. You can preview the build locally with:

```bash
npm run preview
```

## Project structure
```
.
├── index.html          # Vite entry point and root HTML template
├── src
│   ├── main.jsx        # React bootstrap that mounts the Router
│   ├── App.jsx         # Route configuration and shared layout wrapper
│   ├── components/     # Presentational building blocks (layout, hero, slideshow)
│   ├── pages/          # Route-level components for each site section
│   ├── data/           # Structured JavaScript modules that feed page content
│   └── styles/         # Global CSS for typography and responsive layouts
├── public/             # Static assets copied as-is (favicon, etc.)
├── package.json        # npm scripts and dependencies
└── vite.config.js      # Vite configuration enabling the React plugin
```

## Editing content
- Update copy, links, or imagery in the JavaScript data modules under `src/data/`.
- Adjust layout or shared navigation in `src/components/Layout.jsx` and `src/styles/global.css`.
- To add a new section, create a page component in `src/pages/` and register it inside the router in `src/App.jsx`.

## Static hosting
Run `npm run build` and deploy the `dist/` directory to your preferred hosting platform (GitHub Pages, Netlify, Vercel static hosting, etc.). Because the app uses client-side routing, ensure your host rewrites unknown paths to `index.html` so deep links resolve correctly.
