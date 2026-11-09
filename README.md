# Angelo Lepore — portfolio

Astro static site. Deploys to GitHub Pages (`alepore22.github.io`) on every push to `main`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Adding a project

1. Put the cover in `src/assets/covers/` (JPG, PNG, WebP or SVG; Astro optimises it).
2. Copy one of the files in `src/content/work/` and edit its front matter:
   `title`, `year`, `field` (`interfaces` or `illustration`), `kind`, `summary`, `cover`, `coverAlt`, `order`.
3. Write the case study below the front matter in Markdown. Images go in the same assets folder.

Name, email, city and social links live in `src/site.ts`.
The previous hand-written site lives in the git history of `main`.

## Publishing

In the repository settings, under Pages, set the source to **GitHub Actions** (once).
After that, every push to `main` builds the site with `.github/workflows/deploy.yml` and publishes it.
