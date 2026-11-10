import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Shown as "11.2024".
      date: z.string(),
      category: z.string(),
      // Which filter on the home page shows this project.
      group: z.enum(['uiux', 'grafica', 'app']),
      summary: z.string(),
      role: z.string().optional(),
      with: z.string().optional(),
      tools: z.array(z.string()).default([]),
      cover: image(),
      coverAlt: z.string(),
      // Where to centre the cover when a tile crops it.
      coverPosition: z.string().default('50% 50%'),
      // A looping clip shown instead of the cover (a path under /public), with the cover as its poster.
      video: z.string().optional(),
      // Tile colours.
      color: z.string(),
      ink: z.string(),
      // A handwritten note on the tile, optional.
      note: z.string().optional(),
      behance: z.string().url().optional(),
      order: z.number().default(0),
    }),
});

export const collections = { work };
