import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function HomeFaq({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  return (
    <section className="editorial-section faq-editorial">
      <div className="editorial-container faq-layout">
        <RevealOnScroll>
          <p className="eyebrow">06 / A few things, answered</p>
          <h2>
            Good questions.
            <br />
            <span className="editorial-text">Clear answers.</span>
          </h2>
          <p className="section-description">
            Every business is different.
            <br />
            We’re here to help you figure it out.
          </p>
          <Link className="text-link" href="/contact">
            Ask us anything <ArrowIcon diagonal />
          </Link>
        </RevealOnScroll>
        <div className="faq-list">
          {items.map((item, i) => (
            <details key={item.q} className="editorial-faq" open={i === 0}>
              <summary>
                <span>{item.q}</span>
                <span className="faq-plus" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
