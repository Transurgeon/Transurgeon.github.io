import { parse } from 'yaml';
import { z } from 'astro/zod';
import papersRaw from '../data/papers.yaml?raw';
import talksRaw from '../data/talks.yaml?raw';

const Item = z.object({
  title: z.string(),
  authors: z.array(z.string()).default([]),
  venue: z.string(),
  year: z.number().int(),
  note: z.string().optional(),
  selected: z.boolean().default(false),
  links: z.record(z.string(), z.string()).default({}),
  bibtex: z.string().optional(),
});

export type Paper = z.infer<typeof Item>;

const load = (raw: string, schema: z.ZodType<Paper>) =>
  z
    .array(schema)
    .parse(parse(raw) ?? [])
    .sort((a, b) => b.year - a.year);

export const papers = load(papersRaw, Item.refine((p) => p.authors.length > 0, 'papers need authors'));
export const talks = load(talksRaw, Item);

/** Spellings of my name that get bolded in author lists. */
export const ME = new Set(['William Zijie Zhang', 'William Zhang']);
