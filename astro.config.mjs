// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://www.zijie.ca',
  // Emit `papers.html`, `2022/06/30/FirstPost.html`, ... so every URL from
  // the old Jekyll site keeps working without redirects.
  build: { format: 'file' },
  trailingSlash: 'never',
  integrations: [sitemap()],
  markdown: {
    // remark/rehype pipeline so math ($...$, $$...$$) is rendered with KaTeX at build time.
    processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
