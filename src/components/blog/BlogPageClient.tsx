"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock,
  MessageCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { BlogCategory, BlogPost } from "@/lib/blog";
import { blogCategories } from "@/lib/blog";
import { site } from "@/lib/site";
import { getBlogCategoryTheme } from "@/lib/blog-theme";
import { BlogCategoryVisual } from "@/components/blog/BlogCategoryVisual";
import { PageSection } from "@/components/PageSection";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const FEATURED_SLUG = "pvt-ltd-vs-llp-guide-2024";

function CategoryHeader({ post }: { post: BlogPost }) {
  return (
    <BlogCategoryVisual
      category={post.category}
      className="aspect-[16/9] rounded-t-2xl"
      iconClassName="h-16 w-16"
    />
  );
}

function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const theme = getBlogCategoryTheme(post.category);

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group relative grid overflow-hidden rounded-3xl border border-ink/8 bg-white shadow-lg transition-all hover:border-accent/30 hover:shadow-xl lg:grid-cols-[1.15fr_1fr]"
      >
        <CategoryHeader post={post} />
        <div className="flex flex-col justify-center p-8 lg:p-10">
          <span
            className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${theme.chip}`}
          >
            <Sparkles size={12} />
            Featured guide
          </span>
          <p className="mt-4 text-sm font-medium text-muted">{post.valueLabel}</p>
          <h2 className="mt-2 font-display text-2xl font-bold leading-snug text-ink transition-colors group-hover:text-accent sm:text-3xl">
            {post.title}
          </h2>
          <p className="mt-4 line-clamp-3 text-base leading-relaxed text-muted">
            {post.excerpt}
          </p>
          <ul className="mt-6 space-y-2">
            {post.keyTakeaways.slice(0, 2).map((t) => (
              <li
                key={t.slice(0, 40)}
                className="flex gap-2 text-sm leading-relaxed text-ink/80"
              >
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current ${theme.accent}`} />
                <span className="line-clamp-2">{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">
            Read full guide
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card group flex h-full flex-col overflow-hidden p-0 transition-transform hover:-translate-y-0.5"
    >
      <CategoryHeader post={post} />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold text-muted">{post.valueLabel}</p>
        <h2 className="mt-2 font-display text-lg font-bold leading-snug text-ink group-hover:text-accent">
          {post.title}
        </h2>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-ink/6 pt-4 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <Clock size={14} className="text-ink/30" />
            {post.readTime}
          </span>
          <span className="font-semibold text-accent group-hover:underline">
            Read →
          </span>
        </div>
      </div>
    </Link>
  );
}

export function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  const [filter, setFilter] = useState<BlogCategory>("All");

  const counts = useMemo(() => {
    const map: Partial<Record<BlogCategory, number>> = { All: posts.length };
    for (const p of posts) {
      map[p.category] = (map[p.category] ?? 0) + 1;
    }
    return map;
  }, [posts]);

  const featured = posts.find((p) => p.slug === FEATURED_SLUG) ?? posts[0];

  const filtered = useMemo(() => {
    const list =
      filter === "All" ? posts : posts.filter((p) => p.category === filter);
    if (filter === "All") {
      return list.filter((p) => p.slug !== featured.slug);
    }
    return list;
  }, [posts, filter, featured.slug]);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-14">
        <div>
          {filter === "All" && (
            <PageSection className="mb-12">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-muted">
                Start here
              </p>
              <PostCard post={featured} featured />
            </PageSection>
          )}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-bold text-ink">
                {filter === "All" ? "All guides" : filter}
              </h2>
              <p className="mt-1 text-sm text-muted">
                {filter === "All"
                  ? `${posts.length} articles for Indian founders`
                  : `${filtered.length} guide${filtered.length === 1 ? "" : "s"} in this topic`}
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-2 overflow-x-auto pb-2 lg:hidden">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  filter === cat
                    ? "bg-accent text-white shadow-md"
                    : "border border-ink/10 bg-white text-muted"
                }`}
              >
                {cat}
                {counts[cat] != null ? ` (${counts[cat]})` : ""}
              </button>
            ))}
          </div>

          <ul className="mt-8 grid gap-8 sm:grid-cols-2">
            {filtered.map((post, index) => (
              <li key={post.slug}>
                <RevealOnScroll delay={(index % 6) * 40} variant="subtle">
                  <PostCard post={post} />
                </RevealOnScroll>
              </li>
            ))}
          </ul>

          {filtered.length === 0 && (
            <div className="mt-16 rounded-2xl border border-dashed border-ink/15 bg-white px-8 py-16 text-center">
              <p className="font-display text-lg font-bold text-ink">No guides here yet</p>
              <p className="mt-2 text-sm text-muted">Try another category.</p>
              <button
                type="button"
                onClick={() => setFilter("All")}
                className="mt-6 text-sm font-semibold text-accent hover:underline"
              >
                View all articles
              </button>
            </div>
          )}

          <PageSection delay={120} className="relative mt-16 overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white sm:px-12">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/40 blur-3xl"
              aria-hidden
            />
            <MessageCircle className="relative mx-auto text-accent-light" size={32} />
            <h2 className="relative mt-4 font-display text-2xl font-bold">
              Need help with a filing deadline?
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/65">
              Ask our team about GST due dates, ROC filings, or your next steps. Start a conversation on WhatsApp.
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#276852] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1e5140] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Chat on WhatsApp <ArrowRight size={16} aria-hidden="true" />
            </a>
          </PageSection>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-2xl border border-ink/8 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">
                Browse by topic
              </p>
              <ul className="mt-4 space-y-1">
                {blogCategories.map((cat) => {
                  const active = filter === cat;
                  return (
                    <li key={cat}>
                      <button
                        type="button"
                        onClick={() => setFilter(cat)}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                          active
                            ? "bg-accent/10 text-accent"
                            : "text-muted hover:bg-paper-warm hover:text-ink"
                        }`}
                      >
                        <span>{cat}</span>
                        <span
                          className={`rounded-md px-2 py-0.5 text-xs font-semibold ${
                            active ? "bg-accent/15" : "bg-ink/5"
                          }`}
                        >
                          {counts[cat] ?? 0}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-2xl border border-accent/15 bg-gradient-to-br from-accent/5 to-transparent p-5">
              <BookOpen className="text-accent" size={22} />
              <p className="mt-3 font-display text-lg font-bold text-ink">
                Want a full course?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Our free Learn track covers incorporation through exits — structured like an
                LMS.
              </p>
              <Link
                href="/learn"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
              >
                Open Learn
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="rounded-2xl border border-ink/8 bg-paper-warm p-5">
              <TrendingUp className="text-accent" size={22} />
              <p className="mt-3 text-sm font-semibold text-ink">Run the numbers</p>
              <p className="mt-1 text-sm text-muted">
                GST, runway, dilution — free calculators built for India.
              </p>
              <Link
                href="/tools"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
              >
                Free tools
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
