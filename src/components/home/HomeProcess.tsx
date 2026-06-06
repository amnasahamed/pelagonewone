import {
  ClipboardList,
  FileUp,
  MessageCircle,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { HomeProcessStep } from "@/lib/home-types";

const stepIcons: LucideIcon[] = [
  MessageCircle,
  FileUp,
  ClipboardList,
  PackageCheck,
];

type Props = { steps: HomeProcessStep[] };

export function HomeProcess({ steps }: Props) {
  return (
    <section className="home-section-pad home-surface-white border-t border-ink/6">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll variant="rise">
          <SectionHeader eyebrow="How it works" title="Four steps. Zero chasing." />
        </RevealOnScroll>

        <ol className="home-process-track mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((p, i) => {
            const Icon = stepIcons[i] ?? MessageCircle;
            return (
              <li key={p.step} className="home-process-step">
                <RevealOnScroll delay={i * 60} variant="subtle" className="h-full">
                  <div className="home-process-card flex h-full flex-col p-6 lg:p-7">
                    <div className="flex items-center gap-3">
                      <span className="home-process-card__num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.desc}</p>
                    <p className="home-process-deliverable mt-5">{p.deliverable}</p>
                  </div>
                </RevealOnScroll>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
