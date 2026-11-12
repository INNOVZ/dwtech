// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.desertwhales.tech',
  trailingSlash: 'never',
  integrations: [react()],
  redirects: {
    '/solutions/custom-software-development': '/services/custom-software-development',
    '/services/ai-automation': '/services/ai-automation-solutions',
    '/solutions/ai-automation': '/solutions/ai-agents-automation',
    '/solutions/whatsapp-automation': '/solutions/whatsapp-business-automation',
    '/solutions/web-applications-development': '/solutions/web-development',
    '/solutions/it-consulting-technology-strategy': '/services/it-consulting-technology-strategy',
    '/solutions/it-consulting': '/services/it-consulting-technology-strategy',
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-dom/client',
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