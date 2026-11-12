import rawServicesData from "../data/services-detail.json";

export interface ServiceFeatureRow {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
}

export interface ShippedProject {
  title: string;
  tag: string;
  sector: string;
  challenge: string;
  solution: string;
  metrics: string;
  techStack: string[];
  link?: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetailData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroH1: string;
  heroSubtitle: string;
  statementQuote: string;
  statementAuthor: string;
  trustStats: { value: string; label: string }[];
  
  featureRowsTitle: string;
  featureRowsSubtitle: string;
  featureRows: ServiceFeatureRow[];

  caseStudiesTitle: string;
  caseStudies: ShippedProject[];

  processTitle: string;
  processSubtitle: string;
  processSteps: { number: string; title: string; desc: string }[];

  faqTitle: string;
  faqs: ServiceFaq[];
}

export const servicesDetailMap = rawServicesData as Record<string, ServiceDetailData>;

export function getServiceDetailData(
  slug: string,
  fallbackTitle: string = "Enterprise Technology",
  fallbackDescription: string = ""
): ServiceDetailData {
  if (servicesDetailMap[slug]) {
    return servicesDetailMap[slug];
  }

  // Check alias for ai-automation
  if (slug === "ai-automation" && servicesDetailMap["ai-automation-solutions"]) {
    return servicesDetailMap["ai-automation-solutions"];
  }

  // Check alias for whatsapp-automation
  if (slug === "whatsapp-automation" && servicesDetailMap["whatsapp-business-automation"]) {
    return servicesDetailMap["whatsapp-business-automation"];
  }

  // Check alias for web-applications-development -> web-development
  if (slug === "web-applications-development" && servicesDetailMap["web-development"]) {
    return servicesDetailMap["web-development"];
  }

  // Check alias for it-consulting-technology-strategy -> it-consulting
  if (slug === "it-consulting-technology-strategy" && servicesDetailMap["it-consulting"]) {
    return servicesDetailMap["it-consulting"];
  }

  // Graceful fallback for any unknown slug
  return fallbackDetail(slug, fallbackTitle, fallbackDescription);
}

/**
 * Client-side helper to fetch the services data directly from the public directory: /data/services-detail.json
 */
export async function fetchServiceDetailData(slug: string): Promise<ServiceDetailData | null> {
  if (typeof window !== "undefined") {
    try {
      const response = await fetch("/data/services-detail.json");
      if (response.ok) {
        const data: Record<string, ServiceDetailData> = await response.json();
        return data[slug] || null;
      }
    } catch (err) {
      console.error("Failed to fetch /data/services-detail.json:", err);
    }
  }
  return getServiceDetailData(slug);
}

