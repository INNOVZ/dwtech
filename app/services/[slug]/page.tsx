import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services, siteUrl } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: `${service.title} | DW Tech`, description: service.description, url: `${siteUrl}/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "ProfessionalService", name: "DW Tech", url: siteUrl },
    areaServed: ["United Arab Emirates", "India", "Saudi Arabia", "Italy"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <main className="service-page">
        <section className="service-page__hero">
          <SiteHeader />
          <div className="shell">
            <Link className="service-page__back" href="/#services"><ArrowRight /> All expertise</Link>
            <p className="section-label">DW Tech expertise</p>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <Link className="button" href="mailto:tech@thedesertwhales.com?subject=New%20project%20enquiry">Discuss your project <ArrowUpRight /></Link>
          </div>
        </section>
        <section className="service-page__details section">
          <div className="shell service-page__grid">
            <div>
              <p className="section-label">What we deliver</p>
              <h2>From a clear business case to a solution your team can run.</h2>
            </div>
            <ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
