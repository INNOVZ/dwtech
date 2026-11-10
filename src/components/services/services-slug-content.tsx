import { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { ChevronDown, Check } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/motion";
import { services, siteUrl, companyIdentity, contacts } from "@/lib/site-data";
import {
  getServiceDetailData,
  type ServiceDetailData,
} from "@/lib/services-detail-data";
import { section, sectionLabel, shell } from "@/lib/styles";

type Props = {
  params: { slug: string };
  initialDetail?: ServiceDetailData;
};

// Helper to map each service/solution slug to its contextually apt banner image
const getBannerForSlug = (slug: string): string => {
  const s = slug.toLowerCase();
  if (s.includes("ai") || s.includes("chatbot") || s.includes("whatsapp") || s.includes("rag")) {
    return "/banners/ai-solutions-banner.webp";
  }
  if (
    s.includes("cloud") ||
    s.includes("devops") ||
    s.includes("cicd") ||
    s.includes("infrastructure") ||
    s.includes("reliability") ||
    s.includes("security")
  ) {
    return "/banners/cloud-devops-banner.webp";
  }
  if (s.includes("ecommerce") || s.includes("marketplace")) {
    return "/banners/ecommerce-banner.webp";
  }
  if (
    s.includes("erp") ||
    s.includes("crm") ||
    s.includes("transformation") ||
    s.includes("consulting")
  ) {
    return "/banners/enterprise-erp-banner.webp";
  }
  if (
    s.includes("design") ||
    s.includes("ui-ux") ||
    s.includes("prototyping") ||
    s.includes("product")
  ) {
    return "/banners/ui-ux-design-banner.webp";
  }
  if (
    s.includes("web") ||
    s.includes("software") ||
    s.includes("saas") ||
    s.includes("mobile")
  ) {
    return "/banners/web-development-banner.webp";
  }
  return "/banners/services-banner.webp";
};

export default function ServicePage({ params, initialDetail }: Props) {
  const { slug } = params;
  const service = services.find(
    (item) =>
      item.slug === slug ||
      (slug === "ai-automation" && item.slug === "ai-automation-solutions"),
  );

  const fallbackTitle = service?.title || "Enterprise Technology";
  const fallbackDescription = service?.description || "";

  // Initialize with initialDetail passed from SSR/SSG, or fallback
  const [detail, setDetail] = useState<ServiceDetailData>(
    initialDetail ||
      getServiceDetailData(slug, fallbackTitle, fallbackDescription),
  );

  // If initialDetail is already provided by SSR, avoid redundant network fetch
  useEffect(() => {
    if (initialDetail) return;
    fetch("/data/services-detail.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: Record<string, ServiceDetailData>) => {
        if (data[slug]) {
          setDetail(data[slug]);
        } else if (
          slug === "ai-automation" &&
          data["ai-automation-solutions"]
        ) {
          setDetail(data["ai-automation-solutions"]);
        } else if (
          slug === "web-applications-development" &&
          data["web-development"]
        ) {
          setDetail(data["web-development"]);
        } else if (
          slug === "it-consulting-technology-strategy" &&
          data["it-consulting"]
        ) {
          setDetail(data["it-consulting"]);
        }
      })
      .catch((err) => {
        console.warn("Using bundled services detail data:", err);
      });
  }, [slug]);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const primaryPhone = contacts.phones[0]?.[1] || "+971 52 867 8679";
  const cleanPhone = primaryPhone.replace(/\s/g, "");

  // Helper to highlight the last word with text-orchid (matching About/Portfolio hero headings)
  const renderHeroHeading = (headline: string) => {
    const words = headline.trim().split(" ");
    if (words.length <= 1) return headline;
    const lastWord = words.pop();
    return (
      <>
        {words.join(" ")} <span className="text-orchid">{lastWord}</span>
      </>
    );
  };

  // Schema.org Structured Data: Service + FAQPage
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/${detail.slug}`,
    name: detail.heroH1,
    description: detail.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: companyIdentity.name,
      url: siteUrl,
      telephone: cleanPhone,
      email: contacts.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: companyIdentity.headquarters.city,
        addressCountry: companyIdentity.headquarters.countryCode,
      },
    },
    areaServed: [
      "Dubai",
      "United Arab Emirates",
      "Saudi Arabia",
      "Italy",
      "India",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-night text-white overflow-hidden">
        {/* ── 1. Hero Section (Matches About & Portfolio UI/UX) ── */}
        <section className="relative min-h-[650px] overflow-hidden pt-[190px] pb-[100px] max-[620px]:min-h-0 max-[620px]:pt-[150px] max-[620px]:pb-[70px]">
          {/* Banner image under the 90% black banner */}
          <div className="absolute inset-0 z-0">
            <img
              src={getBannerForSlug(detail.slug)}
              alt=""
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>

          {/* Solid black banner area with 90% opacity (no gradients) */}
          <div
            className="absolute inset-0 z-[1] bg-black/90 pointer-events-none"
            aria-hidden="true"
          />

          <div className={`${shell} relative z-[2]`}>
            {/* Breadcrumb nav */}

            <FadeIn delay={0.08}>
              <h1 className="mb-8 max-w-[1100px] text-[clamp(3.7rem,5vw,6rem)] leading-[0.98] tracking-tight">
                {renderHeroHeading(detail.heroH1)}
              </h1>
            </FadeIn>

            <FadeIn delay={0.14}>
              <p className="max-w-[820px] text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.65] text-[#cfcad8] mb-10">
                {detail.heroSubtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-wrap items-center gap-5 mb-14 max-[620px]:flex-col max-[620px]:items-stretch">
                <a className="btn" href="/contact">
                  Make an Enquiry <ArrowUpRight />
                </a>
              </div>
            </FadeIn>

            {/* Impact Numbers / Trust Metrics (Exact layout as Portfolio page) */}
            <FadeIn delay={0.26}>
              <div className="grid grid-cols-4 gap-6 border-t border-white/15 pt-8 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1">
                {detail.trustStats.map((stat) => (
                  <div key={stat.label}>
                    <span className="text-2xl lg:text-3xl font-bold text-white">
                      {stat.value}
                    </span>
                    <p className="mt-1 text-xs text-[#9d97a9] leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── 2. Practice Overview & Statement (Matches About Section 2: bg-mist text-ink) ── */}
        <section className={`${section} bg-mist text-ink`}>
          <div
            className={`${shell} grid grid-cols-[.8fr_1.2fr] gap-[8vw] max-[860px]:grid-cols-1`}
          >
            <FadeIn>
              <div>
                <h2 className="text-[clamp(2.8rem,4.5vw,5.2rem)] leading-tight">
                  {detail.statementQuote ||
                    "Engineered for real-world business return."}
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="grid gap-6 text-[1.08rem] leading-[1.65] text-[#5d5867]">
                <p>
                  {fallbackTitle} at DW Tech is designed around concrete
                  operational outcomes. We combine strategic business discovery,
                  robust software engineering, scalable cloud infrastructure,
                  and localized compliance to help ambitious organizations scale
                  across Dubai, the GCC, and international markets.
                </p>
                <p>
                  We move away from rigid boilerplate software and generic
                  templates. Every system is built to fit your precise
                  workflows, integrate securely with your existing tools, and
                  scale seamlessly under demanding enterprise workloads.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── 3. Core Capabilities & Deliverables (Matches About Section 3: bg-white text-ink) ── */}
        <section className={`${section} bg-white text-ink`}>
          <div className={shell}>
            <FadeIn>
              <h2 className="mb-14 max-w-[920px] text-[clamp(2.5rem,4.5vw,4.5rem)]">
                {detail.featureRowsTitle ||
                  "Core capabilities & technical deliverables."}
              </h2>
            </FadeIn>

            <StaggerContainer
              as="div"
              className="divide-y divide-black/15"
              staggerDelay={0.08}
            >
              {detail.featureRows.map((feature, idx) => (
                <StaggerItem
                  key={feature.title}
                  className="py-9 grid grid-cols-[minmax(240px,0.4fr)_1fr] gap-8 max-[820px]:grid-cols-1"
                >
                  <div>
                    <h3 className="text-[1.45rem] font-semibold text-ink mt-2 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#7a7486] font-medium m-0">
                      {feature.tagline}
                    </p>
                  </div>
                  <div>
                    <p className="text-[1.05rem] leading-[1.65] text-[#5d5867] mb-5">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-black/[0.04] border border-black/5 px-3 py-1 text-xs font-medium text-[#494452]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── 4. Delivery Framework (Matches About & Homepage Lifecycle: bg-mist text-ink) ── */}
        <section className={`${section} bg-mist text-ink`}>
          <div className={shell}>
            <FadeIn>
              <h2 className="mb-14 max-w-[920px] text-[clamp(2.5rem,4.5vw,4.5rem)]">
                {detail.processTitle || "From discovery to production scale."}
              </h2>
            </FadeIn>

            <StaggerContainer
              as="ol"
              className="m-0 grid list-none grid-cols-4 gap-8 p-0 max-[1020px]:grid-cols-2 max-[620px]:grid-cols-1"
              staggerDelay={0.08}
            >
              {detail.processSteps.map((step) => (
                <StaggerItem
                  as="li"
                  key={step.number}
                  className="border-t border-black/15 pt-6"
                >
                  <span className="text-2xl font-light text-orchid">
                    {step.number}
                  </span>
                  <h3 className="mt-4 mb-2 text-[1.25rem] font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-[1.6] text-[#5d5867]">
                    {step.desc}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── 5. Client Case Deployments (Matches Portfolio Page Cards: bg-white text-ink) ── */}
        <section className={`${section} bg-white text-ink`}>
          <div className={shell}>
            <FadeIn>
              <div className="flex items-end justify-between gap-6 max-[700px]:flex-col max-[700px]:items-start">
                <div>
                  <h2 className="max-w-[750px] text-[clamp(2.5rem,4.5vw,4.5rem)] m-0">
                    {detail.caseStudiesTitle ||
                      "Real client deployments & verified ROI."}
                  </h2>
                </div>
                <a
                  href="/portfolio"
                  className="text-sm font-semibold text-orchid hover:underline inline-flex items-center gap-1.5 shrink-0"
                >
                  View full portfolio <ArrowUpRight />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── 6. Frequently Asked Questions (Matches About & Homepage FAQ: bg-mist text-ink) ── */}
        <section className={`${section} bg-mist text-ink`}>
          <div className={shell}>
            <div className="grid grid-cols-[.7fr_1.3fr] gap-[8vw] max-[860px]:grid-cols-1">
              <FadeIn>
                <div>
                  <h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] leading-tight">
                    {detail.faqTitle || "Questions? We have answers."}
                  </h2>
                  <p className="text-base text-[#5d5867] mt-4 leading-relaxed">
                    Direct insights into our architecture standards, regional
                    compliance, and delivery timeline.
                  </p>
                </div>
              </FadeIn>

              <div className="divide-y divide-black/15">
                {detail.faqs.map((faq, idx) => (
                  <div key={faq.question} className="py-6">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left flex items-center justify-between gap-4 cursor-pointer group"
                      aria-expanded={openFaq === idx}
                    >
                      <h3 className="text-lg lg:text-xl font-semibold text-ink group-hover:text-orchid transition-colors m-0">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`size-5 text-orchid shrink-0 transition-transform duration-300 ${
                          openFaq === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <p className="mt-4 text-base leading-relaxed text-[#5d5867]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
