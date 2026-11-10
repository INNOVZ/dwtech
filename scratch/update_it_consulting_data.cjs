const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../src/data/services-detail.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const itConsultingData = {
  slug: "it-consulting",
  metaTitle: "IT Consulting Company in Dubai, UAE | Technology Strategy | Desert Whales Technologies",
  metaDescription: "Premier IT consulting company in Dubai, UAE. We advise enterprises on software architecture, cloud FinOps, vendor audits, legacy modernization, and IT strategy.",
  badge: "Enterprise IT Consulting",
  heroH1: "Strategic IT Consulting & Technology Advisory in Dubai.",
  heroSubtitle: "We advise C-suite executives, boards, and enterprise leadership across Dubai, Abu Dhabi, and the GCC on software architecture, IT cost rationalization, vendor selection, legacy modernization, and digital transformation roadmaps.",
  statementQuote: "We don't deliver generic PowerPoint decks. We provide pragmatic, battle-tested IT roadmaps designed by veteran engineers to eliminate technical debt and drive measurable ROI.",
  statementAuthor: "Desert Whales Technologies Technology Advisory Practice | Dubai, UAE",
  trustStats: [
    { value: "35%–50%", label: "Average cloud & software licensing cost reduction" },
    { value: "Zero", label: "Vendor bias or software reseller kickbacks" },
    { value: "100%", label: "Actionable engineering blueprints & execution roadmaps" },
    { value: "DIFC / ADGM", label: "Full compliance with UAE governance & PDPL standards" }
  ],
  featureRowsTitle: "How We Advise Enterprises in Dubai & the GCC",
  featureRowsSubtitle: "Unbiased, senior engineering expertise that aligns technology spend with strategic business growth.",
  featureRows: [
    {
      title: "Enterprise Architecture & Modernization Roadmaps",
      tagline: "Eliminate technical debt and prevent catastrophic rewrites",
      description: "We conduct exhaustive audits of your existing software systems, monoliths, and data flows. We define pragmatic 3-to-5-year target architectures that transition legacy systems to scalable microservices, serverless workloads, or modern modular backends without business disruption.",
      tags: ["Target Architecture", "Tech Debt Audit", "Microservices Strategy", "Legacy Migration"]
    },
    {
      title: "Software Vendor Evaluation & Contract Negotiation",
      tagline: "Unbiased platform audits with zero vendor commissions",
      description: "We represent your leadership during vendor RFP processes, software bake-offs, and enterprise licensing negotiations. We review scope of work contracts, audit proposed architectures, and eliminate predatory vendor lock-in and unnecessary software subscription tiers.",
      tags: ["Vendor Evaluation", "RFP Management", "SLA Negotiation", "Zero Vendor Kickbacks"]
    },
    {
      title: "Cloud FinOps & Infrastructure Cost Optimization",
      tagline: "Rationalize AWS, Azure, GCP, and local cloud expenditure",
      description: "Most UAE enterprises overpay for cloud hosting by 40% or more. Our cloud FinOps specialists analyze utilization metrics, eliminate idle instances, implement automated container scaling, and configure reserved commitments to permanently slash recurring monthly cloud burn.",
      tags: ["AWS FinOps", "Azure Cost Audit", "Container Scaling", "Resource Optimization"]
    },
    {
      title: "UAE Regulatory Compliance & Cyber-Resilience",
      tagline: "Bank-grade data protection aligned with UAE Federal Decree-Law No. 45",
      description: "We evaluate your organization's data architecture against UAE Personal Data Protection Law (PDPL Federal Decree-Law No. 45), TDRA guidelines, and regional financial sector standards (DIFC, ADGM). We establish data residency protocols, incident response plans, and zero-trust security postures.",
      tags: ["UAE Law 45 Compliant", "TDRA Alignment", "Sovereign Data Residency", "Zero-Trust IAM"]
    }
  ],
  caseStudiesTitle: "Delivered IT Consulting Advisory & Verified ROI",
  caseStudies: [
    {
      title: "Atlas Equity: Technical Due Diligence for $40M SaaS Acquisition",
      tag: "M&A Advisory",
      sector: "Private Equity Firm · DIFC, Dubai, UAE",
      challenge: "A private equity firm required an urgent 10-day technical due diligence audit on a regional logistics SaaS acquisition target prior to capital deployment.",
      solution: "Audited 180,000 lines of codebase, evaluated cloud hosting architecture, stress-tested security boundaries, and reviewed software license liabilities.",
      metrics: "Uncovered critical database scaling bottleneck, saving $2.5M in renegotiated transaction valuation",
      techStack: ["Code Auditing", "AWS Architecture Review", "Security Analysis", "Compliance Matrix"],
      link: "/portfolio"
    },
    {
      title: "Emirates Logistics Conglomerate: Cloud Consolidation & Cost Optimization",
      tag: "FinOps Strategy",
      sector: "Supply Chain & Warehousing · JAFZA, Dubai",
      challenge: "Over-provisioned AWS and on-premise infrastructure was burning $85,000 monthly with low server utilization and zero auto-scaling.",
      solution: "Restructured cloud infrastructure, containerized legacy servers, and introduced spot instance automation and reserved capacity policies.",
      metrics: "44% recurring monthly cloud cost reduction ($450,000+ annual run-rate savings)",
      techStack: ["AWS FinOps", "Terraform", "Kubernetes", "Cost Telemetry", "Datadog"],
      link: "/portfolio"
    },
    {
      title: "GCC Retail Group: Legacy ERP & Tech Modernization Strategy",
      tag: "IT Architecture",
      sector: "Multi-Store Retail & Wholesale · Business Bay, Dubai",
      challenge: "Fragmented legacy ERP databases and unpatched POS integrations caused 48-hour inventory reconciliation delays across 35 retail outlets.",
      solution: "Engineered a phased modernization blueprint replacing legacy custom code with an event-driven Kafka middleware and centralized real-time inventory API.",
      metrics: "Reconciliation time cut from 48 hours to under 2 seconds; eliminated $320,000 in redundant third-party software subscriptions",
      techStack: ["Enterprise Architecture", "Kafka", "PostgreSQL", "API Gateway", "FinOps Audit"],
      link: "/portfolio"
    }
  ],
  processTitle: "Our Strategic IT Advisory Framework",
  processSubtitle: "A disciplined, four-phase consulting engagement focused on transparency, technical rigor, and bottom-line impact.",
  processSteps: [
    {
      number: "01",
      title: "Operational & Stack Assessment",
      desc: "We interview engineering and executive leaders, audit source code repositories, review cloud billing statements, and inspect architectural diagrams."
    },
    {
      number: "02",
      title: "Gap Analysis & Risk Matrix",
      desc: "We benchmark your infrastructure against industry leaders, identifying technical debt, vendor lock-in vulnerabilities, and regulatory compliance gaps."
    },
    {
      number: "03",
      title: "Target Architecture & Strategic Roadmap",
      desc: "We deliver comprehensive technical blueprints, RFP evaluation scorecards, and phased implementation schedules ready for engineering execution."
    },
    {
      number: "04",
      title: "Execution Governance & Fractional CTO",
      desc: "We provide executive oversight, reviewing contractor delivery sprints, stress-testing delivered milestones, and enforcing strict vendor SLAs."
    }
  ],
  faqTitle: "Frequently Asked Questions About IT Consulting in Dubai, UAE",
  faqs: [
    {
      question: "Why should enterprises in Dubai hire Desert Whales Technologies for IT consulting?",
      answer: "Desert Whales Technologies is an engineering-first consultancy, not a generic PowerPoint advisory firm. Our consultants are senior software architects and cloud engineers who actively build production systems. We maintain strict independence with zero software reseller commissions, providing unbiased advice that aligns technology investment with measurable business ROI."
    },
    {
      question: "How much do IT consulting services cost in Dubai, UAE?",
      answer: "Our IT consulting engagements are structured around clear deliverables and milestone-based fixed fees or dedicated monthly advisory retainers. Focused technical audits (such as M&A Technical Due Diligence or Cloud FinOps Audits) typically range from AED 25,000 to AED 60,000. Comprehensive enterprise architecture roadmaps and Fractional CTO advisory retainers range from AED 35,000 to AED 75,000 per month."
    },
    {
      question: "What is the difference between a general management consultancy and your technical IT advisory?",
      answer: "Traditional management consultancies provide high-level theoretical frameworks but rarely inspect code, review database query plans, or evaluate cloud infrastructure configs. We audit actual codebases, simulate server loads, analyze cloud network architectures, and deliver actionable blueprints that internal developers or external vendors can execute immediately."
    },
    {
      question: "Do you offer Fractional CTO / CIO advisory services in Dubai?",
      answer: "Yes. For high-growth startups and mid-market GCC enterprises that need senior technical leadership without the cost of a full-time executive, we provide Fractional CTO services. We lead architecture strategy, manage vendor tenders, conduct technical hiring interviews, and represent technology to investors and board members."
    },
    {
      question: "Can you help reduce our cloud hosting (AWS / Azure) and enterprise software licensing costs?",
      answer: "Yes. In 90% of our enterprise audits, we identify 30% to 50% in recurring savings by eliminating oversized cloud compute instances, transitioning to spot and reserved pricing, containerizing legacy VMs, and renegotiating bloated enterprise software licenses."
    },
    {
      question: "How do you ensure IT compliance with UAE Data Protection Law (Federal Decree-Law No. 45)?",
      answer: "We perform comprehensive data residency and governance audits to verify that personal customer and employee data remains within sovereign UAE data centers (such as AWS UAE or Microsoft Azure UAE North) and that access controls, encryption standards, and consent management meet Federal Decree-Law No. 45 requirements."
    },
    {
      question: "Can you evaluate potential technology acquisitions (Technical Due Diligence) in the UAE / GCC?",
      answer: "Yes. We regularly conduct technical due diligence for private equity funds, family offices, and venture capital firms in DIFC and ADGM. We inspect codebase scalability, security vulnerabilities, open-source license compliance, intellectual property provenance, and true cloud operating costs."
    }
  ]
};

// Set "it-consulting" and update "it-consulting-technology-strategy"
data["it-consulting"] = itConsultingData;
data["it-consulting-technology-strategy"] = {
  ...itConsultingData,
  slug: "it-consulting-technology-strategy"
};

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + "\n", "utf8");
console.log("Successfully added it-consulting and updated it-consulting-technology-strategy in services-detail.json!");

