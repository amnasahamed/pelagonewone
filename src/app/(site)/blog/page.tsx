import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { BlogPageClient } from "@/components/blog/BlogPageClient";
import { PageHero } from "@/components/PageHero";
import { getBlogPosts } from "@/lib/blog-service";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Actionable guides for Indian founders — structure, GST, DPIIT, trademarks, and compliance with clear next steps.",
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  const topics = new Set(blogPosts.map((p) => p.category)).size;

  return (
    <>
      <PageHero
        badge={
          <>
            <BookOpen size={14} />
            Founder guides · India
          </>
        }
        title="Guides that save you money and mistakes"
        subtitle="Practical playbooks on structure, tax, and compliance — what to file, when to file it, and when to talk to an advisor. No jargon walls."
        actions={
          <>
            <a
              href="#guides"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-lg transition-all hover:bg-white/95 active:scale-[0.98]"
            >
              <FileText size={16} className="text-accent" />
              Browse guides
            </a>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Free Learn course
              <ArrowRight size={16} />
            </Link>
          </>
        }
        aside={
          <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md sm:gap-4 sm:p-6">
            <div className="text-center">
              <p className="font-display text-2xl font-bold sm:text-3xl">{blogPosts.length}</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/55 sm:text-xs">
                Guides
              </p>
            </div>
            <div className="border-x border-white/10 text-center">
              <p className="font-display text-2xl font-bold sm:text-3xl">{topics}</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/55 sm:text-xs">
                Topics
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl font-bold sm:text-3xl">Free</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/55 sm:text-xs">
                Always
              </p>
            </div>
          </div>
        }
      />

      <section
        id="guides"
        className="relative -mt-6 rounded-t-[2rem] border-t border-ink/6 bg-paper-warm pt-12 lg:pt-14"
      >
        <BlogPageClient posts={[...blogPosts]} />
      </section>
    </>
  );
}
