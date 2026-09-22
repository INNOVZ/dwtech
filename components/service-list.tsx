"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Plus } from "@/components/icons";
import { services } from "@/lib/site-data";

export function ServiceList() {
  const [active, setActive] = useState(0);

  return (
    <div className="service-list">
      {services.map((service, index) => {
        const expanded = active === index;
        const panelId = `service-panel-${index}`;
        return (
          <article className="service-row" data-expanded={expanded} key={service.slug}>
            <button
              className="service-row__trigger"
              type="button"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setActive(expanded ? -1 : index)}
            >
              <span className="service-row__number">{String(index + 1).padStart(2, "0")}</span>
              <span className="service-row__title">{service.title}</span>
              <Plus className="service-row__icon" />
            </button>
            <div className="service-row__panel" id={panelId} aria-hidden={!expanded}>
              <p>{service.short}</p>
              <Link href={`/services/${service.slug}`}>
                View service <ArrowUpRight />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
