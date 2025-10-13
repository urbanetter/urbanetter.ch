# urbanetter.ch

This repository contains the source code for [urbanetter.ch](https://urbanetter.ch), Urban Etter's personal site. The site is built with [Eleventy](https://www.11ty.dev/) and uses Markdown for all long-form content.

## Getting started

```bash
npm install
npm run dev
```

`npm run dev` starts Eleventy in watch mode and serves the site at `http://localhost:8080`.

To create a production build run:

```bash
npm run build
```

The generated files are written to `_site/`.

## Adding content

- **Writing** lives in `src/writing/`. Add a new Markdown file with front matter (`title`, `date`, `summary`, `category`, `tags`) and Eleventy will include it automatically.
- **Experiments** are documented in `src/experiments/`. Each entry can link out to sketches in `p5js/` or elsewhere.
- **Projects** sit in `src/projects/`. Use the `primaryLink` field in the front matter to point to repos, demos, or documentation.
- **Talks** go into `src/talks/` and can include `event`, `location`, and `links` metadata.

Assets (images, PDFs, etc.) belong in `src/assets/`. During the build they are copied to `/assets/`.

## Deployment

The project is optimised for static hosting. You can deploy the contents of `_site/` to GitHub Pages, Netlify, Vercel, or any other static host.

## License

The content of the site (everything under `src/`) is © Urban Etter. The Eleventy configuration and build tooling is available under the MIT license.
