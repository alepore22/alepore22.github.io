// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // The public address: canonical links, social previews and the sitemap are built from it.
  site: 'https://angelolepore.it',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
  image: {
    // Every image, including the ones written in the Markdown of the case studies, gets a srcset,
    // so phones download a picture their size instead of the full-resolution original.
    layout: 'constrained',
  },
  vite: {
    build: {
      // Fonts stay separate files, never inlined into the CSS: the page can render before they arrive.
      assetsInlineLimit: (file) => (/\.(woff2?|ttf|otf)$/.test(file) ? false : undefined),
    },
  },
});
