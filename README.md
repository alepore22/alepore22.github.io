# Angelo Lepore — portfolio

Astro static site. Deploys to GitHub Pages on every push to `main`, served at https://angelolepore.it.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Adding a project

1. Put the cover in `src/assets/covers/` and the other pictures in `src/assets/work/<project>/` (Astro optimises them).
2. Copy one of the files in `src/content/work/` and edit its front matter:
   `title`, `date`, `category`, `headline` (what it is in a few words, for the browser tab and Google: "timer Pomodoro per iOS"), `group` (`uiux`, `grafica` or `app`: the filter on the home page), `summary`,
   `cover`, `coverAlt`, `color` and `ink` (the tile colours), `order`.
   Optional: `description` (a longer text for Google, 120–155 characters, when the summary is short), `video` (a looping clip under `public/media/`, shown instead of the cover), `note` (the handwritten label), `behance`.
3. Write the case study below the front matter in Markdown. Text is real text; pictures are only pictures.
   - Pictures on consecutive lines become a row (2, 3 or 4 across).
   - `<div class="split">` … `</div>` puts words beside a picture; `split flip` swaps the sides, `split narrow` is for a phone screen.
     Leave a blank line after the opening tag and before the closing one.
   - `<div class="detti">` is used in Accìrete: copy it from there.
   - `<ul class="swatches">` shows a palette in real colours, one `<li style="--c:#7B3CF0;--t:#fff">Viola<span>#7B3CF0</span></li>` per colour (`--t` is the text colour, dark by default).

Name, email, city and social links live in `src/site.ts`; the structured data for search engines is built from them in `src/schema.ts`.
The sitemap is generated at build time; `public/robots.txt` points to it.
The previous hand-written site lives in the git history of `main`.

## Publishing

In the repository settings, under Pages, set the source to **GitHub Actions** (once).
After that, every push to `main` builds the site with `.github/workflows/deploy.yml` and publishes it.
