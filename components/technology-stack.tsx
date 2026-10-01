"use client";

import type { IconType } from "react-icons";
import {
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
} from "react-icons/si";
import { StaggerContainer, StaggerItem } from "@/components/motion";

type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

const technologies: Technology[] = [
  { name: "React", icon: SiReact, color: "#149eca" },
  { name: "Next.js", icon: SiNextdotjs, color: "#111111" },
  { name: "Python", icon: SiPython, color: "#3776ab" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "n8n", icon: SiN8N, color: "#ea4b71" },
];

export function TechnologyStack() {
  return (
    <div className="mt-[clamp(52px,6vw,80px)]">
      <StaggerContainer
        as="ul"
        className="mx-auto grid max-w-[820px] list-none grid-cols-5 items-center gap-[clamp(28px,5vw,72px)] p-0 max-[560px]:gap-6"
        staggerDelay={0.07}
      >
        {technologies.map((technology) => {
          const TechnologyIcon = technology.icon;

          return (
            <StaggerItem
              as="li"
              className="group grid place-items-center"
              key={technology.name}
              aria-label={technology.name}
              title={technology.name}
            >
              <TechnologyIcon
                aria-hidden="true"
                className="size-[clamp(30px,3vw,42px)] opacity-75"
                color={technology.color}
              />
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
}
