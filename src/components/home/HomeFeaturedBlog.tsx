import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCategoryVisual } from "@/components/blog/BlogCategoryVisual";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { BlogPost } from "@/lib/blog";
import { cn } from "@/lib/utils";

type Props = {
  posts: readonly BlogPost[];
};

export function HomeFeaturedBlog({ posts }: Props) {
  const [featured, ...rest] = posts;

  return (
    <section className="home-section-pad home-surface-warm border-t border-ink/6">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll variant="rise">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Resources"
              title="Guides founders actually read"
              subtitle="Registration, tax, and compliance — explained clearly."
            />
            <Button href="/blog" variant="secondary" className="shrink-0">
              All articles
            </Button>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-7">
          {featured ? (
            <RevealOnScroll variant="rise" className="lg:row-span-2">
              <BlogCard post={featured} featured />
            </RevealOnScroll>
          ) : null}

          <div className="grid gap-6 sm:grid-cols-2 lg:col-start-2 lg:grid-cols-1">
            {rest.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={90 + i * 70} variant="rise">
                <BlogCard post={post} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post, featured }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "card group flex h-full overflow-hidden p-0 transition-all duration-300",
        featured
          ? "hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(18,29,64,0.22)]"
          : "hover:-translate-y-1",
      )}
    >
      <div className={cn("flex h-full w-full flex-col", featured && "lg:flex-row")}>
        <div
          className={cn(
            "overflow-hidden",
            featured ? "lg:w-[44%] lg:shrink-0" : "w-full",
          )}
        >
          <BlogCategoryVisual
            category={post.category}
            className={cn(
              "rounded-none transition-transform duration-500 group-hover:scale-[1.03]",
              featured ? "min-h-[200px] lg:min-h-full lg:rounded-l-2xl lg:rounded-r-none" : "rounded-t-2xl",
            )}
          />
        </div>
        <div className={cn("flex flex-1 flex-col p-6", featured && "lg:p-8")}>
          <span className="home-blog-chip">{post.category}</span>
          <h3
            className={cn(
              "mt-3 font-display font-bold leading-snug text-ink group-hover:text-accent",
              featured ? "text-2xl" : "text-lg",
            )}
          >
            {post.title}
          </h3>
          <p
            className={cn(
              "mt-2 line-clamp-2 text-sm leading-relaxed text-muted",
              featured && "line-clamp-3 lg:text-base",
            )}
          >
            {post.excerpt}
          </p>
          <p className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs font-medium text-muted/80">
            <span>
              {post.readTime} · {post.date}
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Read
              <ArrowRight size={12} />
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
