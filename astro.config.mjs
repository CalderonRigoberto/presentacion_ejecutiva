import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://calderonrigoberto.github.io/presentacion_ejecutiva',
  base: '/presentacion_ejecutiva/',
  compressHTML: true,
  output: 'static',
  vite: {
    css: {
      devSourcemap: true,
    }
  }
});

