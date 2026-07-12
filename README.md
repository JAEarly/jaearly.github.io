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

Deployed automatically via GitHub Actions on push to `master`. The workflow also checks out
[osrs_pareto](https://github.com/JAEarly/osrs_pareto), builds it, and copies its output into
`dist/projects/osrs_pareto/` before the site is built and deployed — that project isn't deployed on its own, it's
merged into this site so it lives at `/projects/osrs_pareto/`. See `.github/workflows/deploy.yml`.

## Shared design system

The site header and design tokens live in [`@jaearly/site-ui`](https://github.com/JAEarly/jaearly-ui), a small shared
package consumed here (and by embedded projects like osrs_pareto) via a pinned git dependency rather than an npm
registry publish. This site dogfoods it — `Header.astro` renders its `<site-header>` web component and
`Base.astro` imports its `tokens.css`.

## License

Personal website content © 2019-2026 Joseph Early
