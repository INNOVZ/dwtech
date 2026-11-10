const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../public/data/services-detail.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

data["ecommerce-marketplace-solutions"] = {
  slug: "ecommerce-marketplace-solutions",
  metaTitle: "E-Commerce Development Dubai, UAE | Shopify, WooCommerce & Custom Stores | Desert Whales Technologies",
  metaDescription: "Premier e-commerce development company in Dubai, UAE. We build high-converting Shopify & Shopify Plus stores, WooCommerce shops, and bespoke custom headless commerce platforms.",
  badge: "Shopify · WooCommerce · Custom Stores",
  heroH1: "E-Commerce Development: Shopify, WooCommerce & Custom Stores.",
  heroSubtitle: "From rapid-scaling Shopify Plus storefronts to flexible WooCommerce shops and 100% bespoke custom headless platforms—we engineer high-converting digital commerce engines tailored for Dubai, UAE, and GCC markets.",
  statementQuote: "We don't force a single template on every brand. We architect the exact commerce engine your business needs—whether scaling on Shopify Plus, tailoring WooCommerce, or engineering a custom headless platform with full IP ownership.",
  statementAuthor: "Desert Whales Technologies Digital Commerce Practice | Dubai, UAE",
  trustStats: [
    { value: "< 0.8s", label: "Average mobile page speed across GCC networks" },
    { value: "38%+", label: "Average lift in mobile checkout conversion rate" },
    { value: "3 Stacks", label: "Shopify Plus, WooCommerce & Bespoke Custom Stores" },
    { value: "100%", label: "Local GCC payments (Apple Pay, Tabby, Tamara, Mada)" }
  ],
  featureRowsTitle: "Our Three Core E-Commerce Development Pillars",
  featureRowsSubtitle: "Selecting the right commerce foundation to match your catalog size, business model, and operational budget.",
  featureRows: [
    {
      title: "Shopify & Shopify Plus Engineering",
      tagline: "Fast, dependable, high-converting enterprise storefronts",
      description: "As Shopify specialists in Dubai, we design custom Shopify themes, develop custom Shopify apps, and architect Shopify Plus enterprise features including B2B wholesale portals, Shopify Functions, Custom Checkout Extensibility, and headless Hydrogen storefronts. Seamlessly integrated with local UAE payment gateways, Tabby, and Tamara.",
      tags: ["Shopify Plus", "Custom Liquid Themes", "Checkout Extensibility", "Hydrogen / Headless", "Shopify B2B"]
    },
    {
      title: "WooCommerce Development & Optimization",
      tagline: "Flexible, open-source commerce with 100% data sovereignty and zero licensing fees",
      description: "For brands seeking total control and cost efficiency, we engineer robust, high-performance WooCommerce stores. We customize themes, develop custom plugins, optimize database performance for large catalogs, and connect local GCC payment gateways (Network International, Telr, Checkout.com) with automated UAE VAT tax invoicing.",
      tags: ["WooCommerce", "WordPress Engineering", "Custom Plugins", "Zero Transaction Cut", "Speed Hardening"]
    },
    {
      title: "Bespoke Custom Stores & Headless Commerce",
      tagline: "Zero platform constraints, sub-second edge speed, and 100% IP ownership",
      description: "When off-the-shelf platforms restrict your business model, we build custom e-commerce engines with Next.js, Medusa.js, Node.js, and PostgreSQL. Tailored for complex multi-vendor marketplaces, high-volume wholesale distributors, and custom product configurators with extreme traffic resilience during White Friday and Ramadan.",
      tags: ["Next.js Commerce", "Medusa.js", "Multi-Vendor Marketplaces", "B2B Credit Portals", "100% IP Ownership"]
    },
    {
      title: "GCC Payment Gateways, Arabic RTL & ERP Synchronization",
      tagline: "Seamless checkout for Middle East shoppers and automated back-office ops",
      description: "Every store we deliver is optimized for the GCC consumer with native bilingual Arabic (RTL) and English interfaces, 1-click Apple Pay, Buy Now Pay Later (Tabby & Tamara), and Mada debit cards. We automate inventory and order flows with two-way connectors to SAP, Odoo, Microsoft Dynamics, and local couriers (Aramex, DHL).",
      tags: ["Apple Pay", "Tabby & Tamara", "Arabic RTL Native", "Aramex & DHL APIs", "ERP Live Sync"]
    }
  ],
  caseStudiesTitle: "Delivered E-Commerce Platforms & Verified Impact",
  caseStudies: [
    {
      title: "Maison de Parfum: Headless Luxury Shopify Plus Boutique",
      tag: "Shopify Plus",
      sector: "Luxury Perfumery & Cosmetics · Dubai & Riyadh",
      challenge: "A legacy store suffered from 4.8s mobile load times, causing severe drop-offs during regional fragrance gifting campaigns and Ramadan shopping spikes.",
      solution: "Replatformed to a custom headless Shopify Plus architecture with Next.js frontend, bilingual English/Arabic RTL toggle, 1-click Apple Pay, and Tabby split-payments.",
      metrics: "Mobile load time cut from 4.8s to 0.7s · 52% lift in mobile checkout conversion rate during Ramadan",
      techStack: ["Shopify Plus", "Next.js", "Tailwind CSS", "Apple Pay", "Tabby SDK", "Arabic RTL"],
      link: "/portfolio"
    },
    {
      title: "Gulf Gourmet Wholesale: Scalable WooCommerce B2B Store",
      tag: "WooCommerce",
      sector: "Artisan Food & Beverage Distribution · Dubai Investment Park",
      challenge: "Managing 1,200+ food items and wholesale restaurant orders on a slow, generic WooCommerce theme that crashed during morning order peaks.",
      solution: "Re-engineered WooCommerce with a custom lightweight theme, Redis object caching, custom B2B tiered wholesale pricing plugin, Telr UAE payment gateway, and automated UAE VAT invoices.",
      metrics: "Server response time improved by 4x · Zero downtime during order surges · 65% faster checkout",
      techStack: ["WooCommerce", "WordPress", "Redis", "Telr UAE", "Custom B2B Plugin", "UAE FTA VAT"],
      link: "/portfolio"
    },
    {
      title: "SOUQ Fleet: Custom B2B Auto Spares & Machinery Marketplace",
      tag: "Custom Commerce",
      sector: "Industrial Equipment & Heavy Auto Parts · Sharjah & Dubai",
      challenge: "Wholesale buyers required custom quote negotiations, multi-supplier fulfillment, and credit term financing not supported by standard SaaS platforms.",
      solution: "Engineered a bespoke headless B2B marketplace using Next.js, Node.js, and PostgreSQL with real-time multi-vendor inventory feeds, CSV bulk ordering, and automated logistics dispatch.",
      metrics: "$4.2M gross merchandise volume processed in year one · 78% customer reorder rate",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe Connect", "Elasticsearch", "Aramex API"],
      link: "/portfolio"
    }
  ],
  processTitle: "Our E-Commerce Engineering Delivery Process",
  processSubtitle: "From platform selection and UI/UX design to peak-traffic launch and revenue scaling.",
  processSteps: [
    {
      number: "01",
      title: "Platform Evaluation & Strategy",
      desc: "We analyze your SKU count, order volume, transaction fee tolerance, and back-office systems to recommend Shopify, WooCommerce, or a custom store."
    },
    {
      number: "02",
      title: "Conversion UI/UX & Bilingual Prototyping",
      desc: "We design frictionless mobile-first buyer journeys with native Arabic RTL and English layouts, optimized for quick checkout and high average order value."
    },
    {
      number: "03",
      title: "Development, Gateway & ERP Integration",
      desc: "We build custom themes and modules, connecting local UAE payment gateways (Apple Pay, Tabby, Tamara) and two-way sync with ERPs and couriers."
    },
    {
      number: "04",
      title: "Load Testing, Security & Live Launch",
      desc: "We simulate 10,000+ concurrent shoppers to verify infrastructure resilience before peak campaigns, ensuring flawless stability and zero checkout glitches."
    }
  ],
  faqTitle: "Frequently Asked Questions About E-Commerce Development in Dubai",
  faqs: [
    {
      question: "Do you build on Shopify, WooCommerce, and custom platforms?",
      answer: "Yes. We actively develop across all three models: Shopify & Shopify Plus for brands wanting rapid scale and managed infrastructure; WooCommerce for businesses wanting complete data control with zero platform transaction fees; and bespoke custom stores (Next.js, Medusa.js, Node.js) for unique business models, high-volume B2B portals, and complex marketplaces."
    },
    {
      question: "How do I decide between Shopify, WooCommerce, and a custom store?",
      answer: "Choose Shopify if you want rapid time-to-market, minimal maintenance headache, and world-class checkout reliability out of the box. Choose WooCommerce if you already use WordPress, want total ownership of your customer database, and wish to avoid third-party recurring platform fees and revenue cuts. Choose a Custom Store if you have unique complex business logic (e.g., custom quotation engines, multi-vendor splits, deep legacy ERP synchronization) or require sub-second headless performance for massive catalogs."
    },
    {
      question: "Can you integrate local UAE and GCC payment gateways like Tabby, Tamara, and Apple Pay?",
      answer: "Yes. We integrate all major Middle East payment options including Apple Pay, Google Pay, Tabby, Tamara, Mada (Saudi Arabia), KNET (Kuwait), and payment processors such as Checkout.com, Network International, Telr, Stripe UAE, and PayTabs across Shopify, WooCommerce, and custom stores."
    },
    {
      question: "Do your e-commerce stores support native Arabic Right-to-Left (RTL)?",
      answer: "Yes. We provide native bilingual Arabic and English implementations. For Shopify, we build multi-language themes using Shopify Markets. For WooCommerce, we implement WPML or Polylang with bidirectional CSS mirroring. For custom stores, we build native RTL/LTR layout adapters with culturally tailored fonts."
    },
    {
      question: "Can you connect our online store to our warehouse ERP and physical POS in Dubai?",
      answer: "Yes. We engineer live two-way synchronization between your e-commerce platform and systems like SAP, Microsoft Dynamics, Odoo, Zoho Books, or physical retail POS systems so inventory, order status, and customer records update in real time."
    },
    {
      question: "Can you migrate our store from WooCommerce to Shopify or vice versa?",
      answer: "Yes. We handle seamless platform migrations with zero downtime, preserving all product SKUs, customer accounts, order histories, and SEO search rankings using comprehensive 301 redirect mapping."
    },
    {
      question: "How long does it take to develop an e-commerce store in Dubai?",
      answer: "A tailored Shopify or WooCommerce store typically launches within 4 to 6 weeks. Advanced Shopify Plus enterprise builds take 6 to 8 weeks. Comprehensive custom headless stores or multi-vendor marketplaces are delivered in 10 to 14 weeks with phased testing."
    }
  ]
};

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + "\n", "utf8");
console.log("Successfully updated ecommerce-marketplace-solutions with Shopify, WooCommerce, and Custom Stores!");

