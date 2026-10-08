import fs from 'fs';
import path from 'path';

function migratePage(sourceFile, destComponent, destAstro, componentName) {
  let content = fs.readFileSync(sourceFile, 'utf-8');

  // Replace Next.js specific imports
  content = content.replace(/import Image from "next\/image";\n?/g, '');
  content = content.replace(/import Link from "next\/link";\n?/g, '');
  content = content.replace(/import \{ notFound \} from "next\/navigation";\n?/g, '');
  
  // Also we should remove metadata exports which are not used in React components.
  content = content.replace(/export async function generateMetadata[^}]+\}\n/g, '');
  content = content.replace(/export async function generateStaticParams[^}]+\}\n/g, '');

  // For next/image and next/link
  content = content.replace(/<Image([^>]+)fill([^>]*)>/g, '<img$1$2 style={{width: "100%", height: "100%"}} />');
  content = content.replace(/<Image\b/g, '<img');
  content = content.replace(/<Link\b/g, '<a');
  content = content.replace(/<\/Link>/g, '</a>');
  
  // Fix the img tag issue if it happens
  content = content.replace(/\/ style=\{\{width: "100%", height: "100%"\}\} \/>/g, 'style={{width: "100%", height: "100%"}} />');

  // Astro dynamic routing needs `getStaticPaths` instead of `generateStaticParams`.
  // Wait, if we use the React component directly, we need to pass props.
  // In Next.js, app/services/[slug]/page.tsx receives `{ params: { slug: string } }`
  // We can just keep it exactly as is, and pass the slug from Astro!

  fs.writeFileSync(destComponent, content);

  let astroContent;
  if (sourceFile.includes('[slug]')) {
    astroContent = `---
import Layout from '../../layouts/Layout.astro';
import ${componentName} from '../../components/${path.parse(destComponent).name}';
import { services } from '@/lib/site-data';

export function getStaticPaths() {
  return services.map(s => ({
    params: { slug: s.slug }
  }));
}

const { slug } = Astro.params;
---

<Layout>
  <${componentName} client:load params={{ slug }} />
</Layout>
`;
  } else {
    astroContent = `---
import Layout from '../layouts/Layout.astro';
import ${componentName} from '../components/${path.parse(destComponent).name}';
---

<Layout>
  <${componentName} client:load />
</Layout>
`;
  }

  // create directory if it doesn't exist
  fs.mkdirSync(path.dirname(destAstro), { recursive: true });
  fs.writeFileSync(destAstro, astroContent);
}

migratePage('Dwhales.tech/app/about/page.tsx', 'src/components/about-content.tsx', 'src/pages/about.astro', 'AboutContent');
migratePage('Dwhales.tech/app/services/[slug]/page.tsx', 'src/components/services-slug-content.tsx', 'src/pages/services/[slug].astro', 'ServicesContent');

console.log("Migrated about and services inner pages.");
