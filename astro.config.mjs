// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://zijie.ca',
  // Emit `papers.html`, `2022/06/30/FirstPost.html`, ... so every URL from
  // the old Jekyll site keeps working without redirects.
  build: { format: 'file' },
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // Leave the old-URL redirect pages out of the sitemap.
      filter: (page) => !/\/(about|archive)(\.html)?$/.test(page),
      // Pages are built as `*.html` files; list them by those URLs (matching
      // the canonical links and the old Jekyll URLs) rather than the extensionless form.
      serialize: (item) => {
        const url = new URL(item.url);
        if (url.pathname !== '/' && !/\.\w+$/.test(url.pathname)) url.pathname += '.html';
        return { ...item, url: url.href };
      },
    }),
  ],
  markdown: {
    // remark/rehype pipeline so math ($...$, $$...$$) is rendered with KaTeX at build time.
    processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
