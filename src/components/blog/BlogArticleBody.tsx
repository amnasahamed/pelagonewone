import Link from "next/link";
import { ArrowRight, CheckCircle2, Lightbulb } from "lucide-react";
import type { BlogSection } from "@/lib/blog";

function isChecklist(paragraphs: string[]) {
  return paragraphs.filter((p) => p.startsWith("•")).length >= 2;
}

function isTable(paragraphs: string[]) {
  return paragraphs.some((p) => p.includes(" | ") && !p.startsWith("•"));
}

export function BlogArticleBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="space-y-12">
      {sections.map((section, idx) => (
        <section key={section.heading} id={`section-${idx}`} className="scroll-mt-28">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
            {section.heading}
          </h2>

          {isChecklist(section.paragraphs) ? (
            <ul className="mt-6 space-y-3">
              {section.paragraphs
                .filter((p) => p.startsWith("•"))
                .map((item) => (
                  <li
                    key={item.slice(0, 48)}
                    className="flex gap-3 text-[1.05rem] leading-relaxed text-muted"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden
                    />
                    <span>{item.replace(/^•\s*/, "")}</span>
                  </li>
                ))}
            </ul>
          ) : null}

          {section.paragraphs
            .filter((p) => !p.startsWith("•") && !(isTable(section.paragraphs) && p.includes(" | ")))
            .map((para) => (
              <p key={para.slice(0, 48)} className="mt-5 text-[1.05rem] leading-[1.75] text-muted">
                {para}
              </p>
            ))}

          {isTable(section.paragraphs) && (
            <div className="mt-6 overflow-x-auto rounded-xl border border-ink/8">
              <table className="w-full min-w-[280px] text-left text-sm">
                <tbody>
                  {section.paragraphs
                    .filter((p) => p.includes(" | "))
                    .map((row, rowIdx) => {
                      const cells = row.split(" | ").map((c) => c.trim());
                      const Tag = rowIdx === 0 ? "th" : "td";
                      return (
                        <tr
                          key={row.slice(0, 40)}
                          className={rowIdx === 0 ? "bg-ink/5 font-semibold text-ink" : "border-t border-ink/6 text-muted"}
                        >
                          {cells.map((cell) => (
                            <Tag key={cell.slice(0, 24)} className="px-4 py-3">
                              {cell}
                            </Tag>
                          ))}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          )}

          {section.callout && (
            <div className="mt-6 flex gap-3 rounded-xl border border-accent/20 bg-accent/5 p-5">
              <Lightbulb size={22} className="shrink-0 text-accent" aria-hidden />
              <p className="text-[1.02rem] leading-relaxed text-ink/90">{section.callout}</p>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

export function BlogInlineCta({
  title,
  subtitle,
  href,
  buttonLabel,
}: {
  title: string;
  subtitle: string;
  href: string;
  buttonLabel: string;
}) {
  return (
    <div className="my-12 rounded-2xl border border-accent/20 bg-gradient-to-br from-navy to-navy/95 p-8 text-white shadow-lg">
      <h3 className="font-display text-xl font-bold tracking-tight">{title}</h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70">{subtitle}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
      >
        {buttonLabel}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
