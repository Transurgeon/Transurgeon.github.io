import { parse } from 'yaml';
import { z } from 'astro/zod';
import raw from '../data/papers.yaml?raw';

const Paper = z.object({
  title: z.string(),
  authors: z.array(z.string()).min(1),
  venue: z.string(),
  year: z.number().int(),
  note: z.string().optional(),
  selected: z.boolean().default(false),
  links: z.record(z.string(), z.string()).default({}),
});

export type Paper = z.infer<typeof Paper>;

export const papers: Paper[] = z
  .array(Paper)
  .parse(parse(raw) ?? [])
  .sort((a, b) => b.year - a.year);

/** Spellings of my name that get bolded in author lists. */
export const ME = new Set(['William Zijie Zhang', 'William Zhang']);
