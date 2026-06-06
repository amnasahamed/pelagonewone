import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { BlogArticleBody, BlogInlineCta } from "@/components/blog/BlogArticleBody";
import { CtaBand } from "@/components/CtaBand";
import { PageSection } from "@/components/PageSection";
import { getBlogPostBySlug, getBlogPosts, getBlogSlugs } from "@/lib/blog-service";
import { getBlogCategoryTheme } from "@/lib/blog-theme";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const blogPosts = await getBlogPosts();
  const theme = getBlogCategoryTheme(post.category);
  const Icon = theme.icon;

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const mid = Math.min(1, post.sections.length - 1);

  return (
    <>
      <article>
        <header
          className={`relative overflow-hidden bg-gradient-to-br ${theme.gradient} text-white`}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
            aria-hidden
          />
          <Icon
            className="pointer-events-none absolute -right-4 top-8 h-40 w-40 text-white/10 sm:right-8"
            strokeWidth={1}
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl px-5 py-14 lg:px-8 lg:py-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              ← All guides
            </Link>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide backdrop-blur-sm">
              {post.valueLabel}
            </span>
            <p className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/70">
              <span>{post.category}</span>
              <span className="text-white/40">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} />
                {post.readTime} read
              </span>
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              {post.excerpt}
            </p>
            <p className="mt-4 text-sm text-white/55">{post.date}</p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 py-12 lg:px-8">
          <PageSection variant="subtle">
          <div className="rounded-2xl border border-accent/15 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-accent">
              What you&apos;ll take away
            </p>
            <ul className="mt-4 space-y-3">
              {post.keyTakeaways.map((item) => (
                <li
                  key={item.slice(0, 48)}
                  className="flex gap-3 text-[1.02rem] leading-relaxed text-ink/90"
                >
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          </PageSection>

          <PageSection variant="rise" delay={80} className="prose prose-lg mt-12 max-w-none">
            <BlogArticleBody sections={post.sections.slice(0, mid + 1)} />
            <BlogInlineCta
              title={post.cta.title}
              subtitle={post.cta.subtitle}
              href={post.cta.href}
              buttonLabel={post.cta.buttonLabel}
            />
            <BlogArticleBody sections={post.sections.slice(mid + 1)} />
          </PageSection>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-ink/6 bg-paper-warm py-14">
          <PageSection variant="subtle" className="mx-auto max-w-3xl px-5 lg:px-8">
            <h2 className="font-display text-xl font-bold text-ink">Related guides</h2>
            <ul className="mt-6 space-y-4">
              {related.map((r) => {
                const rTheme = getBlogCategoryTheme(r.category);
                const RIcon = rTheme.icon;
                return (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="group flex gap-4 overflow-hidden rounded-2xl border border-ink/8 bg-white transition-all hover:border-accent/25 hover:shadow-md"
                    >
                      <div
                        className={`flex w-20 shrink-0 items-center justify-center bg-gradient-to-br sm:w-24 ${rTheme.gradient}`}
                      >
                        <RIcon className="text-white/90" size={28} strokeWidth={1.5} />
                      </div>
                      <div className="flex min-w-0 flex-1 items-center justify-between gap-3 py-4 pr-4">
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold uppercase tracking-wide text-accent">
                            {r.valueLabel}
                          </p>
                          <p className="mt-1 font-display font-bold text-ink group-hover:text-accent">
                            {r.title}
                          </p>
                          <p className="mt-1 line-clamp-2 text-sm text-muted">{r.excerpt}</p>
                        </div>
                        <ArrowRight
                          size={18}
                          className="hidden shrink-0 text-muted group-hover:text-accent sm:block"
                          aria-hidden
                        />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </PageSection>
        </section>
      )}

      <div className="pb-24">
        <CtaBand title={post.cta.title} subtitle={post.cta.subtitle} />
      </div>
    </>
  );
}
