import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { BlogPost } from "@/lib/blog";

export function HomeFeaturedBlog({ posts }: { posts: readonly BlogPost[] }) {
  const [featured, ...rest] = posts;
  if (!featured) return null;
  return (
    <section className="editorial-section journal-editorial">
      <div className="editorial-container">
        <RevealOnScroll>
          <div className="section-intro">
            <div>
              <p className="eyebrow">05 / The founder’s reading room</p>
              <h2>
                A fresh perspective.
                <br />
                <span className="editorial-text">A clearer next step.</span>
              </h2>
            </div>
            <Link href="/blog" className="text-link">
              From the journal <ArrowIcon diagonal />
            </Link>
          </div>
        </RevealOnScroll>
        <div className="journal-layout">
          <RevealOnScroll>
            <Link href={`/blog/${featured.slug}`} className="journal-feature">
              <div className="journal-cover" aria-hidden="true">
                <span className="journal-cover__label">
                  PELAGO / FIELD NOTES
                </span>
                <Image
                  src="/images/editorial/founders-journal.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 700px) 90vw, 45vw"
                  className="journal-cover__image"
                />
                <span className="journal-cover__title">
                  A business
                  <br />
                  built to last.
                </span>
                <span className="journal-cover__edition">
                  {featured.category} ↗
                </span>
              </div>
              <div className="journal-feature__copy">
                <span className="eyebrow">
                  {featured.category} · {featured.readTime} read
                </span>
                <h3>{featured.title}</h3>
                <p>{featured.excerpt}</p>
                <span className="text-link">
                  Read the guide <ArrowIcon />
                </span>
              </div>
            </Link>
          </RevealOnScroll>
          <div className="journal-list">
            {rest.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={i * 70}>
                <Link className="journal-row" href={`/blog/${post.slug}`}>
                  <span className="eyebrow">
                    {post.category} · {post.readTime} read
                  </span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="text-link">
                    Read article <ArrowIcon diagonal />
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
            <Link href="/learn" className="journal-learn">
              <span>
                <small>A LITTLE KNOWLEDGE GOES A LONG WAY</small>
                <strong>Meet the learning centre.</strong>
              </span>
              <ArrowIcon diagonal />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
