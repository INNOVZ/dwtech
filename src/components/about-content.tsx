import { ArrowUpRight } from "@/components/icons";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/motion";
import { companyIdentity, locations, services, siteUrl } from "@/lib/site-data";
import { button, section, sectionLabel, shell } from "@/lib/styles";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/about#webpage`,
  url: `${siteUrl}/about`,
  name: "About DW Tech",
  description: companyIdentity.description,
  about: { "@id": `${siteUrl}/#organization` },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <main className="bg-night">
        <section className="relative min-h-[700px] bg-[radial-gradient(circle_at_78%_35%,rgba(176,99,255,.22),transparent_34%),#05040e] pt-[190px] pb-[110px] max-[620px]:min-h-0 max-[620px]:pt-[150px] max-[620px]:pb-[84px]">
          <div className={`${shell} relative z-[1]`}>
            <FadeIn>
              <p className={sectionLabel}>About DW Tech</p>
              <h1 className="mb-9 max-w-[1100px] text-[clamp(3rem,8vw,4.75rem)]">
                Technology Solutions built for the digital future
              </h1>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="max-w-[820px] text-[clamp(1rem,1.6vw,1rem)] leading-[1.6] text-[#bcb7c7]">
                {companyIdentity.description}
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div className="mt-10 flex flex-wrap items-center gap-5 max-[620px]:flex-col max-[620px]:items-stretch">
                <a
                  className="btn"
                  href="mailto:tech@thedesertwhales.com?subject=New%20project%20enquiry"
                >
                  Make an Enquiry <ArrowUpRight />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className={`${section} bg-mist text-ink`}>
          <div
            className={`${shell} grid grid-cols-[.8fr_1.2fr] gap-[8vw] max-[860px]:grid-cols-1`}
          >
            <FadeIn>
              <div>
                <h2 className="text-[clamp(3rem,5vw,5.6rem)]">
                  DW Tech by Desert Whales.
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="grid gap-6 text-[1.08rem] leading-[1.65] text-[#5d5867]">
                <p>
                  DW Tech is headquartered in Dubai, United Arab Emirates, and
                  is the technology and digital-transformation company with clients across the globe.
                </p>
                <p>
                  Our teams combine business strategy, product design,
                  full-stack engineering, AI automation, platform integration,
                  and cloud expertise. We work from business requirements to
                  implementation and ongoing optimization.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className={`${section} bg-white text-ink`}>
          <div className={shell}>
            <FadeIn>
              <p className={sectionLabel}>Where we operate</p>
              <h2 className="mb-14 max-w-[920px] text-[clamp(3rem,5vw,5.6rem)]">
                Close to clients across four markets.
              </h2>
            </FadeIn>
            <StaggerContainer
              as="dl"
              className="grid grid-cols-2 gap-x-12 max-[720px]:grid-cols-1"
              staggerDelay={0.08}
            >
              {locations.map(([location, role]) => (
                <StaggerItem
                  className="border-t border-black/15 py-6"
                  key={location}
                >
                  <dt className="text-[1.25rem] font-semibold">{location}</dt>
                  <dd className="mt-2 text-[#5d5867]">{role}</dd>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className={`${section} bg-mist text-ink`}>
          <div className={shell}>
            <FadeIn>
              <p className={sectionLabel}>Capabilities</p>
              <h2 className="mb-14 max-w-[920px] text-[clamp(3rem,5vw,5.6rem)]">
                Strategy, engineering, and experience working as one.
              </h2>
            </FadeIn>
            <StaggerContainer
              as="ul"
              className="m-0 grid list-none grid-cols-2 gap-x-12 p-0 max-[720px]:grid-cols-1"
              staggerDelay={0.06}
            >
              {services.map((service) => (
                <StaggerItem
                  as="li"
                  className="border-t border-black/15 py-5"
                  key={service.slug}
                >
                  <a
                    className="text-[1.18rem] font-medium"
                    href={`/services/${service.slug}`}
                  >
                    {service.title}
                  </a>
                  <p className="mt-2 leading-[1.55] text-[#5d5867]">
                    {service.short}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
    </>
  );
}
