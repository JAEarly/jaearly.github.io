# Personal Website

This repository contains the source code and built files for [jearly.co.uk](https://www.jearly.co.uk), Dr Joseph Early's personal website.

## Technology Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/)
- **Theme**: [hugo-coder](https://themes.gohugo.io/hugo-coder/)
- **Hosting**: GitHub Pages
- **Domain**: jearly.co.uk (via 123-reg)

## Project Structure

```
.
├── config.toml          # Hugo configuration
├── content/             # Page content (HTML files)
├── static/              # Static assets (images, PDFs, fonts)
├── themes/              # Hugo theme
├── layouts/             # Custom layout overrides
├── assets/              # Asset source files (SCSS, CSS)
├── public/              # Built site (served by GitHub Pages)
└── archetypes/          # Content templates
```

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

For drafts and future content:
```bash
hugo serve -D -F
```

## Building

To build the site for production:

```bash
hugo
```

This generates the static site in the `public/` directory.

## Deployment

The site is deployed to GitHub Pages. The `public/` directory contains the built site that GitHub Pages serves.

After making changes:
1. Build the site with `hugo`
2. Commit and push both source and built files to the repository
3. GitHub Pages will automatically serve the updated `public/` directory

## Configuration

Key configuration is in `config.toml`:
- Site metadata (title, description)
- Author information
- Social links
- Navigation menu
- Theme settings

## Content Management

Content pages are located in the `content/` directory as HTML files:
- `about.html` - About page
- `articles.html` - Articles/blog posts
- `publications.html` - Academic publications
- `projects.html` - Project showcase
- `contact.html` - Contact information

Static files (CV, images, papers) go in the `static/` directory and are copied directly to the root of the built site.

## License

Personal website content © 2019-2025 Joseph Early
