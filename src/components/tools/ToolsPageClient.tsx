"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  GraduationCap,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { ToolCalculatorPanel } from "@/components/tools/ToolCalculators";
import { PageSection } from "@/components/PageSection";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  toolCategories,
  type ToolCategory,
  type ToolDefinition,
  type ToolId,
} from "@/lib/tools";
import { getToolTheme } from "@/lib/tools-theme";

const FEATURED_ID: ToolId = "runway";

function ToolCard({
  tool,
  active,
  onSelect,
}: {
  tool: ToolDefinition;
  active: boolean;
  onSelect: () => void;
}) {
  const theme = getToolTheme(tool);
  const Icon = theme.icon;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border text-left transition-all ${
        active
          ? "border-accent bg-white shadow-lg ring-2 ring-accent/20"
          : "border-ink/8 bg-white hover:border-accent/25 hover:shadow-md"
      }`}
    >
      <div
        className={`flex items-center gap-3 bg-gradient-to-r ${theme.gradient} px-4 py-3`}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
          <Icon size={18} className="text-white" strokeWidth={2} />
        </span>
        <span className="text-xs font-bold uppercase tracking-wide text-white/90">
          {tool.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-bold uppercase tracking-wide text-muted">
          {tool.valueLabel}
        </p>
        <h3 className="mt-1 font-display text-lg font-bold text-ink group-hover:text-accent">
          {tool.name}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
          {tool.desc}
        </p>
      </div>
    </button>
  );
}

type Props = { tools: ToolDefinition[] };

export function ToolsPageClient({ tools }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const toolParam = searchParams.get("tool") as ToolId | null;

  const [filter, setFilter] = useState<ToolCategory>("All");
  const activeId =
    toolParam && tools.some((tool) => tool.id === toolParam)
      ? toolParam
      : FEATURED_ID;

  const selectTool = (id: ToolId) => {
    router.replace(`/tools/?tool=${id}`, { scroll: false });
  };

  const activeTool = tools.find((t) => t.id === activeId) ?? tools[0];
  const theme = getToolTheme(activeTool);
  const ActiveIcon = theme.icon;

  const counts = useMemo(() => {
    const map: Partial<Record<ToolCategory, number>> = { All: tools.length };
    for (const t of tools) {
      map[t.category] = (map[t.category] ?? 0) + 1;
    }
    return map;
  }, [tools]);

  const filtered = useMemo(() => {
    const list =
      filter === "All" ? tools : tools.filter((t) => t.category === filter);
    if (filter === "All") {
      return list.filter((t) => t.id !== FEATURED_ID);
    }
    return list;
  }, [filter, tools]);

  const featured = tools.find((t) => t.id === FEATURED_ID)!;
  const featuredTheme = getToolTheme(featured);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-14">
        <div>
          {filter === "All" && (
            <PageSection className="mb-12">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-muted">
                Most used by founders
              </p>
              <button
                type="button"
                onClick={() => selectTool(featured.id)}
                className={`w-full overflow-hidden rounded-3xl border text-left transition-all ${
                  activeId === featured.id
                    ? "border-accent ring-2 ring-accent/20"
                    : "border-ink/8 hover:border-accent/30"
                }`}
              >
                <div className="grid bg-white lg:grid-cols-[1fr_1.1fr]">
                  <div
                    className={`flex flex-col justify-center bg-gradient-to-br ${featuredTheme.gradient} p-8 text-white lg:min-h-[200px]`}
                  >
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide">
                      <Sparkles size={12} />
                      Featured tool
                    </span>
                    <h2 className="mt-4 font-display text-2xl font-bold">
                      {featured.name}
                    </h2>
                    <p className="mt-2 text-sm text-white/80">
                      {featured.desc}
                    </p>
                  </div>
                  <div className="p-6 lg:p-8">
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      Try it now →
                    </p>
                    <p className="mt-3 text-sm text-muted">{featured.why}</p>
                  </div>
                </div>
              </button>
            </PageSection>
          )}

          <div className="flex flex-wrap gap-2 lg:hidden">
            {toolCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${
                  filter === cat
                    ? "bg-accent text-white"
                    : "border border-ink/10 bg-white text-muted"
                }`}
              >
                {cat}
                {counts[cat] != null ? ` (${counts[cat]})` : ""}
              </button>
            ))}
          </div>

          <h2 className="mt-8 font-display text-xl font-bold text-ink lg:mt-0">
            {filter === "All" ? "All calculators" : `${filter} tools`}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {filtered.map((tool, index) => (
              <li key={tool.id}>
                <RevealOnScroll delay={(index % 8) * 35} variant="subtle">
                  <ToolCard
                    tool={tool}
                    active={activeId === tool.id}
                    onSelect={() => selectTool(tool.id)}
                  />
                </RevealOnScroll>
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-3xl border border-ink/8 bg-white shadow-lg">
            <div
              className={`flex items-center gap-3 bg-gradient-to-r ${getToolTheme(activeTool).gradient} px-6 py-5 text-white`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                <ActiveIcon size={22} />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-white/70">
                  {activeTool.category}
                </p>
                <h2 className="font-display text-xl font-bold">
                  {activeTool.name}
                </h2>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm leading-relaxed text-muted">
                {activeTool.why}
              </p>

              <div className="mt-6 rounded-2xl border border-ink/6 bg-paper-warm p-5">
                <ToolCalculatorPanel toolId={activeTool.id} />
              </div>

              <div className="mt-6 rounded-xl border border-amber-200/60 bg-amber-50/80 p-4">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-amber-900">
                  <Lightbulb size={14} />
                  Founder tips
                </p>
                <ul className="mt-3 space-y-2">
                  {activeTool.tips.map((tip) => (
                    <li
                      key={tip.slice(0, 40)}
                      className="text-sm leading-relaxed text-amber-950/85"
                    >
                      • {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {(activeTool.relatedBlogSlug || activeTool.relatedLearnSlug) && (
                <div className="mt-6 space-y-2 border-t border-ink/6 pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted">
                    Go deeper
                  </p>
                  {activeTool.relatedBlogSlug && (
                    <Link
                      href={`/blog/${activeTool.relatedBlogSlug}`}
                      className="flex items-center justify-between rounded-xl border border-ink/8 px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/30 hover:bg-accent/5"
                    >
                      <span className="inline-flex items-center gap-2">
                        <BookOpen size={16} className="text-accent" />
                        Read guide
                      </span>
                      <ArrowRight size={14} className="text-muted" />
                    </Link>
                  )}
                  {activeTool.relatedLearnSlug && (
                    <Link
                      href={`/learn/${activeTool.relatedLearnSlug}`}
                      className="flex items-center justify-between rounded-xl border border-ink/8 px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/30 hover:bg-accent/5"
                    >
                      <span className="inline-flex items-center gap-2">
                        <GraduationCap size={16} className="text-accent" />
                        Learn lesson
                      </span>
                      <ArrowRight size={14} className="text-muted" />
                    </Link>
                  )}
                </div>
              )}

              <Link
                href="/contact"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy/90"
              >
                <Calculator size={16} />
                Get expert review
              </Link>
              <p className="mt-2 text-center text-xs text-muted">
                Indicative estimates only—not tax or legal advice.
              </p>
            </div>
          </div>

          <div className="mt-6 hidden space-y-2 lg:block">
            <p className="text-xs font-bold uppercase tracking-wider text-muted">
              Categories
            </p>
            {toolCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:bg-paper-warm hover:text-ink"
                }`}
              >
                {cat}
                <span className="rounded-md bg-ink/5 px-2 py-0.5 text-xs font-semibold">
                  {counts[cat] ?? 0}
                </span>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
