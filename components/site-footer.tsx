import Link from "next/link";
import { Logo } from "@/components/logo";
import { Mail, Phone } from "@/components/icons";
import { contacts } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="footer" id="contact">
      <div className="shell">
        <div className="footer__lead">
          <div>
            <p className="section-label">Contact</p>
            <h2>Let’s build <span>what’s next.</span></h2>
          </div>
          <div className="footer__action">
            <p>Tell us where your business needs to go. We’ll help shape the technology to get there.</p>
            <Link className="button" href={`mailto:${contacts.email}?subject=New%20project%20enquiry`}>Start a conversation</Link>
          </div>
        </div>
        <div className="footer__meta">
          <Logo />
          <p className="footer__tagline">Technology for a more human tomorrow.</p>
          <div className="footer__contact">
            <a href={`mailto:${contacts.email}`}><Mail />{contacts.email}</a>
            {contacts.phones.map(([country, number]) => (
              <a key={country} href={`tel:${number.replace(/\s/g, "")}`}><Phone />{number} <span>{country}</span></a>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} DW Tech. A Desert Whales initiative.</p>
          <div>
            <Link href="/sitemap.xml">Sitemap</Link>
            <Link href="/llms.txt">AI information</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
