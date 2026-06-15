import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  Building2,
  FileCheck,
  LineChart,
  Scale,
  Shield,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import type { ServiceSectionId } from "@/lib/services-theme";
import { cn } from "@/lib/utils";

/** Fixed layout constants — keep card width < chord length at ORBIT_RADIUS */
const HUB_SIZE = 580;
const HUB_CENTER = HUB_SIZE / 2;
const ORBIT_RADIUS = 224;
const CENTER_BADGE_RADIUS = 72;
const CONNECTOR_END_INSET = 44;

type HubCard = {
  id: ServiceSectionId;
  title: string;
  subtitle: string;
  fromPrice: string;
  timeline: string;
  image: string;
  icon: typeof Building2;
  iconBg: string;
  iconColor: string;
  priceClass: string;
  /** Degrees on the orbit ring, 0 = right, -90 = top */
  orbitAngle: number;
};

function polarToXY(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: HUB_CENTER + radius * Math.cos(rad),
    y: HUB_CENTER + radius * Math.sin(rad),
  };
}

function orbitPositionStyle(angleDeg: number, radiusPx: number): CSSProperties {
  const rad = (angleDeg * Math.PI) / 180;
  const x = radiusPx * Math.cos(rad);
  const y = radiusPx * Math.sin(rad);

  return {
    left: "50%",
    top: "50%",
    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
  };
}

const hubCards: HubCard[] = [
  {
    id: "start",
    title: "Start your business",
    subtitle: "Get registered and ready to operate",
    fromPrice: "Pvt Ltd from ₹8,000+",
    timeline: "7–10 days avg.",
    image: "/images/services-hub/service-hub-start.png",
    icon: Building2,
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    priceClass: "bg-accent text-white",
    orbitAngle: -90,
  },
  {
    id: "tax",
    title: "Tax & GST",
    subtitle: "Stay compliant and optimize legally",
    fromPrice: "GST reg from ₹3,500+",
    timeline: "3–5 days avg.",
    image: "/images/services-hub/service-hub-tax.png",
    icon: LineChart,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
    priceClass: "bg-amber-500 text-white",
    orbitAngle: -18,
  },
  {
    id: "grow",
    title: "Grow & scale",
    subtitle: "Systems and support for the next stage",
    fromPrice: "HR setup from ₹4,500+",
    timeline: "7–10 days",
    image: "/images/services-hub/service-hub-grow.png",
    icon: Scale,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
    priceClass: "bg-emerald-500 text-white",
    orbitAngle: 54,
  },
  {
    id: "compliance",
    title: "Stay compliant",
    subtitle: "Ongoing filings without surprises",
    fromPrice: "ROC annual from ₹5,000+",
    timeline: "On calendar",
    image: "/images/services-hub/service-hub-compliance.png",
    icon: FileCheck,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
    priceClass: "bg-blue-600 text-white",
    orbitAngle: 126,
  },
  {
    id: "protect",
    title: "Protect your business",
    subtitle: "Legal shields for brand and IP",
    fromPrice: "TM filing from ₹6,500+",
    timeline: "6–12 months",
    image: "/images/services-hub/service-hub-protect.png",
    icon: Shield,
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
    priceClass: "bg-violet-500 text-white",
    orbitAngle: 198,
  },
];

