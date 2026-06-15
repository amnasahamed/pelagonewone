import Image from "next/image";
import { CalendarDays, Headphones, Star } from "lucide-react";

const advisors = [
  "/team/team-sahil.png",
  "/team/team-amnas.png",
  "/team/team-minhaj.png",
  "/team/team-salim.png",
] as const;

export function HomeHeroStats() {
  return (
    <div className="hero-trust-bar relative z-20 mx-auto mt-10 w-full max-w-5xl lg:mt-12">
      <div className="grid overflow-hidden rounded-2xl border border-ink/[0.07] bg-white/90 shadow-[0_12px_40px_-16px_rgba(18,29,64,0.18)] backdrop-blur-sm lg:grid-cols-[1.1fr_1fr_0.85fr]">
        <div className="border-b border-ink/6 px-5 py-5 lg:border-b-0 lg:border-r lg:py-6">
          <div className="flex gap-0.5" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={15}
                className="fill-amber-400 text-amber-400"
                aria-hidden
              />
            ))}
          </div>
          <blockquote className="mt-2.5 text-[0.9375rem] leading-snug text-ink">
            &ldquo;Everything was transparent. No hidden fees. Highly recommended!&rdquo;
          </blockquote>
          <p className="mt-2 text-xs font-medium text-muted">— Nikhil, Founder</p>
        </div>

        <div className="flex flex-col justify-center gap-3 border-b border-ink/6 px-5 py-5 lg:border-b-0 lg:border-r lg:px-6 lg:py-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Headphones size={18} aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Dedicated advisor</p>
              <p className="text-xs text-muted">Replies within 5 mins</p>
            </div>
          </div>
          <div className="flex items-center pl-1">
            {advisors.map((src, i) => (
              <div
                key={src}
                className="relative -ml-2.5 first:ml-0 h-9 w-9 overflow-hidden rounded-full ring-2 ring-white"
                style={{ zIndex: advisors.length - i }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover object-[50%_22%] scale-[1.18]"
                  sizes="36px"
                />
              </div>
            ))}
            <span className="relative -ml-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-[10px] font-bold text-accent ring-2 ring-white">
              +6
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 px-5 py-5 lg:px-6 lg:py-6">
          <div className="min-w-0 flex-1">
            <p className="font-display text-[1.65rem] font-bold leading-none text-accent">
              7–10 days
            </p>
            <p className="mt-1.5 text-sm text-muted">Average incorporation time</p>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/[0.08] text-accent">
            <CalendarDays size={22} aria-hidden />
          </span>
        </div>
      </div>
    </div>
  );
}
