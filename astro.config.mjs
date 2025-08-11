import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercelServerless from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server', // Obligatorio para SSR
  adapter: vercelServerless(), // Adaptador correcto
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
