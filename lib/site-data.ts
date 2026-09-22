export const siteUrl = "https://dwhalestech.com";

export const services = [
  {
    slug: "digital-business-transformation",
    title: "Digital business transformation",
    short: "Modernize operations and connect teams, data, and workflows around measurable business outcomes.",
    description: "We turn fragmented, manual operations into connected digital ecosystems. The work starts with your operating model and ends with scalable systems your teams can adopt and grow.",
    deliverables: ["Transformation roadmap", "Process and platform architecture", "Automation opportunities", "Adoption and optimization plan"],
  },
  {
    slug: "custom-software-development",
    title: "Custom software development",
    short: "Purpose-built web and software products shaped around real operational requirements.",
    description: "From internal tools to customer-facing platforms, we design and engineer dependable software around your workflows, integrations, users, and growth plans.",
    deliverables: ["Product discovery", "Solution architecture", "Full-stack engineering", "Quality assurance and release"],
  },
  {
    slug: "erp-crm-solutions",
    title: "ERP & CRM solutions",
    short: "Centralize sales, operations, inventory, finance, and customer relationships in one working system.",
    description: "We implement and tailor ERP and CRM ecosystems that improve visibility, reduce duplication, and give teams a consistent source of operational truth.",
    deliverables: ["Workflow mapping", "Platform configuration", "Data migration and integration", "Training and support"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile app development",
    short: "High-performance mobile experiences designed for the way customers and teams work.",
    description: "We create intuitive cross-platform and native-ready mobile products with secure integrations, reliable performance, and a clear release path.",
    deliverables: ["Experience design", "Mobile engineering", "API integration", "Store release support"],
  },
  {
    slug: "web-applications-portals",
    title: "Web applications & portals",
    short: "Secure dashboards, business portals, booking systems, and management applications.",
    description: "We build modern web applications that simplify complex work for customers, partners, administrators, and distributed teams.",
    deliverables: ["UX and interface design", "Frontend and backend development", "Role-based workflows", "Cloud deployment"],
  },
  {
    slug: "ai-automation-solutions",
    title: "AI & automation solutions",
    short: "Practical AI, assistants, and workflow automation embedded where they create business value.",
    description: "We identify repeatable work, connect the right data, and deploy governed AI and automation that improves speed without losing human oversight.",
    deliverables: ["AI opportunity assessment", "Workflow automation", "Knowledge assistants and chatbots", "Monitoring and iteration"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX design",
    short: "Clear, inclusive product experiences grounded in user needs and business goals.",
    description: "We turn complex requirements into coherent product flows, interface systems, and prototypes that teams can validate and engineers can build.",
    deliverables: ["User and stakeholder research", "Information architecture", "Interface and design systems", "Interactive prototypes"],
  },
  {
    slug: "cloud-based-solutions",
    title: "Cloud-based solutions",
    short: "Secure, scalable cloud foundations for applications, data, and distributed operations.",
    description: "We design and migrate cloud environments that balance speed, resilience, observability, security, and sustainable operating cost.",
    deliverables: ["Cloud architecture", "Application migration", "CI/CD and observability", "Security and cost optimization"],
  },
  {
    slug: "ecommerce-marketplace-solutions",
    title: "E-commerce & marketplace solutions",
    short: "Connected commerce platforms across storefront, payments, inventory, and operations.",
    description: "We create and integrate commerce experiences that keep the customer journey, catalog, orders, payments, and back-office operations in sync.",
    deliverables: ["Commerce experience design", "Shopify and custom development", "Marketplace and payment integrations", "Analytics and optimization"],
  },
  {
    slug: "it-consulting-technology-strategy",
    title: "IT consulting & technology strategy",
    short: "A practical technology roadmap aligned with business priorities, risk, and growth.",
    description: "We help leadership teams make clear technology decisions, sequence investments, assess platforms, and establish an execution model that can scale.",
    deliverables: ["Technology assessment", "Target architecture", "Vendor and platform evaluation", "Delivery roadmap"],
  },
] as const;

export const processSteps = [
  ["Discover", "Understand the business model, operations, pain points, and growth opportunities."],
  ["Strategize", "Build a focused digital-transformation roadmap and technology strategy."],
  ["Design & develop", "Create intuitive experiences and scalable technology solutions."],
  ["Integrate & automate", "Connect platforms, data, and intelligent workflows."],
  ["Optimize & scale", "Improve performance continuously with support, analytics, and iteration."],
] as const;

export const locations = [
  ["Dubai", "Global headquarters & Middle East operations"],
  ["Thiruvananthapuram", "Kerala operations & business support center"],
  ["Kozhikode", "Creative & technology operations hub"],
  ["Riyadh", "Regional expansion & business development"],
  ["Milan", "European business & creative collaboration network"],
] as const;

export const contacts = {
  email: "tech@thedesertwhales.com",
  website: "dwhalestech.com",
  phones: [
    ["UAE", "+971 52 867 8679"],
    ["Italy", "+39 33 9128 2519"],
    ["India", "+91 77 366 49722"],
  ],
} as const;
