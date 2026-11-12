// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: "https://parthpathak719.github.io",
  base: "/", 

  devToolbar: {
    enabled: false
  },

  trailingSlash: 'always',
  // Keep production optimization from replacing the dev JSX runtime cache.
  vite: {
    cacheDir: process.argv.includes('build') ? 'node_modules/.vite-build' : 'node_modules/.vite-dev',
  },
});
