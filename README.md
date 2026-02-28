# Personal Website

This repository contains the source code and built files for [jearly.co.uk](https://www.jearly.co.uk), Dr Joseph Early's
personal website.

## Technology Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/)
- **Theme**: [hugo-coder](https://themes.gohugo.io/hugo-coder/)
- **Hosting**: GitHub Pages
- **Domain**: jearly.co.uk

## Local Development

### Prerequisites

- Hugo Extended (latest version recommended)
- Git

### Setup

1. Clone the repository:
   ```bash
   git clone git@github.com:JAEarly/jaearly.github.io.git
   cd jaearly.github.io
   ```

### Running Locally

Start the Hugo development server:

```bash
hugo serve
```

The site will be available at `http://localhost:1313`

## Deployment

The site is deployed to GitHub Pages via a GitHub Actions workflow. When changes are pushed, the workflow automatically
builds the site with Hugo and deploys it.

After making changes:

1. Commit and push your source files to the repository
2. The GitHub Actions workflow will build and deploy the site automatically

## License

Personal website content © 2019-2026 Joseph Early
