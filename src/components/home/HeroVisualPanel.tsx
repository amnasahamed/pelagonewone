import Image from "next/image";
import {
  Building2,
  Calendar,
  CheckCircle2,
  ClipboardList,
  FileText,
  IdCard,
  Loader2,
  Lock,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

type FloatCard = {
  id: string;
  title: string;
  status: string;
  tone: "complete" | "progress" | "upcoming" | "submitted";
  icon: React.ReactNode;
  className: string;
};

const floatCards: FloatCard[] = [
  {
    id: "inc",
    title: "Incorporation",
    status: "Completed",
    tone: "complete",
    icon: <Building2 size={15} className="text-accent" />,
    className: "hero-float-card--inc left-[2%] top-[6%] sm:left-[4%] sm:top-[8%]",
  },
  {
    id: "gst",
    title: "GST Registration",
    status: "Application submitted",
    tone: "submitted",
    icon: <FileText size={15} className="text-emerald-600" />,
    className: "hero-float-card--gst right-[4%] top-[0%] sm:right-[8%] sm:top-[2%]",
  },
  {
    id: "pan",
    title: "PAN & TAN",
    status: "Completed",
    tone: "complete",
    icon: <IdCard size={15} className="text-sky-600" />,
    className: "hero-float-card--pan right-[-2%] top-[36%] sm:right-[0%] sm:top-[38%]",
  },
  {
    id: "roc",
    title: "ROC Compliance",
    status: "In Progress",
    tone: "progress",
    icon: <ClipboardList size={15} className="text-violet-600" />,
    className: "hero-float-card--roc left-[-2%] top-[42%] sm:left-[0%] sm:top-[44%]",
  },
  {
    id: "annual",
    title: "Annual Filing",
    status: "Upcoming",
    tone: "upcoming",
    icon: <ClipboardList size={15} className="text-amber-600" />,
    className: "hero-float-card--annual bottom-[8%] right-[4%] sm:bottom-[10%] sm:right-[8%]",
  },
];

function StatusLine({ tone, status }: { tone: FloatCard["tone"]; status: string }) {
  if (tone === "complete" || tone === "submitted") {
    return (
      <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-600 sm:text-[11px]">
        <CheckCircle2 size={12} aria-hidden />
        {status}
      </span>
    );
  }
  if (tone === "progress") {
    return (
      <span className="flex items-center gap-1 text-[10px] font-medium text-accent sm:text-[11px]">
        <Loader2 size={12} className="animate-spin" aria-hidden />
        {status}
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1 text-[10px] font-medium text-amber-600 sm:text-[11px]">
      <Lock size={11} aria-hidden />
      {status}
    </span>
  );
}

function PelagoDashboard() {
  const timeline = [
    { label: "Incorporation", state: "done" as const },
    { label: "PAN & TAN", state: "done" as const },
    { label: "GST Registration", state: "active" as const },
    { label: "Bank Account", state: "upcoming" as const },
  ];

  return (
    <div className="hero-dashboard absolute left-[16%] top-[20%] z-20 w-[62%] overflow-hidden rounded-[10px] bg-white shadow-[0_16px_48px_-12px_rgba(18,29,64,0.35)] ring-1 ring-black/5">
      <div className="flex items-center justify-between border-b border-ink/6 bg-[#f8fafc] px-3 py-2">
        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted sm:text-[10px]">
          Pelago Dashboard
        </p>
      </div>

      <div className="grid grid-cols-[1fr_auto] gap-2 p-2.5 sm:p-3">
        <div className="min-w-0 space-y-2">
          <div>
            <p className="text-[11px] font-semibold text-ink sm:text-xs">
              Hello, Arjun 👋
            </p>
            <p className="text-[9px] text-muted">Here&apos;s your company status</p>
          </div>

          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[9px] font-medium text-muted">Overall progress</span>
              <span className="text-[9px] font-bold text-accent">90%</span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-ink/8">
              <div className="h-full w-[90%] rounded-full bg-accent" />
            </div>
          </div>

          <ul className="space-y-1">
            {timeline.map((item) => (
              <li
                key={item.label}
                className={cn(
                  "flex items-center gap-2 rounded-md px-1.5 py-1 text-[9px] sm:text-[10px]",
                  item.state === "active" && "bg-accent/[0.07]",
                )}
              >
                <span
                  className={cn(
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                    item.state === "done" && "text-emerald-600",
                    item.state === "active" && "text-accent",
                    item.state === "upcoming" && "text-ink/25",
                  )}
                  aria-hidden
                >
                  {item.state === "done" ? (
                    <CheckCircle2 size={11} />
                  ) : item.state === "active" ? (
                    <Loader2 size={11} className="animate-spin" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  )}
                </span>
                <span className="font-medium text-ink">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden w-[72px] shrink-0 flex-col gap-2 sm:flex">
          <div className="rounded-lg border border-ink/6 bg-[#f8fafc] p-1.5 text-center">
            <div className="relative mx-auto h-8 w-8 overflow-hidden rounded-full">
              <Image
                src="/team/team-sahil.png"
                alt=""
                fill
                className="object-cover object-[50%_22%] scale-[1.18]"
                sizes="32px"
              />
            </div>
            <p className="mt-1 text-[7px] text-muted">Your advisor</p>
            <p className="text-[8px] font-semibold text-ink">Ameen K.</p>
            <span className="mt-1 flex items-center justify-center gap-0.5 rounded bg-[#25D366]/10 px-1 py-0.5 text-[6px] font-semibold text-[#128C7E]">
              <MessageCircle size={7} aria-hidden />
              WhatsApp
            </span>
          </div>
          <div className="rounded-lg border border-ink/6 bg-white p-1.5 text-center">
            <Calendar size={12} className="mx-auto text-accent" aria-hidden />
            <p className="mt-0.5 font-display text-sm font-bold leading-none text-accent">03</p>
            <p className="text-[7px] text-muted">Days to go</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroVisualPanel() {
  return (
    <div className="hero-visual-panel relative mx-auto aspect-[585/455] w-full max-w-[620px] lg:max-w-none">
      <svg
        className="pointer-events-none absolute inset-0 z-[5] h-full w-full"
        viewBox="0 0 585 455"
        fill="none"
        aria-hidden
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M60 40 Q180 100 280 160 T460 80"
          stroke="url(#heroGlow1)"
          strokeWidth="2"
          strokeDasharray="5 7"
          opacity="0.6"
        />
        <path
          d="M460 60 Q360 140 300 210 T80 320"
          stroke="url(#heroGlow2)"
          strokeWidth="2"
          strokeDasharray="5 7"
          opacity="0.45"
        />
        <defs>
          <linearGradient id="heroGlow1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
          <linearGradient id="heroGlow2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#a5b4fc" />
          </linearGradient>
        </defs>
      </svg>

      <div className="hero-visual-panel__photo relative h-full w-full overflow-visible rounded-[1.35rem] shadow-[0_28px_56px_-24px_rgba(18,29,64,0.28)] ring-1 ring-ink/[0.06]">
        <div className="relative h-full w-full overflow-hidden rounded-[1.35rem]">
          <Image
            src="/images/hero-desk-scene.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 585px"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-accent/[0.04]"
            aria-hidden
          />
        </div>

        <PelagoDashboard />

        {floatCards.map((card) => (
          <div
            key={card.id}
            className={cn(
              "hero-float-card absolute z-30 min-w-[128px] max-w-[158px] rounded-xl border border-white/70 bg-white/80 p-2.5 shadow-[0_10px_28px_-10px_rgba(18,29,64,0.22)] backdrop-blur-md sm:min-w-[142px] sm:p-3",
              card.className,
            )}
          >
            <div className="flex items-start gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-ink/[0.06] sm:h-8 sm:w-8">
                {card.icon}
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-[11px] font-semibold leading-tight text-ink sm:text-xs">
                  {card.title}
                </p>
                <div className="mt-0.5">
                  <StatusLine tone={card.tone} status={card.status} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
