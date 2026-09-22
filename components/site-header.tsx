"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Close, Menu } from "@/components/icons";
import { Logo } from "@/components/logo";

const links = [
  ["Expertise", "/#services"],
  ["Approach", "/#approach"],
  ["Company", "/#company"],
  ["Contact", "/#contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.dataset.menuOpen = String(open);
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>
        <Link className="button button--small header-cta" href="mailto:tech@thedesertwhales.com?subject=New%20project%20enquiry">
          Start a conversation <ArrowUpRight />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
      <div id="mobile-navigation" className="mobile-nav" data-open={open}>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link className="button" href="mailto:tech@thedesertwhales.com?subject=New%20project%20enquiry" onClick={() => setOpen(false)}>
            Start a conversation <ArrowUpRight />
          </Link>
        </nav>
      </div>
    </header>
  );
}
