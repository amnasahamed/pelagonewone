export type LessonSectionType = "prose" | "checklist" | "table" | "tip" | "mixed";

export type TypedLessonSection = {
  sectionType: LessonSectionType;
  heading: string;
  paragraphs: string[];
  items: string[];
  tableHeaders: string[];
  tableRows: string[][];
  tipBody: string;
};

export type LegacyLessonSection = { heading: string; paragraphs: string[] };

export function isTipSection(heading: string): boolean {
  return /tip|recommendation|callout/i.test(heading);
}

export function isChecklistSection(heading: string, paragraphs: string[]): boolean {
  if (/step|checklist|guide|action item|documents|prepare/i.test(heading)) return true;
  return paragraphs.filter((p) => p.startsWith("•")).length >= 2;
}

export function isTableSection(paragraphs: string[]): boolean {
  return paragraphs.some((p) => p.includes(" | ") && !p.startsWith("•"));
}

export function convertLegacySection(section: LegacyLessonSection): TypedLessonSection {
  const { heading, paragraphs } = section;
  const bullets = paragraphs.filter((p) => p.startsWith("•")).map((p) => p.replace(/^•\s*/, ""));
  const tableLines = paragraphs.filter((p) => p.includes(" | ") && !p.startsWith("•"));
  const prose = paragraphs.filter(
    (p) => !p.startsWith("•") && !(p.includes(" | ") && tableLines.length > 0),
  );

  if (isTipSection(heading)) {
    return {
      sectionType: "tip",
      heading,
      paragraphs: [],
      items: [],
      tableHeaders: [],
      tableRows: [],
      tipBody: paragraphs.map((p) => p.replace(/^•\s*/, "")).join("\n\n"),
    };
  }

  if (isTableSection(paragraphs) && tableLines.length > 0) {
    const headers = tableLines[0].split(" | ").map((c) => c.trim());
    const rows = tableLines.slice(1).map((row) => row.split(" | ").map((c) => c.trim()));
    const hasOtherContent = prose.length > 0 || bullets.length > 0;

    if (hasOtherContent) {
      return {
        sectionType: "mixed",
        heading,
        paragraphs: prose,
        items: bullets,
        tableHeaders: headers,
        tableRows: rows,
        tipBody: "",
      };
    }

    return {
      sectionType: "table",
      heading,
      paragraphs: [],
      items: [],
      tableHeaders: headers,
      tableRows: rows,
      tipBody: "",
    };
  }

  if (isChecklistSection(heading, paragraphs) && bullets.length > 0) {
    const hasProse = prose.length > 0;
    if (hasProse) {
      return {
        sectionType: "mixed",
        heading,
        paragraphs: prose,
        items: bullets,
        tableHeaders: [],
        tableRows: [],
        tipBody: "",
      };
    }

    return {
      sectionType: "checklist",
      heading,
      paragraphs: [],
      items: bullets,
      tableHeaders: [],
      tableRows: [],
      tipBody: "",
    };
  }

  if (bullets.length > 0 && prose.length > 0) {
    return {
      sectionType: "mixed",
      heading,
      paragraphs: prose,
      items: bullets,
      tableHeaders: [],
      tableRows: [],
      tipBody: "",
    };
  }

  if (bullets.length > 0) {
    return {
      sectionType: "checklist",
      heading,
      paragraphs: [],
      items: bullets,
      tableHeaders: [],
      tableRows: [],
      tipBody: "",
    };
  }

  return {
    sectionType: "prose",
    heading,
    paragraphs,
    items: [],
    tableHeaders: [],
    tableRows: [],
    tipBody: "",
  };
}

export function extractKeyTakeaways(
  sections: LegacyLessonSection[],
  summary: string,
): string[] {
  const prioritySection = sections.find((s) =>
    /action item|key takeaway|pro tip|takeaway|checklist|what you'll|founder checklist/i.test(
      s.heading,
    ),
  );

  if (prioritySection) {
    const bullets = prioritySection.paragraphs
      .filter((p) => p.startsWith("•"))
      .map((p) => p.replace(/^•\s*/, ""));
    if (bullets.length >= 2) return bullets.slice(0, 5);
  }

  for (let i = sections.length - 1; i >= 0; i -= 1) {
    const bullets = sections[i].paragraphs
      .filter((p) => p.startsWith("•"))
      .map((p) => p.replace(/^•\s*/, ""));
    if (bullets.length >= 2) return bullets.slice(0, 5);
  }

  const firstSentence = summary.split(/(?<=[.!?])\s+/)[0]?.trim();
  return firstSentence ? [firstSentence] : [summary.slice(0, 160)];
}

/** Flatten typed section for components that still read paragraphs[]. */
export function flattenSection(section: TypedLessonSection): LegacyLessonSection {
  const paragraphs: string[] = [...section.paragraphs];

  if (section.tipBody) {
    return { heading: section.heading, paragraphs: section.tipBody.split("\n\n").filter(Boolean) };
  }

  if (section.items.length) {
    paragraphs.push(...section.items.map((item) => `• ${item}`));
  }

  if (section.tableHeaders.length) {
    paragraphs.push(section.tableHeaders.join(" | "));
    section.tableRows.forEach((row) => paragraphs.push(row.join(" | ")));
  }

  return { heading: section.heading, paragraphs };
}

export function normalizeCmsSection(raw: {
  sectionType?: LessonSectionType;
  heading: string;
  paragraphs?: string[];
  items?: string[];
  tableHeaders?: string[];
  tableRows?: Array<{ cells?: string[] } | string[]>;
  tipBody?: string;
}): TypedLessonSection {
  if (raw.sectionType) {
    const tableRows = (raw.tableRows ?? []).map((row) =>
      Array.isArray(row) ? row : (row.cells ?? []),
    );

    return {
      sectionType: raw.sectionType,
      heading: raw.heading,
      paragraphs: raw.paragraphs ?? [],
      items: raw.items ?? [],
      tableHeaders: raw.tableHeaders ?? [],
      tableRows,
      tipBody: raw.tipBody ?? "",
    };
  }

  return convertLegacySection({
    heading: raw.heading,
    paragraphs: raw.paragraphs ?? [],
  });
}
