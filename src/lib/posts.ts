import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'> & {
  date: Date;
  slug: string;
  url: string;
};

const ID = /^(\d{4})-(\d{2})-(\d{2})-(.+)$/;

/** Published posts, newest first, with date and old-Jekyll URL attached. */
export async function getPosts(): Promise<Post[]> {
  const entries = await getCollection('posts', (p) => !p.data.draft);
  return entries
    .map((entry) => {
      const m = entry.id.match(ID);
      if (!m) throw new Error(`Post file name must be YYYY-MM-DD-slug.md: ${entry.id}`);
      const [, y, mo, d, slug] = m;
      return {
        ...entry,
        date: new Date(Date.UTC(+y, +mo - 1, +d)),
        slug,
        url: `/${y}/${mo}/${d}/${slug}.html`,
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function groupByYear<T>(items: T[], year: (item: T) => number) {
  const groups = new Map<number, T[]>();
  for (const item of items) {
    const y = year(item);
    if (!groups.has(y)) groups.set(y, []);
    groups.get(y)!.push(item);
  }
  return [...groups.entries()];
}

export const formatDate = (d: Date, opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' }) =>
  d.toLocaleDateString('en-US', { timeZone: 'UTC', ...opts });
