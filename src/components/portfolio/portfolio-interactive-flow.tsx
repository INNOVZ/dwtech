import { useRef, type ComponentType } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Check, Zap, ArrowUpRight, Heart, Star } from "lucide-react";
import {
  SiPostgresql,
  SiNextdotjs,
  SiTypescript,
  SiFastapi,
  SiPytorch,
  SiPython,
  SiShopify,
  SiAstro,
  SiTailwindcss,
  SiGo,
  SiReact,
  SiGraphql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

interface TechLogo {
  name: string;
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

interface ShowcaseItem {
  slug: string;
  projectName: string;
  badge: string;
  headline: string;
  subtitle: string;
  techLogos: TechLogo[];
  deliverables: string[];
  singleImage?: string;
  leftCard?: {
    image: string;
    price: string;
    title: string;
    subtitle: string;
    rating: string;
  };
  rightCard?: {
    image: string;
    label: string;
    secondaryLabel: string;
  };
  avatarEmoji: string;
  avatarBg: string;
}

const showcaseData: ShowcaseItem[] = [
  {
    slug: "zaakiy-ai-chatbot",
    projectName: "Zaakiy AI",
    badge: "Generative AI",
    headline: "Create an omichannel Chat agent?",
    subtitle:
      "Deploy Ready-to-use AI Agents for your WhatsApp, Instagram, Facebook, or Web.",
    techLogos: [
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "PyTorch AI", icon: SiPytorch, color: "#EE4C2C" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
    deliverables: [
      "Multiligual Adaption",
      "AI Automation",
      "Lead Generation",
      "Direct CRM Sync",
    ],
    singleImage: "/portfolio/zaakiy.png",
    avatarEmoji: "🤖",
    avatarBg: "bg-indigo-500",
  },
  {
    slug: "restaurant-ordering-system",
    projectName: "Le Cafio",
    badge: "Headless E-Commerce",
    headline: "How to create a restaurant ordering system?",
    subtitle:
      "We have a wide range of turnkey headless commerce solutions available.",
    techLogos: [
      { name: "Shopify Plus", icon: SiShopify, color: "#96bf48" },
      { name: "Astro", icon: SiAstro, color: "#FF5D01" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    ],
    deliverables: [
      "Dynamic Menu",
      "Whatsapp ordering",
      "Delivery and Pickup customization",
      "Loyalty programs",
    ],
    singleImage: "/portfolio/le-cafio.png",
    avatarEmoji: "✨",
    avatarBg: "bg-purple-400",
  },
  {
    slug: "real-estate-agency",
    projectName: "Alfa Immobiliare",
    badge: "Real Estate Agency",
    headline: "A complete property management solution?",
    subtitle:
      "Turnkey institutional dashboards for hedge funds, family offices, and private equity.",
    techLogos: [
      { name: "Golang", icon: SiGo, color: "#00ADD8" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    deliverables: [
      "Real time property management",
      "Property listing with maps",
      "Client portfolio management",
      "Automated rental agreements",
    ],
    singleImage: "/portfolio/alfa.png",
    avatarEmoji: "📈",
    avatarBg: "bg-sky-400",
  },
];

/**
 * Modern SVG Folder Component (Extendi / macOS inspired):
 * - Resting state: Completely clean folder (zero logos visible), with project name below.
 * - Hover state: Front pocket tilts slightly open, pure vector brand logos pop up & fan out (no shapes/backgrounds).
 */
function InteractiveTechFolder({
  techLogos,
  projectName,
}: {
  techLogos: TechLogo[];
  projectName: string;
}) {
  const LeftIcon = techLogos[0].icon;
  const CenterIcon = techLogos[1].icon;
  const RightIcon = techLogos[2].icon;

  return (
    <div className="relative group/folder flex flex-col items-center w-fit cursor-pointer select-none">
      <div className="relative w-16 h-12 flex items-end justify-center">
        {/* ── Popping Brand Logos (100% hidden at rest, pure logos with NO shapes/boxes on hover) ── */}

        {/* Logo 1 - Left (Fans out left) */}
        <div
          title={techLogos[0].name}
          className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 scale-50 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/folder:opacity-100 group-hover/folder:scale-100 group-hover/folder:-translate-y-9 group-hover/folder:-translate-x-9 group-hover/folder:-rotate-12 z-[10]"
        >
          <LeftIcon
            className="size-7 drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
            style={{ color: techLogos[0].color }}
          />
        </div>

        {/* Logo 2 - Center (Pops straight up) */}
        <div
          title={techLogos[1].name}
          className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 scale-50 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/folder:opacity-100 group-hover/folder:scale-110 group-hover/folder:-translate-y-11 group-hover/folder:translate-x-0 group-hover/folder:rotate-0 z-[11]"
        >
          <CenterIcon
            className="size-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
            style={{ color: techLogos[1].color }}
          />
        </div>

        {/* Logo 3 - Right (Fans out right) */}
        <div
          title={techLogos[2].name}
          className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 scale-50 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/folder:opacity-100 group-hover/folder:scale-100 group-hover/folder:-translate-y-9 group-hover/folder:translate-x-9 group-hover/folder:rotate-12 z-[10]"
        >
          <RightIcon
            className="size-7 drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
            style={{ color: techLogos[2].color }}
          />
        </div>

        {/* ── Clean Vector Folder (Reference style: soft sky-blue gradient, clean rounded tabs) ── */}
        <div className="relative z-[5] transition-transform duration-300 ease-out group-hover/folder:scale-[1.04]">
          <svg
            width="60"
            height="44"
            viewBox="0 0 60 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_8px_18px_rgba(56,189,248,0.22)]"
          >
            <defs>
              <linearGradient
                id="folderBackGrad"
                x1="0"
                y1="2"
                x2="60"
                y2="42"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
              <linearGradient
                id="folderFrontGrad"
                x1="0"
                y1="12"
                x2="60"
                y2="44"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="40%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>

            {/* Back sheet with soft rounded tab */}
            <path
              d="M5 8C5 5.79 6.79 4 9 4H22C23.5 4 24.8 4.8 25.6 6.2L27.4 9.2C28.2 10.4 29.5 11 31 11H53C55.21 11 57 12.79 57 15V36C57 38.21 55.21 40 53 40H9C6.79 40 5 38.21 5 36V8Z"
              fill="url(#folderBackGrad)"
            />

            {/* Front pocket: rounded corners, smooth gradient, opens slightly on hover */}
            <rect
              x="3"
              y="13"
              width="54"
              height="32"
              rx="7"
              fill="url(#folderFrontGrad)"
              className="transition-all duration-300 origin-bottom group-hover/folder:scale-y-[0.92] group-hover/folder:-translate-y-0.5"
            />

            {/* Subtle top inner edge highlight on the pocket */}
            <path
              d="M7 14.5H53"
              stroke="white"
              strokeOpacity="0.5"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* ── Project Name Label directly under the Folder (macOS Desktop style) ── */}
      <span className="mt-2 text-xs font-medium tracking-wide text-[#b5afc2] transition-colors duration-200 group-hover/folder:text-white">
        {projectName}
      </span>
    </div>
  );
}

interface CardProps {
  item: ShowcaseItem;
  idx: number;
  total: number;
  progress: MotionValue<number>;
}

function StackingCard({ item, idx, total, progress }: CardProps) {
  // If it's the last card, scale is always 1 (it stays full size on top of the stack)
  // Earlier cards shrink in size (scale 0.86 - 0.965) so their side edges tuck in cleanly
  const targetScale = idx === total - 1 ? 1 : 1 - (total - 1 - idx) * 0.035;

  // Each card begins scaling precisely when the next incoming card begins scrolling over it
  const segmentSize = 1 / (total - 1);
  const rangeStart = idx * segmentSize;
  const scale = useTransform(progress, [rangeStart, 1], [1, targetScale]);

  // Card sticky top offset steps down by 24px so the top tab edge of each card remains visible
  const topOffset = 76 + idx * 24;
  const zIndex = 10 + idx;

  return (
    <div
      className="sticky flex items-start justify-center pb-[18vh] last:pb-12"
      style={{
        top: `${topOffset}px`,
        zIndex: zIndex,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-[1240px] origin-top transition-shadow duration-300"
      >
        <article className="group relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#0d0c15] pt-10 sm:pt-20 lg:pt-18 pb-8 sm:pb-12 px-6 sm:px-10 lg:px-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)]">
          {/* Top edge highlight shine */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* Grid matching col-40%-60% requested by user */}
          <div className="relative z-[1] grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-8 lg:gap-12 items-center">
            {/* ── LEFT COLUMN (40%): Folder + Project Name, Badge on Right, Headline & Info ── */}
            <div className="flex flex-col justify-center">
              {/* Top Row: Folder + Project Name on Left, Badge on the RIGHT */}
              <div className="flex items-center gap-5 sm:gap-6 mb-7">
                <InteractiveTechFolder
                  techLogos={item.techLogos}
                  projectName={item.projectName}
                />
              </div>

              {/* Bold headline */}
              <h3 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-white tracking-tight leading-[1.14] mb-4">
                {item.headline}
              </h3>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#918a9e] leading-relaxed mb-6 max-w-[440px]">
                {item.subtitle}
              </p>

              {/* Green checkmark checklist */}
              <ul className="mb-8 space-y-2.5 m-0 p-0 list-none">
                {item.deliverables.map((deliv) => (
                  <li key={deliv} className="flex items-center gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#18392b] text-[#34d399] border border-[#34d399]/40">
                      <Check className="size-3 stroke-[3]" />
                    </span>
                    <span className="text-sm sm:text-base text-[#cfcad8] font-medium">
                      {deliv}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── RIGHT COLUMN (60%): Elevated Glass & Browser Stage ── */}
            <div
              className={`relative from-[#1c1929] via-[#14121e] to-[#0e0d16] flex items-center justify-center overflow-hidden ${
                item.singleImage
                  ? "p-1"
                  : "p-2 sm:p-7 min-h-[360px] lg:min-h-[440px]"
              }`}
            >
              {/* Ambient glowing backlight behind the showcase */}
              <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-44 rounded-full bg-orchid/20 blur-3xl opacity-75 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -bottom-20 right-10 w-1/2 h-40 rounded-xl bg-sky-500/15 blur-3xl opacity-60" />

              {item.singleImage ? (
                /* Double-bezel glassmorphic macOS / Arc browser frame */
                <div className="relative z-10 w-full rounded-[18px] sm:rounded-[22px] bg-white/[0.04] p-1.5 sm:p-2 border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_30px_70px_-12px_rgba(176,99,255,0.22)]">
                  <div className="overflow-hidden rounded-[13px] sm:rounded-[16px] bg-[#111019] border border-white/10">
                    {/* Sleek Browser Top Bar */}
                    <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#181624] border-b border-white/[0.08]">
                      {/* Traffic light controls */}
                      <div className="flex items-center gap-1.5">
                        <span className="size-2.5 rounded-full bg-[#ff5f56]/85" />
                        <span className="size-2.5 rounded-full bg-[#ffbd2e]/85" />
                        <span className="size-2.5 rounded-full bg-[#27c93f]/85" />
                      </div>
                    </div>

                    {/* Full uncropped viewport image */}
                    <div className="relative w-full overflow-hidden bg-[#0d0c15]">
                      <img
                        src={item.singleImage}
                        alt={item.projectName}
                        className="w-full h-auto block object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ) : item.leftCard && item.rightCard ? (
                /* Side-by-side floating cards inside the stage */
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-5 w-full">
                  {/* Floating Card 1: White Product / System Card */}
                  <div className="w-full sm:w-[220px] rounded-2xl bg-white text-black p-4 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 mb-3">
                      <img
                        src={item.leftCard.image}
                        alt={item.leftCard.title}
                        className="size-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex items-center justify-between mb-1">
                      <span className="text-base font-bold text-black tracking-tight">
                        {item.leftCard.price}
                      </span>
                      <Heart className="size-4 fill-rose-500 text-rose-500" />
                    </div>

                    <h4 className="text-xs font-bold text-black line-clamp-1 mb-0.5">
                      {item.leftCard.title}
                    </h4>
                    <p className="text-[.7rem] text-[#6b7280] line-clamp-1 mb-2.5">
                      {item.leftCard.subtitle}
                    </p>

                    <div className="flex items-center gap-1 text-[.72rem] font-semibold text-amber-500">
                      <Star className="size-3 fill-amber-400 text-amber-400" />
                      <span className="text-[#374151]">
                        {item.leftCard.rating}
                      </span>
                    </div>
                  </div>

                  {/* Floating Card 2: AI / Platform visual card */}
                  <div className="w-full sm:w-[245px] rounded-2xl bg-[#232130] text-white p-3.5 shadow-xl border border-white/10 transition-transform duration-300 hover:scale-[1.02]">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl mb-3 bg-black/40">
                      <img
                        src={item.rightCard.image}
                        alt={item.rightCard.label}
                        className="size-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                        <span className="text-xs font-bold text-white tracking-wide">
                          {item.rightCard.label}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#a59eb0]">
                      <span className="text-[.72rem] font-mono text-orchid font-semibold">
                        {item.rightCard.secondaryLabel}
                      </span>
                      <span className="flex items-center gap-1 text-[.7rem] text-emerald-400">
                        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </article>
      </motion.div>
    </div>
  );
}

export function PortfolioInteractiveFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative pt-6 pb-20">
      <div className="relative mx-auto w-full max-w-[1240px]">
        {showcaseData.map((item, idx) => (
          <StackingCard
            key={item.slug}
            item={item}
            idx={idx}
            total={showcaseData.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}

export default PortfolioInteractiveFlow;
