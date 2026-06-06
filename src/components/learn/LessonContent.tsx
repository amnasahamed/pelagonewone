import { CheckCircle2, Lightbulb } from "lucide-react";
import type { TypedLessonSection } from "@/lib/learn-section-utils";

function ProseBlock({ paragraphs }: { paragraphs: string[] }) {
  if (!paragraphs.length) return null;

  return (
    <div className="mt-5 space-y-4">
      {paragraphs.map((para) => (
        <p key={para.slice(0, 48)} className="text-[1.05rem] leading-[1.75] text-muted">
          {para}
        </p>
      ))}
    </div>
  );
}

function ChecklistBlock({ items, prominent }: { items: string[]; prominent?: boolean }) {
  if (!items.length) return null;

  if (prominent) {
    return (
      <ul className="learn-checklist mt-6">
        {items.map((item) => (
          <li key={item.slice(0, 48)}>
            <CheckCircle2 size={18} className="shrink-0 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="mt-6 space-y-2.5">
      {items.map((item) => (
        <li key={item.slice(0, 48)} className="flex gap-3 text-[1.02rem] leading-relaxed text-muted">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TableBlock({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  const tableRows = headers.length ? [headers, ...rows] : rows;
  if (!tableRows.length) return null;

  return (
    <div className="learn-table-wrap mt-6 overflow-hidden rounded-xl border border-ink/8">
      <table className="learn-table w-full text-left text-sm">
        <tbody>
          {tableRows.map((cells, ri) => {
            const isHeader = ri === 0 && headers.length > 0;
            return (
              <tr
                key={cells.join("-").slice(0, 40)}
                className={
                  isHeader
                    ? "bg-ink/[0.04] font-semibold text-ink"
                    : "border-t border-ink/6 text-muted"
                }
              >
                {cells.map((cell) => (
                  <td key={cell} className="px-4 py-3.5">
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function TipBlock({ body }: { body: string }) {
  const paragraphs = body.split("\n\n").filter(Boolean);
  if (!paragraphs.length) return null;

  return (
    <div className="learn-tip mt-5">
      <Lightbulb size={20} className="shrink-0 text-amber-600" />
      <div className="space-y-3">
        {paragraphs.map((para) => (
          <p key={para.slice(0, 48)} className="text-[1.02rem] leading-relaxed text-ink/85">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

function LessonSectionBlock({ section, idx }: { section: TypedLessonSection; idx: number }) {
  const { sectionType, heading } = section;

  return (
    <section className="scroll-mt-28" id={`section-${idx}`}>
      <div className="flex items-start gap-3">
        <span
          className="mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent"
          aria-hidden
        >
          {idx + 1}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink">{heading}</h2>

          {sectionType === "tip" ? (
            <TipBlock body={section.tipBody} />
          ) : sectionType === "prose" ? (
            <ProseBlock paragraphs={section.paragraphs} />
          ) : sectionType === "checklist" ? (
            <ChecklistBlock items={section.items} prominent />
          ) : sectionType === "table" ? (
            <TableBlock headers={section.tableHeaders} rows={section.tableRows} />
          ) : (
            <>
              <ProseBlock paragraphs={section.paragraphs} />
              <ChecklistBlock items={section.items} prominent={section.items.length >= 2} />
              <TableBlock headers={section.tableHeaders} rows={section.tableRows} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export function LessonContent({ sections }: { sections: TypedLessonSection[] }) {
  return (
    <div className="learn-prose space-y-12">
      {sections.map((section, idx) => (
        <LessonSectionBlock key={`${section.heading}-${idx}`} section={section} idx={idx} />
      ))}
    </div>
  );
}
