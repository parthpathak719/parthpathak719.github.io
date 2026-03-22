// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: "https://parth.github.io",
  base: "/", 

  devToolbar: {
    enabled: false
  },

  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()]
  }
});