import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'hybrid', // Permite páginas dinámicas y estáticas
  integrations: [
    tailwind({
      applyBaseStyles: true,
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  }
});