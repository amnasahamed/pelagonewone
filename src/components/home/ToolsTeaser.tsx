import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { ToolDefinition } from "@/lib/tools";
import { featuredTools } from "@/lib/home-content";

export function ToolsTeaser({ tools }: { tools: ToolDefinition[] }) {
  const items = featuredTools.flatMap((featured) => {
    const tool = tools.find((t) => t.id === featured.id);
    return tool ? [{ ...tool, label: featured.label }] : [];
  });
  return (
    <section className="editorial-section tools-editorial">
      <div className="editorial-container tools-layout">
        <RevealOnScroll>
          <p className="eyebrow">04 / A little clarity, on us</p>
          <h2>
            Know your numbers.
            <br />
            <span className="editorial-text">Find your footing.</span>
          </h2>
          <p className="section-description">
            Practical tools for everyday business decisions.
            <br />
            Free to use. No account needed.
          </p>
          <Link className="text-link" href="/tools">
            Explore all calculators <ArrowIcon diagonal />
          </Link>
        </RevealOnScroll>
        <div className="tools-list">
          {items.map((item, i) => (
            <RevealOnScroll key={item.id} delay={i * 60}>
              <Link href={`/tools?tool=${item.id}`} className="tool-editorial">
                <span className="tool-editorial__symbol" aria-hidden="true">
                  {i === 0 ? "%" : i === 1 ? "₹" : "↗"}
                </span>
                <span>
                  <small>{item.category} / Free tool</small>
                  <strong>{item.label}</strong>
                  <span>{item.valueLabel}</span>
                </span>
                <span className="round-arrow">
                  <ArrowIcon diagonal />
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
