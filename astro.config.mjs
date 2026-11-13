// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { readFileSync } from 'node:fs';

// Keep the vendored effects' notice in their production chunk as well.
const effectsNotice = readFileSync(new URL('./src/components/effects/LightPillar.jsx', import.meta.url), 'utf8')
  .match(/\/\*! @license[\s\S]*?\*\//)?.[0] ?? '';

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
    build: {
      rollupOptions: {
        output: { banner: chunk => chunk.name === 'PortfolioEffects' ? effectsNotice : '' },
      },
    },
    cacheDir: process.argv.includes('build') ? 'node_modules/.vite-build' : 'node_modules/.vite-dev',
  },
});
