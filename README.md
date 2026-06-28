# Personal Website

Source for [jearly.co.uk](https://www.jearly.co.uk), Dr Joseph Early's personal website.

## Technology Stack

- **Static Site Generator**: [Astro](https://astro.build/) (no UI framework)
- **Hosting**: GitHub Pages
- **Domain**: jearly.co.uk

## Local Development

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
git clone git@github.com:JAEarly/jaearly.github.io.git
cd jaearly.github.io
npm install
```

### Running Locally

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building

```bash
npm run build    # build to ./dist
npm run preview  # preview the built site
```

## Content

All content is data-driven — no hand-written HTML required:

| File                       | Description                 |
| -------------------------- | --------------------------- |
| `src/data/articles.ts`     | Articles and media coverage |
| `src/data/projects.ts`     | Projects                    |
| `src/data/publications.ts` | Academic publications       |
| `src/data/site.ts`         | Site metadata, social links |

## Deployment

Deployed automatically via GitHub Actions on push to `master`. The workflow builds with `npm run build` and deploys
`./dist` to GitHub Pages.

## License

Personal website content © 2019-2026 Joseph Early
