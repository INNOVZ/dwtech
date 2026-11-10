const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../src/data/services-detail.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const webDevData = {
  slug: "web-development",
  metaTitle: "Web Development Company Dubai, UAE | Custom Web Applications | Desert Whales Technologies",
  metaDescription: "Desert Whales Technologies is a premier custom web development company in Dubai, UAE. We engineer high-speed, secure web applications, portals, and platforms with 100% IP ownership.",
  badge: "Enterprise Web Development",
  heroH1: "Custom Web Development & Enterprise Web Applications in Dubai.",
  heroSubtitle: "We design and engineer mission-critical web applications, high-throughput client portals, and cloud-native digital platforms for UAE enterprises, high-growth startups, and government entities across Dubai, Abu Dhabi, and the GCC.",
  statementQuote: "We don't build generic template websites. We architect custom, high-velocity web platforms that automate operations, scale seamlessly, and remain your sovereign intellectual property forever.",
  statementAuthor: "Desert Whales Technologies Web Engineering Team | Dubai, UAE",
  trustStats: [
    { value: "100%", label: "Source code & IP ownership" },
    { value: "< 1.2s", label: "Average LCP Core Web Vitals" },
    { value: "100% PDPL", label: "UAE Federal Decree-Law No. 45 Compliant" },
    { value: "99.99%", label: "High-Availability Production SLA" }
  ],
  featureRowsTitle: "Full-Lifecycle Web Development Services in Dubai, UAE",
  featureRowsSubtitle: "Engineering robust, high-performance web solutions built on modern tech stacks tailored to the Middle Eastern market.",
  featureRows: [
    {
      title: "Custom Enterprise Web Applications & Portals",
      tagline: "Scalable role-based platforms replacing spreadsheets and clunky legacy software",
      description: "We engineer bespoke enterprise web applications designed around your exact business logic. From multi-tiered internal operations dashboards to external vendor and customer self-service portals, our systems feature granular role-based access control (RBAC), multi-tenant data isolation, automated reporting pipelines, and zero third-party licensing lock-in.",
      tags: ["React & Next.js", "Enterprise RBAC", "Multi-Tenant Portals", "Real-Time Telemetry"]
    },
    {
      title: "Bilingual Arabic & English (RTL/LTR) Web Experiences",
      tagline: "Culturally accurate, high-converting digital interfaces engineered for the GCC",
      description: "Creating high-converting bilingual web experiences in Dubai requires more than simple text translation. We build native Right-to-Left (RTL) Arabic typography, bidirectional CSS layout mirroring, localized date/calendar pickers (Hijri and Gregorian), and contextual UI flows that engage Emirati and regional GCC audiences seamlessly.",
      tags: ["Native Arabic RTL", "Bidirectional CSS", "Hijri/Gregorian UI", "GCC Cultural UX"]
    },
    {
      title: "High-Speed Microservices & API Architecture",
      tagline: "Cloud-native backends capable of handling peak commercial traffic with zero latency",
      description: "We build resilient REST and GraphQL microservices backends using Node.js, Go, Python, and PostgreSQL, cached through distributed Redis clusters. Designed to handle intense traffic spikes during White Friday and Ramadan campaigns, our architectures scale horizontally with sub-second response times across distributed UAE cloud nodes.",
      tags: ["Node.js & Go", "GraphQL & REST", "Redis Caching", "Sub-Second Latency"]
    },
    {
      title: "UAE Data Residency & Enterprise Security Hardening",
      tagline: "Bank-grade security compliant with UAE Federal Decree-Law No. 45",
      description: "All web solutions are architected to meet strict UAE regulatory compliance, including the UAE Personal Data Protection Law (PDPL Federal Decree-Law No. 45) and TDRA standards. We implement zero-trust security postures, end-to-end encryption in transit and at rest, multi-factor authentication (MFA), UAE Pass authentication readiness, and deployment to local sovereign cloud regions (AWS UAE, Azure UAE, or on-premise private cloud).",
      tags: ["UAE Law 45 Compliant", "UAE Pass Integration", "Local Data Residency", "Zero-Trust IAM"]
    }
  ],
  caseStudiesTitle: "Delivered Web Platforms Across Dubai & the GCC",
  caseStudies: [
    {
      title: "Omnichannel B2B Trade & Distribution Portal",
      tag: "Enterprise B2B Web App",
      sector: "Wholesale & FMCG Distribution (Dubai, UAE)",
      challenge: "A prominent Dubai distributor struggled with 4,500+ commercial client orders placed over WhatsApp and email, causing manual order entry errors and stock synchronization delays.",
      solution: "Engineered a bespoke Next.js and Node.js ordering portal with real-time ERP inventory sync, tiered pricing matrix, Arabic/English toggle, and automated tax invoicing compliant with UAE FTA.",
      metrics: "74% reduction in order processing overhead; 100% elimination of inventory overselling",
      techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis"]
    },
    {
      title: "High-Volume Real Estate Leasing & Tenant Portal",
      tag: "PropTech Web Platform",
      sector: "Commercial & Luxury Real Estate (Dubai Marina & Downtown)",
      challenge: "Prospective tenants and property managers experienced 10-day turnaround times for tenancy contract approvals, manual ID verification, and cheque collection.",
      solution: "Built an interactive web app with instant digital KYC, Ejari-compliant lease generation, online card/Apple Pay deposits via local UAE payment gateway, and tenant maintenance ticketing.",
      metrics: "Average lease execution time shortened from 10 days to under 4 hours; 92% tenant adoption",
      techStack: ["React", "FastAPI", "PostgreSQL", "Checkout.com UAE", "Docker", "AWS UAE"]
    }
  ],
  processTitle: "Our Proven Web Development Methodology",
  processSubtitle: "From architectural discovery in Dubai to rapid agile deployment and sovereign handover.",
  processSteps: [
    {
      number: "01",
      title: "Strategic Discovery & Technical Blueprinting",
      desc: "We analyze your business workflows, user personas, integration endpoints, and compliance requirements in Dubai to deliver an exhaustive architecture specification and project roadmap."
    },
    {
      number: "02",
      title: "Bilingual UI/UX Design & Clickable Prototyping",
      desc: "We craft intuitive, high-fidelity responsive prototypes in Figma covering both English LTR and Arabic RTL layouts, conducting stakeholder usability reviews before writing code."
    },
    {
      number: "03",
      title: "Full-Stack Agile Sprints & Automated QA",
      desc: "We develop in transparent 2-week agile sprints with bi-weekly live staging demos, comprehensive automated unit/E2E test suites, and strict Core Web Vitals performance benchmarks."
    },
    {
      number: "04",
      title: "Security Audit, UAE Cloud Deployment & Handover",
      desc: "We execute OWASP vulnerability penetration testing, configure production CI/CD pipelines to your sovereign UAE cloud host, and transfer 100% of the repository, IP, and documentation."
    }
  ],
  faqTitle: "Frequently Asked Questions About Web Development in Dubai, UAE",
  faqs: [
    {
      question: "Why should businesses in Dubai choose Desert Whales Technologies for web development?",
      answer: "Desert Whales Technologies provides custom, enterprise-grade engineering rather than generic agency templates or locked CMS builders. Clients receive 100% source code and intellectual property ownership, sub-second page performance, native bilingual Arabic/English interfaces, and architecture built strictly in compliance with UAE data residency and Federal Decree-Law No. 45 regulations."
    },
    {
      question: "How much does custom web development cost in Dubai, UAE?",
      answer: "The cost of custom web development in Dubai depends on application complexity, required third-party integrations, and compliance scopes. Focused MVP web applications typically range from AED 35,000 to AED 75,000, while complex enterprise platforms, multi-vendor marketplaces, or custom ERP portals range from AED 85,000 to AED 220,000+. We provide fixed-scope milestones and transparent sprint pricing with zero recurring licensing fees."
    },
    {
      question: "What is the typical timeline to build and launch a custom web application?",
      answer: "A focused custom web application or MVP is typically delivered within 6 to 8 weeks. Larger enterprise platforms with complex database workflows, bilingual RTL/LTR modules, and external API integrations are delivered across phased 12 to 16 week milestones, with live functional builds demonstrated every two weeks."
    },
    {
      question: "Do you support native Arabic Right-to-Left (RTL) web development?",
      answer: "Yes. Every web application we engineer can be fully localized for both English (LTR) and Arabic (RTL). This includes bidirectional CSS layout mirroring, high-quality Arabic web typography, culturally attuned imagery, and localized date, currency (AED, SAR), and telephone formatting."
    },
    {
      question: "Who owns the code, design, and intellectual property upon completion?",
      answer: "You do. 100% of all custom source code, database architectures, Git repositories, Figma design files, and documentation belong exclusively to your company from day one. Desert Whales Technologies operates with a strict zero vendor lock-in guarantee."
    },
    {
      question: "Where is our web application hosted and is it compliant with UAE Data Protection laws?",
      answer: "We deploy your web application directly into your preferred cloud environment—including sovereign UAE data centers such as AWS Middle East (UAE), Microsoft Azure UAE North (Dubai), or local on-premise servers. This ensures strict compliance with UAE Federal Decree-Law No. 45 on Personal Data Protection (PDPL)."
    },
    {
      question: "Which technology stack do you use for modern web development?",
      answer: "Our primary web development stack includes Next.js, React, TypeScript, and Tailwind CSS for lightning-fast frontend interfaces, paired with Node.js, Go, or Python (FastAPI) backends and PostgreSQL or MongoDB databases. For caching and background jobs, we leverage Redis and BullMQ, orchestrated via Docker and Kubernetes on modern cloud infrastructure."
    }
  ]
};

// Set both "web-development" and backward-compatible alias "web-applications-development"
data["web-development"] = webDevData;
data["web-applications-development"] = {
  ...webDevData,
  slug: "web-applications-development"
};

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + "\n", "utf8");
console.log("Updated services-detail.json with web-development and alias web-applications-development!");

