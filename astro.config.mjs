// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.desertwhales.tech',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'framer-motion',
        'lucide-react',
        'cobe',
      ],
    },
  },

  build: {
    inlineStylesheets: 'always'
  },

  adapter: vercel()
});