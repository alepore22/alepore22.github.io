import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number(),
      // Which half of the practice: decides the group on the home page.
      field: z.enum(['interfaces', 'illustration']),
      kind: z.string(),
      summary: z.string(),
      role: z.string().optional(),
      with: z.string().optional(),
      tools: z.array(z.string()).default([]),
      cover: image(),
      coverAlt: z.string(),
      behance: z.string().url().optional(),
      order: z.number().default(0),
    }),
});

export const collections = { work };
