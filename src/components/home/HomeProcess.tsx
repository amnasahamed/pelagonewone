import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CheckCircle2,
  Landmark,
  ListChecks,
  Lock,
  MessageCircle,
  PackageCheck,
  Shield,
  Upload,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { ProcessVisualPanel, WhatsAppIcon } from "@/components/home/ProcessVisualPanel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { HomeProcessStep } from "@/lib/home-types";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const headerFeatures = [
  {
    icon: BadgeCheck,
    iconClass: "text-accent bg-accent/10",
    label: "One advisor",
  },
  {
    icon: MessageCircle,
    iconClass: "text-[#128C7E] bg-[#25D366]/10",
    label: "Real-time updates",
  },
  {
    icon: Lock,
    iconClass: "text-violet-600 bg-violet-500/10",
    label: "Secure & private",
  },
] as const;

type StepMeta = {
  icon: LucideIcon | "whatsapp";
  iconClass: string;
  deliverableIcon: LucideIcon;
};

const stepMeta: StepMeta[] = [
  {
    icon: "whatsapp",
    iconClass: "bg-[#25D366]/12 text-[#128C7E]",
    deliverableIcon: Zap,
  },
  {
    icon: Upload,
    iconClass: "bg-accent/10 text-accent",
    deliverableIcon: CheckCircle2,
  },
  {
    icon: Landmark,
    iconClass: "bg-accent/10 text-accent",
    deliverableIcon: ListChecks,
  },
  {
    icon: PackageCheck,
    iconClass: "bg-accent/10 text-accent",
    deliverableIcon: Lock,
  },
];

type Props = { steps: HomeProcessStep[] };

function ProcessStepCard({
  step,
  meta,
  delay,
}: {
  step: HomeProcessStep;
  meta: StepMeta;
  delay: number;
}) {
  const DeliverableIcon = meta.deliverableIcon;

  return (
    <RevealOnScroll delay={delay} variant="subtle" className="flex h-full min-h-0 flex-1 flex-col">
      <article className="home-process-card flex h-full min-h-0 flex-1 flex-col">
        <span className="home-process-card__num">{step.step}</span>

        <div className="home-process-card__body flex flex-1 flex-col">
        <span
          className={cn(
            "home-process-card__icon mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full",
            meta.iconClass,
          )}
          aria-hidden
        >
          {meta.icon === "whatsapp" ? (
            <WhatsAppIcon className="h-[22px] w-[22px]" />
          ) : (
            <meta.icon size={22} strokeWidth={1.75} />
          )}
        </span>

        <h3 className="home-process-card__title">{step.title}</h3>
        <p className="home-process-card__desc">{step.desc}</p>

        <div className="home-process-deliverable mt-auto flex items-start gap-2">
          <DeliverableIcon size={15} className="shrink-0 text-accent" aria-hidden />
          <span>{step.deliverable}</span>
        </div>
        </div>
      </article>
    </RevealOnScroll>
  );
}

export function HomeProcess({ steps }: Props) {
  return (
    <section
      id="how-it-works"
      className="home-section-pad home-process relative overflow-hidden border-t border-ink/6"
    >
      <div className="home-process__bg" aria-hidden>
        <Image
          src="/images/process/path.png"
          alt=""
          fill
          className="object-cover object-[72%_28%] sm:object-[68%_26%] lg:object-[78%_22%]"
          sizes="100vw"
          priority={false}
        />
      </div>
      <div className="home-process__scrim" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <RevealOnScroll variant="rise">
            <div className="max-w-xl lg:max-w-lg">
              <span className="inline-flex items-center rounded-full border border-accent/15 bg-accent/[0.06] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                How it works
              </span>

              <h2 className="mt-6 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-ink sm:text-[2.35rem] lg:text-[2.5rem]">
                Four steps.{" "}
                <span className="text-accent">Zero chasing.</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">
                From WhatsApp to certificates, we handle the follow-ups so you can focus on
                building.
              </p>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {headerFeatures.map((item) => (
                  <li key={item.label} className="flex items-center gap-2.5">
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                        item.iconClass,
                      )}
                      aria-hidden
                    >
                      <item.icon size={17} />
                    </span>
                    <span className="text-sm font-semibold text-ink">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant="subtle" delay={120} className="w-full lg:justify-self-end">
            <ProcessVisualPanel />
          </RevealOnScroll>
        </div>

        <div className="home-process-flow mt-14 lg:mt-20">
          <ol className="home-process-track" aria-label="Process steps">
            {steps.map((step, i) => {
              const meta = stepMeta[i] ?? stepMeta[0];

              return (
                <li key={step.step} className="home-process-step">
                  <ProcessStepCard step={step} meta={meta} delay={i * 60} />
                </li>
              );
            })}
          </ol>
        </div>

        <RevealOnScroll variant="subtle" delay={120} className="mt-10 lg:mt-14">
          <div className="home-process-cta flex flex-col gap-5 rounded-2xl border border-ink/8 bg-[#f4f7fb] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-7 sm:py-6">
            <div className="flex items-start gap-4 sm:items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Shield size={22} aria-hidden />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-ink sm:text-xl">
                  One team. Every step.
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  You get a dedicated advisor who stays with you from start to scale.
                </p>
              </div>
            </div>

            <Link
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full border border-ink/8 bg-white py-2 pl-5 pr-2 text-sm font-semibold text-ink shadow-sm transition-all hover:border-[#25D366]/30 hover:shadow-md sm:self-auto"
            >
              Chat on WhatsApp
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform group-hover:scale-105">
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </span>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
