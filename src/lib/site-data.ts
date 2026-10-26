export const siteUrl = "https://www.dwhalestech.com";

export const companyIdentity = {
  name: "DW Tech",
  alternateName: "DW Tech by Desert Whales",
  parentName: "Desert Whales Marketing Services LLC",
  description:
    "DW Tech is the Dubai-headquartered technology and digital-transformation company. We build custom software, AI-integrated business applications, and mobile platforms that turn operational complexity into clarity and speed.",
  headquarters: {
    city: "Dubai",
    region: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    postalCode: "00000",
    latitude: 25.2048,
    longitude: 55.2708,
  },
} as const;

export interface ServiceItem {
  slug: string;
  title: string;
  short: string;
  description: string;
  category: "Engineering & Cloud" | "AI & Enterprise" | "Product & Mobile";
  deliverables: readonly string[];
  featured?: boolean;
}

export const services: readonly ServiceItem[] = [
  {
    slug: "digital-business-transformation",
    title: "Digital business transformation",
    short: "Modernize operations and connect teams, data, and workflows around measurable business outcomes.",
    description: "We turn fragmented, manual operations into connected digital ecosystems. The work starts with your operating model and ends with scalable systems your teams can adopt and grow.",
    category: "Engineering & Cloud",
    deliverables: ["Transformation roadmap", "Process and platform architecture", "Automation opportunities", "Adoption and optimization plan"],
  },
  {
    slug: "custom-software-development",
    title: "Custom software development",
    short: "Purpose-built web and software products shaped around real operational requirements.",
    description: "From internal tools to customer-facing platforms, we design and engineer dependable software around your workflows, integrations, users, and growth plans.",
    category: "Engineering & Cloud",
    featured: true,
    deliverables: ["Product discovery", "Solution architecture", "Full-stack engineering", "Quality assurance and release"],
  },
  {
    slug: "erp-crm-solutions",
    title: "ERP & CRM solutions",
    short: "Centralize sales, operations, inventory, finance, and customer relationships in one working system.",
    description: "We implement and tailor ERP and CRM ecosystems that improve visibility, reduce duplication, and give teams a consistent source of operational truth.",
    category: "AI & Enterprise",
    deliverables: ["Workflow mapping", "Platform configuration", "Data migration and integration", "Training and support"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile app development",
    short: "High-performance mobile experiences designed for the way customers and teams work.",
    description: "We create intuitive cross-platform and native-ready mobile products with secure integrations, reliable performance, and a clear release path.",
    category: "Product & Mobile",
    featured: true,
    deliverables: ["Experience design", "Mobile engineering", "API integration", "Store release support"],
  },
  {
    slug: "ai-automation-solutions",
    title: "AI & automation solutions",
    short: "Practical AI, assistants, and workflow automation embedded where they create business value.",
    description: "We identify repeatable work, connect the right data, and deploy governed AI and automation that improves speed without losing human oversight.",
    category: "AI & Enterprise",
    featured: true,
    deliverables: ["AI opportunity assessment", "Workflow automation", "Knowledge assistants and chatbots", "Monitoring and iteration"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX design",
    short: "Clear, inclusive product experiences grounded in user needs and business goals.",
    description: "We turn complex requirements into coherent product flows, interface systems, and prototypes that teams can validate and engineers can build.",
    category: "Product & Mobile",
    deliverables: ["User and stakeholder research", "Information architecture", "Interface and design systems", "Interactive prototypes"],
  },
  {
    slug: "ecommerce-marketplace-solutions",
    title: "E-commerce & marketplace solutions",
    short: "Connected commerce platforms across storefront, payments, inventory, and operations.",
    description: "We create and integrate commerce experiences that keep the customer journey, catalog, orders, payments, and back-office operations in sync.",
    category: "AI & Enterprise",
    deliverables: ["Commerce experience design", "Shopify and custom development", "Marketplace and payment integrations", "Analytics and optimization"],
  },
  {
    slug: "it-consulting-technology-strategy",
    title: "IT consulting & technology strategy",
    short: "A practical technology roadmap aligned with business priorities, risk, and growth.",
    description: "We help leadership teams make clear technology decisions, sequence investments, assess platforms, and establish an execution model that can scale.",
    category: "Engineering & Cloud",
    deliverables: ["Technology assessment", "Target architecture", "Vendor and platform evaluation", "Delivery roadmap"],
  },
  {
    slug: "product-design-development",
    title: "Product Design and Development",
    short: "Partner with us to build custom web and mobile applications designed around your business ideas.",
    description: "We turn complex requirements into coherent product flows, interface systems, and prototypes that teams can validate and engineers can build.",
    category: "Product & Mobile",
    deliverables: ["Product discovery", "Experience design", "Full-stack engineering", "Interactive prototypes"],
  },
  {
    slug: "cloud-and-devops",
    title: "Cloud and DevOps Solutions",
    short: "Secure, scalable cloud infrastructure and DevOps practices that accelerate delivery and reduce costs.",
    description: "We implement secure, scalable cloud infrastructure and DevOps practices that accelerate delivery, reduce operational costs, and improve system reliability.",
    category: "Engineering & Cloud",
    featured: true,
    deliverables: ["Cloud architecture", "CI/CD pipelines", "Infrastructure as code", "Performance monitoring"],
  },
] as const;

export const serviceCategories = [
  {
    title: "Engineering & Cloud",
    description: "Custom software, distributed architecture, and cloud operations built for enterprise resilience.",
    slugs: ["custom-software-development", "cloud-and-devops", "digital-business-transformation", "it-consulting-technology-strategy"],
  },
  {
    title: "AI & Enterprise Systems",
    description: "Generative AI pipelines, automated workflows, and ERP/CRM systems unifying business operations.",
    slugs: ["ai-automation-solutions", "erp-crm-solutions", "ecommerce-marketplace-solutions"],
  },
  {
    title: "Product & Mobile",
    description: "Intuitive user experiences, native-grade mobile apps, and end-to-end digital products.",
    slugs: ["mobile-app-development", "ui-ux-design", "product-design-development"],
  },
] as const;

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  client: string;
  clientLogo?: string;
  image: string;
  location: string;
  summary: string;
  impact: string;
  tags: string[];
  year: string;
  deliverables: string[];
  geoContext: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "omniflow-supply-chain-erp",
    title: "OmniFlow Multi-Warehouse Logistics & ERP Platform",
    category: "ERP & Cloud Systems",
    client: "GCC Logistics & Distribution Group",
    clientLogo: "/clients/Landtech Trading.png",
    image: "/portfolio/omniflow.jpg",
    location: "Dubai, UAE",
    summary: "Re-engineered a fragmented enterprise distribution network with an automated cloud ERP managing multi-currency trade, real-time fleet telematics, automated UAE FTA VAT compliance, and integrated supplier portals.",
    impact: "68% faster fulfillment turnaround · 100% FTA tax compliance · 12 warehouses unified across the UAE & Saudi Arabia",
    tags: ["Cloud ERP", "PostgreSQL", "Real-Time Telematics", "UAE VAT Integration", "Next.js"],
    year: "2025",
    deliverables: ["Architecture blueprint", "Custom ERP engineering", "Barcode & warehouse scanners", "Automated invoicing engine"],
    geoContext: "Implemented across free zones and commercial logistics hubs in Dubai, JAFZA, and Riyadh.",
  },
  {
    slug: "apexhealth-ai-clinical-triage",
    title: "ApexHealth Multilingual AI Patient Triage & Clinic System",
    category: "AI & Automation",
    client: "Regional Healthcare Network",
    clientLogo: "/clients/crystal.png",
    image: "/portfolio/apexhealth.jpg",
    location: "Dubai & Abu Dhabi, UAE",
    summary: "Deployed a secure, HIPAA and UAE Health Data compliant AI conversational triage system in Arabic and English, linking patient symptoms directly to specialized clinical schedules and digital EHR systems.",
    impact: "85% reduction in appointment triage wait time · 250,000+ patient interactions handled · 99.4% booking accuracy",
    tags: ["Generative AI", "Bilingual NLP (Arabic/English)", "FastAPI", "FHIR / HL7 EHR", "Automated Triage"],
    year: "2025",
    deliverables: ["LLM fine-tuning", "EHR data connector", "Doctor consultation portal", "WhatsApp & Web triage widget"],
    geoContext: "Compliant with UAE Federal Law on Healthcare Data Protection with sovereign cloud hosting.",
  },
  {
    slug: "aura-luxury-ecommerce-marketplace",
    title: "Aura Omnichannel Headless E-Commerce & Marketplace",
    category: "E-Commerce & Digital Experience",
    client: "Luxury Fashion & Lifestyle House",
    clientLogo: "/clients/ambassadorscentworks (1).png",
    image: "/portfolio/aura.jpg",
    location: "Dubai, UAE & Milan, Italy",
    summary: "Created a lightning-fast headless e-commerce flagship with dynamic multi-currency checkout (AED, SAR, EUR, USD), localized high-touch clienteling, and omnichannel inventory syncing across 14 boutique retail stores.",
    impact: "240% increase in mobile conversion · 0.6s average page load speed · Seamless omni-channel click-and-collect",
    tags: ["Headless Commerce", "Shopify Plus API", "Astro & Tailwind", "Stripe Multi-Currency", "ERP Sync"],
    year: "2024",
    deliverables: ["Bespoke UI/UX design", "Storefront development", "Boutique POS sync", "Personalized clienteling engine"],
    geoContext: "Targeting GCC high-net-worth shoppers with integrated local payment gateways (Apple Pay, Tabby, Tamara).",
  },
  {
    slug: "finpulse-wealth-telemetry-engine",
    title: "FinPulse Institutional Asset Management Dashboard",
    category: "Custom Software Development",
    client: "Capital & Private Equity Firm",
    clientLogo: "/clients/fort fiancial advisor.png",
    image: "/portfolio/finpulse.jpg",
    location: "DIFC, Dubai, UAE",
    summary: "Architected a low-latency financial dashboard delivering algorithmic portfolio stress tests, live risk exposure gauges, and automated investor capital call reports for international family offices.",
    impact: "$1.4B+ AUM monitored in real-time · Sub-80ms calculation speed · Complete DFSA audit compliance log",
    tags: ["React & TypeScript", "High-Throughput Go", "WebSockets", "TimescaleDB", "DIFC Regulatory Security"],
    year: "2025",
    deliverables: ["Quantitative analytics engine", "Interactive SVG heatmaps", "Automated LP reporting", "Role-based access matrix"],
    geoContext: "Engineered inside DIFC's financial regulatory perimeter with strict SOC2 & data sovereignty standards.",
  },
  {
    slug: "proppulse-smart-property-cloud",
    title: "PropPulse Commercial Real Estate & Tenant Experience",
    category: "Mobile & IoT Platform",
    client: "Premier Commercial Properties",
    clientLogo: "/clients/the-cafika-logos.png",
    image: "/portfolio/proppulse.jpg",
    location: "Riyadh, Saudi Arabia & Dubai, UAE",
    summary: "Built a connected tenant mobile app and cloud property operations portal with digital lease execution, smart facility ticket dispatching, digital access badges, and building IoT energy analytics.",
    impact: "42% reduction in facility ticket resolution time · 98% resident satisfaction rate · 15,000+ active mobile tenants",
    tags: ["React Native", "AWS Serverless", "GraphQL", "IoT Sensor Gateway", "Smart Keycards"],
    year: "2024",
    deliverables: ["iOS & Android mobile apps", "Building manager portal", "IoT telemetry ingest", "Digital payments integration"],
    geoContext: "Supporting Saudi Vision 2030 smart city and commercial asset modernization benchmarks.",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  publishedDate: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    body: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  geoRegion: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-automation-in-gcc-enterprises",
    title: "AI & Workflow Automation in the GCC: The Enterprise Playbook for Dubai & Riyadh",
    subtitle: "How forward-thinking enterprises in the UAE and Saudi Arabia are moving beyond basic chatbots to mission-critical operational intelligence.",
    category: "AI & Automation",
    publishedDate: "2026-03-20",
    readTime: "6 min read",
    author: "DW Tech AI Research Group",
    authorRole: "Enterprise AI Practice",
    excerpt: "With national strategies prioritizing AI in the UAE and Saudi Arabia, companies that embed domain-specific workflow automation and sovereign AI pipelines are outperforming peers in operational speed and customer retention.",
    geoRegion: "Dubai, UAE & Riyadh, Saudi Arabia",
    keyTakeaways: [
      "Target high-frequency administrative bottlenecks first (vendor reconciliations, multilingual customer triage, invoice verification).",
      "Adopt hybrid data residency architectures to maintain compliance with UAE Federal Data Laws and Saudi NDMO standards.",
      "Integrate human-in-the-loop validation for high-stakes operational and regulatory decisions.",
    ],
    contentSections: [
      {
        heading: "The Shift from Novelty to Enterprise ROI",
        body: "Over the past three years, GCC enterprises experimented heavily with generic conversational models. In 2026, the focus has pivoted to operational return on investment. Organizations in Dubai and Riyadh are deploying purpose-built automations that connect ERP systems, customer communication channels, and internal documentation into unified decision pipelines.",
      },
      {
        heading: "Navigating Sovereign AI & Local Data Compliance",
        body: "Enterprise leaders in the Middle East cannot afford compliance ambiguity. Between the UAE's data protection frameworks and Saudi Arabia's National Data Management Office (NDMO) guidelines, implementing localized endpoints and secure VPC deployments is essential. DW Tech designs AI pipelines that honor strict data sovereignty while delivering world-class cognitive capabilities.",
      },
      {
        heading: "Where GCC Leaders Are Seeing Immediate Returns",
        body: "The highest ROI automations in 2026 center around three areas: 1) Multilingual customer support handling Nuanced Arabic and English inquiries without escalating to humans, 2) Supply chain and customs document verification for free zone operations, and 3) Automated financial auditing for VAT and corporate tax documentation.",
      },
    ],
    faq: [
      {
        question: "How do enterprises in Dubai and UAE adopt AI while adhering to local data privacy laws?",
        answer: "Enterprises utilize sovereign cloud infrastructure (such as UAE-hosted AWS/Azure regions or local private clouds) and deploy private LLM inference endpoints with zero data retention policies to strictly comply with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection.",
      },
      {
        question: "What is the typical timeline for an enterprise AI automation pilot at DW Tech?",
        answer: "A focused discovery and proof-of-concept typically takes 3 to 4 weeks, followed by production deployment within 8 to 12 weeks including workflow integration and team training.",
      },
    ],
  },
  {
    slug: "custom-software-vs-off-the-shelf-erp",
    title: "Custom Software vs. Off-The-Shelf ERP: What Scalable UAE Businesses Must Know",
    subtitle: "A practical guide to evaluating when ready-made enterprise software succeeds and when custom digital engineering delivers 10x ROI.",
    category: "Enterprise Engineering",
    publishedDate: "2026-02-18",
    readTime: "8 min read",
    author: "Enterprise Solutions Team",
    authorRole: "Digital Transformation Practice",
    excerpt: "Off-the-shelf enterprise suites promise fast deployment, yet customized operational models in trade, real estate, and healthcare often require bespoke software architectures to retain proprietary advantages.",
    geoRegion: "United Arab Emirates & GCC",
    keyTakeaways: [
      "Ready-made ERPs excel for standardized ledger accounting and global tax templates.",
      "Custom software provides uncopyable competitive differentiation in customer workflows and specialized logistics.",
      "The modern architectural pattern is a composable core: standardized financial ledger connected via modern APIs to custom operational portals.",
    ],
    contentSections: [
      {
        heading: "The Real Cost of Rigid ERP Customization",
        body: "Many growing firms in the UAE purchase monolithic ERP suites with the assumption that customization will be simple. In practice, bending a legacy ERP to fit unique commercial models incurs steep consulting hours, brittle upgrades, and bloated annual licensing. Understanding the boundary between core accounting and differentiated operations is vital.",
      },
      {
        heading: "The Composable Architecture Advantage",
        body: "Rather than an all-or-nothing dichotomy, progressive technology teams build modular architectures. They maintain a compliant financial baseline while engineering custom web portals, mobile apps, and automated pipelines that directly cater to their unique competitive moats.",
      },
    ],
    faq: [
      {
        question: "When should a Dubai or GCC company choose custom software over an ERP suite?",
        answer: "Choose custom software when your operational workflow represents your proprietary market differentiator, when off-the-shelf suites charge punitive per-seat licensing for large frontline workforces, or when you need tight integration with localized services and payment gateways.",
      },
    ],
  },
  {
    slug: "modern-headless-ecommerce-in-the-middle-east",
    title: "Modern Headless E-Commerce: Driving High-Conversion Retail in the Middle East",
    subtitle: "Sub-second load times, localized payment checkout, and omnichannel clienteling for luxury and retail brands.",
    category: "E-Commerce Architecture",
    publishedDate: "2026-01-28",
    readTime: "5 min read",
    author: "Digital Commerce Lab",
    authorRole: "Commerce Engineering",
    excerpt: "Middle East consumers are mobile-first and demand immediate performance. Discover how headless e-commerce architectures unlock superior conversion rates and seamless omnichannel experiences.",
    geoRegion: "Dubai, Milan & Riyadh",
    keyTakeaways: [
      "Sub-second mobile speed directly correlates with high cart completions in GCC luxury retail.",
      "Native support for regional payments like Apple Pay, Tabby, Tamara, and Mada is non-negotiable.",
      "Headless architectures decouple the presentation layer from the commerce engine, enabling agile omnichannel updates.",
    ],
    contentSections: [
      {
        heading: "The Mobile-First Consumer in the UAE & KSA",
        body: "Over 85% of retail web visits in the GCC originate from mobile devices. Traditional monolithic stores frequently suffer from high bounce rates due to heavy script bundles. Headless frontends built with modern frameworks achieve instantaneous transitions, increasing conversion and retention across regional markets.",
      },
      {
        heading: "Localized Checkout Dynamics",
        body: "Payment preferences in the Middle East require frictionless one-click experiences. Integrating localized Buy Now Pay Later (BNPL) providers alongside standard payment methods with instant mobile authentication is the benchmark for high-performing commerce.",
      },
    ],
    faq: [
      {
        question: "Why is headless commerce better for brands operating across UAE, KSA, and Europe?",
        answer: "Headless allows a single commerce and inventory backend to serve multiple distinct frontends with custom localized currencies, languages, tax calculations, and marketing campaigns without duplicating infrastructure.",
      },
    ],
  },
];

export const processSteps = [
  ["Discover", "Understand the business model, operations, pain points, and growth opportunities."],
  ["Strategize", "Build a focused digital-transformation roadmap and technology strategy."],
  ["Design & develop", "Create intuitive experiences and scalable technology solutions."],
  ["Integrate & automate", "Connect platforms, data, and intelligent workflows."],
  ["Optimize & scale", "Improve performance continuously with support, analytics, and iteration."],
] as const;

export const locations = [
  ["Dubai, UAE", "Global headquarters & Middle East operations"],
  ["Milan, Italy", "European business & creative collaboration network"],
] as const;

export const contacts = {
  email: "tech@thedesertwhales.com",
  website: "dwhalestech.com",
  phones: [
    ["UAE", "+971 52 867 8679"],
  ],
} as const;