function HubServiceCard({
  card,
  className,
  orbitStyle,
}: {
  card: HubCard;
  className?: string;
  orbitStyle?: CSSProperties;
}) {
  const Icon = card.icon;

  const cardInner = (
    <Link
      href={`/services#${card.id}`}
      className={cn(
        "services-hub-card group block w-[188px] max-w-full transition-[transform,box-shadow] duration-300 hover:scale-[1.03]",
        className,
      )}
    >
      <div className="flex h-[176px] overflow-visible rounded-2xl border border-ink/[0.06] bg-white/95 p-3 shadow-[0_12px_32px_-16px_rgba(18,29,64,0.2)] backdrop-blur-sm">
        <div className="flex min-w-0 flex-1 flex-col pr-2">
          <span
            className={cn(
              "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
              card.iconBg,
              card.iconColor,
            )}
          >
            <Icon size={16} strokeWidth={2} aria-hidden />
          </span>
          <h3 className="mt-1.5 text-[12px] font-bold leading-tight text-ink">
            {card.title}
          </h3>
          <p className="mt-0.5 line-clamp-2 flex-1 text-[10px] leading-snug text-muted">
            {card.subtitle}
          </p>
          <div className="mt-2 space-y-0.5">
            <span
              className={cn(
                "inline-block rounded-md px-1.5 py-0.5 text-[9px] font-bold leading-tight",
                card.priceClass,
              )}
            >
              {card.fromPrice}
            </span>
            <p className="text-[9px] font-medium text-muted">{card.timeline}</p>
          </div>
        </div>
        <div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-lg">
          <Image
            src={card.image}
            alt=""
            fill
            className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
            sizes="68px"
          />
        </div>
      </div>
    </Link>
  );

  if (orbitStyle) {
    return (
      <div style={orbitStyle} className="absolute z-20 overflow-visible hover:z-30">
        {cardInner}
      </div>
    );
  }

  return cardInner;
}

export function ServicesHubDiagram() {
  return (
    <>
      <div
        className="services-hub relative mx-auto hidden w-full overflow-visible xl:block"
        style={{ width: HUB_SIZE, height: HUB_SIZE, maxWidth: "100%" }}
      >
        <svg
          className="services-hub-orbit pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
          viewBox={`0 0 ${HUB_SIZE} ${HUB_SIZE}`}
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <circle
            cx={HUB_CENTER}
            cy={HUB_CENTER}
            r={ORBIT_RADIUS}
            stroke="url(#hubOrbitStroke)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            opacity="0.45"
          />
          {hubCards.map((card) => {
            const start = polarToXY(card.orbitAngle, CENTER_BADGE_RADIUS);
            const end = polarToXY(card.orbitAngle, ORBIT_RADIUS - CONNECTOR_END_INSET);
            const anchor = polarToXY(card.orbitAngle, ORBIT_RADIUS);
            return (
              <g key={card.id}>
                <line
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke="url(#hubConnectorStroke)"
                  strokeWidth="1.5"
                  strokeDasharray="5 7"
                  strokeLinecap="round"
                  opacity="0.65"
                />
                <circle cx={anchor.x} cy={anchor.y} r="3.5" fill="#93c5fd" opacity="0.9" />
              </g>
            );
          })}
          <defs>
            <linearGradient id="hubOrbitStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#a5b4fc" />
            </linearGradient>
            <linearGradient id="hubConnectorStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bfdbfe" />
              <stop offset="100%" stopColor="#a5b4fc" />
            </linearGradient>
          </defs>
        </svg>

        <div className="services-hub-center absolute left-1/2 top-1/2 z-10 flex h-[8.75rem] w-[8.75rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-visible rounded-full border border-white/80 bg-white/90 px-3 text-center shadow-[0_20px_50px_-20px_rgba(58,103,216,0.35)] backdrop-blur-md">
          <div
            className="pointer-events-none absolute inset-3 rounded-full bg-gradient-to-br from-accent/[0.06] to-violet-400/[0.05]"
            aria-hidden
          />
          <Logo variant="dark" className="relative [&_img]:h-8" />
          <p className="relative mt-2 text-[11px] font-medium text-muted">
            One team. Every step.
          </p>
        </div>

        {hubCards.map((card) => (
          <HubServiceCard
            key={card.id}
            card={card}
            orbitStyle={orbitPositionStyle(card.orbitAngle, ORBIT_RADIUS)}
          />
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:hidden">
        {hubCards.map((card) => (
          <HubServiceCard
            key={card.id}
            card={card}
            className="mx-auto w-full max-w-[320px] sm:max-w-none [&_.services-hub-card]:w-full"
          />
        ))}
      </div>
    </>
  );
}
