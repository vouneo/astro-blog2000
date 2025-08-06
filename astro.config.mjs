import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercelServerless from '@astrojs/vercel';


export default defineConfig({
  output: 'server',
    adapter: vercelServerless(),

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