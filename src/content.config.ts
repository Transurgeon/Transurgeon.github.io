import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  // Keep the original file name (e.g. "2022-06-30-FirstPost") as the id;
  // the date and URL slug are derived from it in src/lib/posts.ts.
  loader: glob({
    pattern: '*.md',
    base: './src/content/posts',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    draft: z.boolean().default(false),
    tags: z.string().optional(),
  }),
});

export const collections = { posts };
