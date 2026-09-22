import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { ServiceList } from "@/components/service-list";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { locations, processSteps, services, siteUrl } from "@/lib/site-data";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: "DW Tech",
  alternateName: "Desert Whales Tech",
  url: siteUrl,
  email: "tech@thedesertwhales.com",
  description: "Technology and digital transformation company delivering custom software, AI automation, ERP and CRM, cloud, web, mobile, and consulting services.",
  parentOrganization: {
    "@type": "Organization",
    name: "Desert Whales Marketing Services LLC",
  },
  areaServed: ["United Arab Emirates", "India", "Saudi Arabia", "Italy"],
  telephone: ["+971528678679", "+393391282519", "+917736649722"],
  knowsAbout: services.map((service) => service.title),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does DW Tech do?",
      acceptedAnswer: { "@type": "Answer", text: "DW Tech plans, designs, builds, integrates, and supports custom software, AI automation, ERP and CRM platforms, mobile and web applications, cloud infrastructure, and digital transformation programs." },
    },
    {
      "@type": "Question",
      name: "Where does DW Tech operate?",
      acceptedAnswer: { "@type": "Answer", text: "DW Tech operates through teams and business networks in Dubai, Thiruvananthapuram, Kozhikode, Riyadh, and Milan." },
    },
    {
      "@type": "Question",
      name: "How does a DW Tech project begin?",
      acceptedAnswer: { "@type": "Answer", text: "Projects begin with discovery of the business model, workflows, pain points, users, and growth goals, followed by strategy, design and development, integration, and ongoing optimization." },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        <section className="hero">
          <SiteHeader />
          <div className="hero__stars" aria-hidden="true" />
          <div className="shell hero__grid">
            <div className="hero__copy">
              <h1>Technology that moves business <span>forward.</span></h1>
              <p>We design and build intelligent digital ecosystems that help businesses operate smarter, scale faster, and compete stronger.</p>
              <div className="hero__actions">
                <Link className="button" href="mailto:tech@thedesertwhales.com?subject=New%20project%20enquiry">Start a conversation <ArrowUpRight /></Link>
                <Link className="text-link" href="#services">Explore our expertise <ArrowRight /></Link>
              </div>
             
            </div>
            <div className="hero__visual" aria-label="A glass whale form representing intelligent, scalable technology">
              <Image src="/hero-whale.png" alt="" fill priority sizes="(max-width: 900px) 100vw, 58vw" />
              <p className="hero__visual-note hero__visual-note--top">People<br />Technology<br />A brighter tomorrow</p>
              <p className="hero__visual-note hero__visual-note--bottom">Ideas<br />Systems<br />Progress</p>
            </div>
          </div>
        </section>

        <section className="intro section" id="company">
          <div className="shell intro__grid">
            <p className="section-label">A Desert Whales initiative</p>
            <h2>Strategy, engineering, and experience — <span>working as one.</span></h2>
            <div className="intro__body">
              <p>DW Tech is the technology and digital-transformation vertical of Desert Whales Marketing Services LLC. We combine business strategy, product design, engineering, automation, and cloud expertise to solve real operational challenges.</p>
              <p>Our work is designed around the business: the way teams operate today, the experiences customers expect, and the systems growth will demand tomorrow.</p>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="services__orb" aria-hidden="true" />
          <div className="shell">
            <div className="section-heading section-heading--dark">
              <div>
                <p className="section-label">Expertise</p>
                <h2>What we build</h2>
              </div>
              <p>From strategy to scalable technology, we help businesses turn complex challenges into well-engineered solutions.</p>
            </div>
            <ServiceList />
          </div>
        </section>

        <section className="process section" id="approach">
          <div className="shell">
            <div className="section-heading section-heading--dark">
              <div>
                <p className="section-label">Our process</p>
                <h2>From discovery to scale</h2>
              </div>
              <p>A clear, collaborative path from business context to lasting performance.</p>
            </div>
            <ol className="process__rail">
              {processSteps.map(([title, description], index) => (
                <li key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="industries section" aria-labelledby="industries-title">
          <div className="shell industries__grid">
            <div>
              <p className="section-label">Cross-industry experience</p>
              <h2 id="industries-title">Technology shaped around how your industry works.</h2>
            </div>
            <ul>
              {[
                "Retail & e-commerce", "Healthcare & clinics", "Real estate", "Hospitality & travel",
                "Education", "Fashion & lifestyle", "Restaurants & cafés", "Beauty & wellness",
                "Manufacturing & trading", "Corporate & professional services",
              ].map((industry) => <li key={industry}>{industry}</li>)}
            </ul>
          </div>
        </section>

        <section className="presence section" aria-labelledby="presence-title">
          <div className="presence__orbit" aria-hidden="true"><i /><i /><i /><span>DW</span></div>
          <div className="shell presence__grid">
            <div>
              <p className="section-label">Global presence</p>
              <h2 id="presence-title">Built close to <span>your business.</span></h2>
              <p className="presence__intro">Different markets. A united mindset. Our teams work across regions to stay close to your goals, your customers, and what’s next.</p>
            </div>
            <dl className="locations">
              {locations.map(([city, role]) => (
                <div key={city}><dt>{city}</dt><dd>{role}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className="faq section" aria-labelledby="faq-title">
          <div className="shell faq__grid">
            <div>
              <p className="section-label">Common questions</p>
              <h2 id="faq-title">A technology partner from strategy through scale.</h2>
            </div>
            <div className="faq__items">
              <details open>
                <summary>What does DW Tech do?</summary>
                <p>We plan, design, build, integrate, and support custom software, AI automation, ERP and CRM platforms, mobile and web applications, cloud infrastructure, and digital transformation programs.</p>
              </details>
              <details>
                <summary>Who do you work with?</summary>
                <p>We work with growing businesses and established organizations that need practical technology to improve operations, customer experience, and scale.</p>
              </details>
              <details>
                <summary>How does a project begin?</summary>
                <p>We start by understanding your business model, workflows, users, current systems, constraints, and growth goals. That context shapes the roadmap and technical approach.</p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
