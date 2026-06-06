import { ArrowRight, Calculator, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { ToolDefinition } from "@/lib/tools";
import { featuredTools } from "@/lib/home-content";

export function ToolsTeaser({ tools }: { tools: ToolDefinition[] }) {
  const items = featuredTools.map((f) => {
    const tool = tools.find((t) => t.id === f.id)!;
    return { ...f, desc: tool.desc, valueLabel: tool.valueLabel };
  });

  return (
    <section className="home-section-pad home-surface-white border-t border-ink/6">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll variant="rise">
          <div className="home-tools-panel overflow-hidden rounded-[1.75rem] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/80">
                  <Sparkles size={12} />
                  Free tools
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Check the numbers before you hire anyone
                </h2>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-white/65">
                  GST, incorporation costs, and runway — no signup, no sales call.
                </p>
                <Button
                  href="/tools"
                  variant="outline-light"
                  className="mt-8 !border-white/30 !bg-white !text-ink hover:!bg-white/95"
                >
                  All free calculators
                  <ArrowRight size={16} />
                </Button>
              </div>

              <ul className="grid gap-3 sm:grid-cols-3">
                {items.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/tools?tool=${item.id}`}
                      className="home-tool-card group flex h-full flex-col"
                    >
                      <span className="home-tool-card__badge">Free</span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white transition-colors group-hover:bg-white group-hover:text-navy">
                        <Calculator size={18} />
                      </span>
                      <p className="mt-4 font-display text-base font-bold text-white">
                        {item.label}
                      </p>
                      <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-white/55">
                        {item.desc}
                      </p>
                      <div className="home-tool-card__preview mt-4" aria-hidden>
                        <div className="home-tool-card__preview-bar" />
                        <div className="home-tool-card__preview-bar home-tool-card__preview-bar--short" />
                        <div className="home-tool-card__preview-bar home-tool-card__preview-bar--accent" />
                      </div>
                      <span className="mt-3 text-[10px] font-bold uppercase tracking-wider text-accent-light">
                        {item.valueLabel}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