function fallbackDetail(slug: string, fallbackTitle: string, fallbackDescription: string): ServiceDetailData {
  return {
    slug,
    metaTitle: `${fallbackTitle} Services Dubai | DW Tech`,
    metaDescription: fallbackDescription || `${fallbackTitle} solutions engineered in Dubai, UAE by Desert Whales Technologies for ambitious enterprises.`,
    badge: "Enterprise Practice",
    heroH1: `${fallbackTitle} for modern enterprise.`,
    heroSubtitle: fallbackDescription || "Modern engineering, dependable cloud software, and tailored solutions built around your business goals.",
    statementQuote: "Technology built around your workflows, not someone else's templates.",
    statementAuthor: "Desert Whales Technologies Engineering Philosophy",
    trustStats: [
      { value: "100%", label: "Source code & intellectual property ownership" },
      { value: "Sovereign", label: "UAE data residency & compliance" },
      { value: "< 4 wks", label: "Working proof-of-concept on your data" },
      { value: "24/7 SLA", label: "Enterprise production support & monitoring" },
    ],
    featureRowsTitle: "Core capabilities & technical deliverables",
    featureRowsSubtitle: "Customized solutions that enable your team to operate with maximum speed and clarity.",
    featureRows: [
      {
        title: "Tailored Architecture",
        tagline: "Systems engineered around your exact operational workflows",
        description: "We design and build systems that fit your precise operations, eliminating unnecessary complexity and unlocking real operational velocity.",
        tags: ["Custom Architecture", "High Concurrency", "Zero Bloat", "Full IP Ownership"],
      },
      {
        title: "Seamless Ecosystem Integration",
        tagline: "Connect legacy databases, modern APIs, and third-party tools",
        description: "Bridge disparate tools and databases into a unified, coherent data ecosystem that eliminates manual data entry and spreadsheet duplication.",
        tags: ["API Connectors", "Legacy Integration", "Automated Workflows", "Audit Logging"],
      },
      {
        title: "Enterprise Security & Sovereignty",
        tagline: "Compliant with UAE and regional data regulations",
        description: "Hardened infrastructure built following OWASP standards, role-based access control, and sovereign UAE cloud hosting adhering to Decree-Law No. 45.",
        tags: ["UAE Data Sovereignty", "Role-Based Access", "Encryption at Rest", "Automated QA"],
      },
    ],
    caseStudiesTitle: "Real client deployments & verified ROI.",
    caseStudies: [
      {
        title: "OmniFlow: Multi-Warehouse Logistics & Operations Platform",
        tag: "Enterprise System",
        sector: "GCC Supply Chain & Wholesale · Dubai, UAE",
        challenge: "Trading business suffered from fragmented software and manual reconciliation delays across regional operations.",
        solution: "Engineered a centralized operational platform integrating live data feeds, automated compliance, and real-time inventory management.",
        metrics: "68% faster fulfillment turnaround · 100% tax compliance · 12 facilities unified in one dashboard",
        techStack: ["Next.js", "PostgreSQL", "Kafka", "Cloud ERP", "Tailwind CSS"],
        link: "/portfolio",
      },
      {
        title: "ApexHealth: Multilingual Clinical Triage Platform",
        tag: "Intelligent Systems",
        sector: "Regional Healthcare Network · Dubai & Abu Dhabi",
        challenge: "Manual triage queues caused severe consultation delays and high operational overhead.",
        solution: "Deployed a secure, bilingual Arabic & English system connecting patient inquiries directly to clinical workflows and scheduling engines.",
        metrics: "85% reduction in triage wait time · 250,000+ interactions handled with 99.4% booking accuracy",
        techStack: ["FastAPI", "FHIR / HL7", "Bilingual NLP", "WhatsApp API"],
        link: "/portfolio",
      },
    ],
    processTitle: "From discovery to production scale.",
    processSubtitle: "A disciplined engineering lifecycle designed for transparency, speed, and dependable outcomes.",
    processSteps: [
      { number: "01", title: "Discovery & Opportunity Audit", desc: "We assess the operational problem, existing systems, security boundaries, and target business KPIs." },
      { number: "02", title: "Solution Design & Prototyping", desc: "We structure the data schema, API contracts, and user flows into validated interactive prototypes." },
      { number: "03", title: "Engineering & System Integration", desc: "Our engineers build the solution with automated tests, security checks, and connectors to your existing tools." },
      { number: "04", title: "Deployment & Ongoing Evolution", desc: "We deploy to production, train your team, hand over complete IP ownership, and provide continuous support." },
    ],
    faqTitle: "Questions? We have answers.",
    faqs: [
      {
        question: `How does DW Tech approach ${fallbackTitle.toLowerCase()} projects?`,
        answer: `We start with an in-depth operational and data audit to identify specific bottlenecks and measurable targets. We then engineer a solution tailored to your existing software stack and deploy it with comprehensive testing and ongoing support.`,
      },
      {
        question: "Can this integrate with our existing software and legacy tools?",
        answer: "Yes. We engineer secure API connectors and data pipelines that bridge modern solutions with your existing CRM, ERP, accounting, and database systems.",
      },
      {
        question: "Who owns the code and intellectual property upon project completion?",
        answer: "You do. 100% of the custom source code, documentation, architecture blueprints, and design assets belong entirely to your company.",
      },
      {
        question: "Where is DW Tech based, and do you serve clients outside Dubai?",
        answer: "DW Tech is headquartered in Dubai, UAE, with global delivery and engineering hubs in Riyadh (Saudi Arabia), Milan (Italy), and Kerala (India), serving enterprise clients worldwide.",
      },
    ],
  };
}
