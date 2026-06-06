"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  FileText,
  HelpCircle,
  IndianRupee,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

type FaqItem = { q: string; a: string };

const faqIcons = [IndianRupee, Landmark, FileText, ShieldCheck, HelpCircle, HelpCircle] as const;

type Props = {
  items: readonly FaqItem[];
};

export function HomeFaq({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="home-section-pad home-surface-white border-t border-ink/6">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll variant="rise">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions"
            subtitle="Quick answers — your advisor will personalise on a call."
          />
        </RevealOnScroll>

        <ul className="mt-12 space-y-3">
          {items.map((f, i) => {
            const Icon = faqIcons[i % faqIcons.length];
            const isOpen = openIndex === i;

            return (
              <RevealOnScroll key={f.q} delay={(i % 3) * 50} variant="subtle">
                <li>
                  <div
                    className={cn(
                      "home-faq-item overflow-hidden transition-shadow duration-200",
                      isOpen && "home-faq-item--open",
                    )}
                  >
                    <button
                      type="button"
                      id={`home-faq-btn-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`home-faq-panel-${i}`}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-start gap-4 p-6 text-left sm:p-7"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="font-display text-lg font-bold leading-snug text-ink">
                          {f.q}
                        </span>
                      </span>
                      <ChevronDown
                        size={20}
                        className={cn(
                          "mt-0.5 shrink-0 text-muted transition-transform duration-300",
                          isOpen && "rotate-180 text-accent",
                        )}
                        aria-hidden
                      />
                    </button>
                    <div
                      id={`home-faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`home-faq-btn-${i}`}
                      aria-hidden={!isOpen}
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="border-t border-ink/6 px-6 pb-6 pl-[4.25rem] text-sm leading-relaxed text-muted sm:px-7 sm:pb-7 sm:pl-[4.75rem]">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </RevealOnScroll>
            );
          })}
        </ul>

        <p className="mt-10 text-center">
          <Link href="/contact" className="interactive-link text-sm font-semibold text-accent">
            More questions? Talk to an advisor →
          </Link>
        </p>
      </div>
    </section>
  );
}
