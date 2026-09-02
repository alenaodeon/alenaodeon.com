// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain on GitHub Pages: no `base` needed, site must be the final URL.
export default defineConfig({
  site: 'https://alenaodeon.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
