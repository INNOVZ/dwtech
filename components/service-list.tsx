"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Plus } from "@/components/icons";
import { services } from "@/lib/site-data";

export function ServiceList() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative z-[1] max-w-[1040px] border-t border-white/20">
      {services.map((service, index) => {
        const expanded = active === index;
        const panelId = `service-panel-${index}`;
        return (
          <article className="group/row border-b border-white/20" data-expanded={expanded} key={service.slug}>
            <button
              className="grid min-h-[66px] w-full cursor-pointer grid-cols-[64px_1fr_40px] items-center border-0 bg-transparent p-0 text-left max-[620px]:min-h-[62px] max-[620px]:grid-cols-[44px_1fr_28px]"
              type="button"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setActive(expanded ? -1 : index)}
            >
              <span className="text-xs text-[#8e889c]">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-[clamp(1.12rem,1.55vw,1.5rem)] tracking-[-.025em] transition-colors group-hover/row:text-orchid">{service.title}</span>
              <Plus className="size-[18px] justify-self-end fill-none stroke-current stroke-[1.7] transition-[transform,color] duration-280 ease-fluid [stroke-linecap:round] [stroke-linejoin:round] group-data-[expanded=true]/row:rotate-45 group-data-[expanded=true]/row:text-orchid" />
            </button>
            <div className="grid grid-rows-[0fr] overflow-hidden transition-[grid-template-rows,padding] duration-350 ease-fluid group-data-[expanded=true]/row:grid-rows-[1fr] group-data-[expanded=true]/row:pb-[25px]" id={panelId} aria-hidden={!expanded}>
              <p className="min-h-0 max-w-[580px] overflow-hidden pl-16 leading-[1.55] text-[#aca7b7] max-[620px]:pl-11">{service.short}</p>
              <Link className="mt-[-24px] flex min-h-0 items-center justify-self-end gap-2 overflow-hidden text-[.85rem] text-orchid max-[620px]:mt-[18px] max-[620px]:ml-11 max-[620px]:justify-self-start [&_svg]:size-[18px] [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.7] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round]" href={`/services/${service.slug}`}>
                View service <ArrowUpRight />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
