import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapPin,
  MessageCircle,
  UserCircle,
} from "lucide-react";
import { MediaVisual } from "@/components/MediaVisual";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { HomePageContent } from "@/lib/home-types";
import { site } from "@/lib/site";

type Props = Pick<HomePageContent, "teamTrust">;

export function TeamTrust({ teamTrust }: Props) {
  return (
    <section className="home-section-pad home-surface-warm border-t border-ink/6">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8">
        <RevealOnScroll variant="subtle" className="relative">
          <div
            className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-accent/20 to-transparent blur-2xl"
            aria-hidden
          />
          <div className="home-media-zoom rounded-[1.5rem]">
            <MediaVisual
              imageKey="aboutTeam"
              className="relative aspect-[4/3] w-full rounded-[1.5rem] shadow-2xl shadow-ink/15 ring-1 ring-ink/8"
            />
          </div>
          <div className="home-team-float absolute -bottom-4 -right-2 max-w-[220px] sm:-right-4">
            <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-muted">
              <MapPin size={12} className="text-accent" />
              Kozhikode
            </p>
            <p className="mt-1 text-xs leading-snug text-ink/80">
              {site.address[0]}
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={80} variant="subtle" className="lg:py-4">
          <SectionHeader
            eyebrow="Your team"
            title={teamTrust.title}
            subtitle={teamTrust.subtitle}
          />
          <ul className="mt-8 space-y-3">
            {teamTrust.points.map((point) => (
              <li
                key={point}
                className="flex gap-4 rounded-xl border border-ink/8 bg-white px-4 py-3.5 text-sm leading-relaxed text-ink shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-white">
                  <Check size={16} strokeWidth={2.5} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="home-advisor-card mt-8 rounded-2xl border border-accent/20 bg-white p-5 shadow-md shadow-accent/10 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
              Dedicated advisor
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              One named contact from incorporation through your first GST cycle — same
              WhatsApp thread, no ticket queue.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1fb855]"
              >
                <MessageCircle size={16} />
                WhatsApp your advisor
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-ink/10 bg-paper-warm px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/20"
              >
                <UserCircle size={16} className="text-accent" />
                Meet the team
              </Link>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
          >
            Book a free call
            <ArrowRight size={14} />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
