import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://calderonrigoberto.github.io/presenteacion_ejecutiva',
  base: '/presenteacion_ejecutiva/',
  compressHTML: true,
  output: 'static',
  vite: {
    css: {
      devSourcemap: true,
    }
  }
});

