import fs from 'fs';
import path from 'path';

let content = fs.readFileSync('src/components/page-content.tsx', 'utf-8');

// 1. Separate imports/constants from the component body
const componentStartIdx = content.indexOf('export function PageContent() {');
let frontmatter = content.substring(0, componentStartIdx);
let body = content.substring(componentStartIdx);

// Extract the return statement body
const returnStart = body.indexOf('return (');
const lastClosingBrace = body.lastIndexOf(');');
body = body.substring(returnStart + 8, lastClosingBrace).trim();
if (body.startsWith('<>')) body = body.substring(2);
if (body.endsWith('</>')) body = body.substring(0, body.length - 3);

// 2. Adjust Frontmatter
frontmatter = frontmatter.replace(/import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@\/components\/motion";/, '');
frontmatter = frontmatter.replace(/import \{ ScrollScrubReveal \} from "@\/components\/motion";/, 'import { ScrollScrubReveal } from "@/components/motion";\nimport ScrollReveal from "@/components/ScrollReveal.astro";\nimport { ClientsMarquee } from "@/components/clients-marquee";');
frontmatter = frontmatter.replace(/import \{ SiteFooter \} from "@\/components\/site-footer";/g, '');
frontmatter = frontmatter.replace(/import \{ SiteHeader \} from "@\/components\/site-header";/g, '');

// Clean up unused motion imports
frontmatter = frontmatter.replace(/FadeIn, /g, '');
frontmatter = frontmatter.replace(/ScaleIn, /g, '');
frontmatter = frontmatter.replace(/StaggerContainer, /g, '');
frontmatter = frontmatter.replace(/StaggerItem/g, '');

const astroFrontmatter = `---
import Layout from '../layouts/Layout.astro';
import { TechnologyStack } from '../components/technology-stack';
import { Globe } from '../components/globe';
${frontmatter}
---`;

// 3. String Replacements in body
body = body.replace(/className=/g, 'class=');
body = body.replace(/htmlFor=/g, 'for=');

// Replace FadeIn and ScaleIn
body = body.replace(/<FadeIn/g, '<ScrollReveal');
body = body.replace(/<\/FadeIn>/g, '</ScrollReveal>');
body = body.replace(/<ScaleIn/g, '<ScrollReveal');
body = body.replace(/<\/ScaleIn>/g, '</ScrollReveal>');

// Replace StaggerContainer/Item
body = body.replace(/<StaggerContainer[^>]*>/g, '<div>');
body = body.replace(/<\/StaggerContainer>/g, '</div>');
body = body.replace(/<StaggerItem/g, '<ScrollReveal');
body = body.replace(/<\/StaggerItem>/g, '</ScrollReveal>');

// Add delay logic to maps where index is present
// We'll just do a global replace for StaggerItem delay
// In TSX, we had <StaggerItem key={...}>. In Astro, we can just do <ScrollReveal delay={index * 0.1}>
body = body.replace(/<ScrollReveal(.*?)key=\{index\}(.*?)>/g, '<ScrollReveal$1$2 delay={index * 0.1}>');
body = body.replace(/<ScrollReveal(.*?)key=\{service.slug\}(.*?)>/g, '<ScrollReveal$1$2 delay={index * 0.1}>');

// Ensure components have client:load or client:visible
body = body.replace(/<Globe \/>/g, '<Globe client:visible />');
body = body.replace(/<ScrollScrubReveal/g, '<ScrollScrubReveal client:visible');
body = body.replace(/<TechnologyStack \/>/g, '<TechnologyStack client:visible />');
body = body.replace(/<ClientsMarquee \/>/g, '<ClientsMarquee client:visible />'); // We'll keep it as React for now to save time, or we can convert it later.

const finalAstro = `${astroFrontmatter}

<Layout>
${body}
</Layout>
`;

fs.writeFileSync('src/pages/index.astro', finalAstro);
console.log('Migrated index.astro');
