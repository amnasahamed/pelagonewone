/**
 * Import all static content into Sanity.
 *
 * Requires in .env.local:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET
 *   SANITY_API_WRITE_TOKEN (Editor)
 *
 * Run: npm run sanity:migrate
 */
import { createClient } from "@sanity/client";
import { randomBytes } from "crypto";
import { readFileSync } from "fs";
import { resolve } from "path";
import { blogPosts } from "../src/lib/blog";
import { serviceBlogByName } from "../src/lib/blog-services";
import { careerRoles } from "../src/lib/careers-content";
import { clients, clientsWithLogos } from "../src/lib/clients-content";
import { faqs } from "../src/lib/data";
import { serviceSections } from "../src/lib/data";
import { homeExtraFaqs, testimonials } from "../src/lib/home-content";
import { staticHomePage } from "../src/lib/home-types";
import { learnModules } from "../src/lib/learn";
import { lessonContentById } from "../src/lib/lesson-content";
import {
  convertLegacySection,
  extractKeyTakeaways,
} from "../src/lib/learn-section-utils";
import { serviceExtras } from "../src/lib/service-extras";
import { tools } from "../src/lib/tools";

function loadEnvLocal() {
  const envPath = resolve(process.cwd(), ".env.local");
  const content = readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    process.env[key] = value;
  }
}

loadEnvLocal();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

function makeKey(prefix: string, index: number): string {
  return `${prefix}-${index}-${randomBytes(6).toString("hex")}`;
}

/** Sanity requires _key on object items inside arrays for Studio list editing. */
function keyedObjects<T extends Record<string, unknown>>(
  items: T[],
  prefix: string,
): Array<T & { _key: string }> {
  return items.map((item, index) => ({
    ...item,
    _key: makeKey(prefix, index),
  }));
}

function mapBlogSection(section: (typeof blogPosts)[0]["sections"][0], index: number) {
  return {
    _key: makeKey("section", index),
    _type: "section",
    heading: section.heading,
    paragraphs: section.paragraphs,
    ...(section.callout ? { callout: section.callout } : {}),
  };
}

function mapLessonSection(
  section: { heading: string; paragraphs: string[] },
  index: number,
) {
  const typed = convertLegacySection(section);

  return {
    _key: makeKey("section", index),
    _type: "lessonSection",
    sectionType: typed.sectionType,
    heading: typed.heading,
    ...(typed.paragraphs.length ? { paragraphs: typed.paragraphs } : {}),
    ...(typed.items.length ? { items: typed.items } : {}),
    ...(typed.tableHeaders.length ? { tableHeaders: typed.tableHeaders } : {}),
    ...(typed.tableRows.length
      ? {
          tableRows: typed.tableRows.map((cells, rowIndex) => ({
            _key: makeKey("row", rowIndex),
            _type: "tableRow",
            cells,
          })),
        }
      : {}),
    ...(typed.tipBody ? { tipBody: typed.tipBody } : {}),
  };
}

const defaultLessonCta = {
  title: "Questions about this lesson?",
  subtitle:
    "Talk to a Pelago advisor — we'll map the right structure and compliance for your stage.",
  href: "/contact",
  buttonLabel: "Book a consultation",
};

function toIsoDate(displayDate: string): string {
  const parsed = new Date(displayDate);
  if (Number.isNaN(parsed.getTime())) return "2024-01-01";
  return parsed.toISOString().slice(0, 10);
}

const featuredClientNames = new Set(
  clientsWithLogos.slice(2, 14).map((c) => c.name),
);

const documents: Array<{ _id: string; _type: string; [key: string]: unknown }> = [];

// Blog posts
for (const post of blogPosts) {
  documents.push({
    _id: `blogPost-${post.slug}`,
    _type: "blogPost",
    title: post.title,
    slug: { _type: "slug", current: post.slug },
    category: post.category,
    publishedAt: toIsoDate(post.date),
    readTime: post.readTime,
    excerpt: post.excerpt,
    valueLabel: post.valueLabel,
    keyTakeaways: post.keyTakeaways,
    cta: post.cta,
    sections: post.sections.map(mapBlogSection),
  });
}

// Learn modules
for (const mod of learnModules) {
  documents.push({
    _id: `learnModule-${mod.num}`,
    _type: "learnModule",
    num: mod.num,
    title: mod.title,
    duration: mod.duration,
  });
}

// Learn lessons
for (const mod of learnModules) {
  mod.items.forEach((lesson, orderInModule) => {
    const content = lessonContentById[lesson.id];
    if (!content) {
      console.warn(`Missing lesson content for: ${lesson.id}`);
      return;
    }
    documents.push({
      _id: `learnLesson-${lesson.id}`,
      _type: "learnLesson",
      title: lesson.title,
      slug: { _type: "slug", current: lesson.id },
      duration: lesson.duration,
      summary: lesson.summary,
      module: { _type: "reference", _ref: `learnModule-${mod.num}` },
      orderInModule,
      keyTakeaways: extractKeyTakeaways(content.sections, lesson.summary),
      cta: defaultLessonCta,
      sections: content.sections.map(mapLessonSection),
    });
  });
}

// Clients
clients.forEach((c, order) => {
  const id = `client-${order}`;
  documents.push({
    _id: id,
    _type: "client",
    name: c.name,
    ...(c.logo ? { logoPath: c.logo } : {}),
    featured: featuredClientNames.has(c.name),
    order,
  });
});

// Service sections
serviceSections.forEach((section, order) => {
  documents.push({
    _id: `serviceSection-${section.id}`,
    _type: "serviceSection",
    sectionId: section.id,
    title: section.title,
    subtitle: section.subtitle,
    order,
    items: keyedObjects(
      section.items.map((item) => {
        const extra = serviceExtras[item.name as keyof typeof serviceExtras];
        const blogSlug = serviceBlogByName[item.name as keyof typeof serviceBlogByName];
        return {
          _type: "serviceItem",
          name: item.name,
          timeline: item.timeline,
          desc: item.desc,
          ...(extra?.valueLabel ? { valueLabel: extra.valueLabel } : {}),
          ...(extra?.toolId ? { toolId: extra.toolId } : {}),
          ...(extra?.learnSlug ? { learnSlug: extra.learnSlug } : {}),
          ...(blogSlug ? { blogSlug } : {}),
        };
      }),
      `service-${section.id}`,
    ),
  });
});

// Tools
tools.forEach((tool, order) => {
  documents.push({
    _id: `tool-${tool.id}`,
    _type: "tool",
    toolId: tool.id,
    name: tool.name,
    category: tool.category,
    desc: tool.desc,
    valueLabel: tool.valueLabel,
    why: tool.why,
    tips: tool.tips,
    ...(tool.relatedBlogSlug ? { relatedBlogSlug: tool.relatedBlogSlug } : {}),
    ...(tool.relatedLearnSlug ? { relatedLearnSlug: tool.relatedLearnSlug } : {}),
    order,
  });
});

// Career roles
careerRoles.forEach((role, order) => {
  documents.push({
    _id: `careerRole-${role.id}`,
    _type: "careerRole",
    title: role.title,
    slug: { _type: "slug", current: role.id },
    location: role.location,
    type: role.type,
    summary: role.summary,
    responsibilities: role.responsibilities,
    youAre: role.youAre,
    order,
  });
});

// Testimonials
testimonials.forEach((t, order) => {
  documents.push({
    _id: `testimonial-${order}`,
    _type: "testimonial",
    quote: t.quote,
    name: t.name,
    role: t.role,
    location: t.location,
    service: t.service,
    rating: t.rating,
    order,
  });
});

// FAQs
const allFaqs = [...faqs, ...homeExtraFaqs];
allFaqs.forEach((f, order) => {
  documents.push({
    _id: `faq-${order}`,
    _type: "faq",
    question: f.q,
    answer: f.a,
    order,
  });
});

// Home page singleton
documents.push({
  _id: "homePage",
  _type: "homePage",
  hero: {
    badge: staticHomePage.hero.badge,
    headlineHighlight: staticHomePage.hero.headlineHighlight,
    headlineSub: staticHomePage.hero.headlineSub,
    description: staticHomePage.hero.description,
    pills: staticHomePage.hero.pills,
    journeySteps: keyedObjects(
      staticHomePage.hero.journeySteps.map((s) => ({
        _type: "journeyStep",
        title: s.title,
        detail: s.detail,
        status: s.status,
      })),
      "journey",
    ),
    journeyFooter: staticHomePage.hero.journeyFooter,
  },
  whySection: {
    eyebrow: staticHomePage.whySection.eyebrow,
    title: staticHomePage.whySection.title,
    subtitle: staticHomePage.whySection.subtitle,
    blocks: keyedObjects(
      staticHomePage.whySection.blocks.map((b) => ({
        _type: "whyBlock",
        eyebrow: b.eyebrow,
        title: b.title,
        body: b.body,
        imageKey: b.imageKey,
        points: b.points,
        href: b.href,
        cta: b.cta,
      })),
      "why",
    ),
  },
  processSteps: keyedObjects(
    staticHomePage.processSteps.map((s) => ({
      _type: "processStep",
      step: s.step,
      title: s.title,
      desc: s.desc,
      deliverable: s.deliverable,
    })),
    "process",
  ),
  comparison: staticHomePage.comparison,
  teamTrust: staticHomePage.teamTrust,
  serviceHighlights: keyedObjects(
    staticHomePage.serviceHighlights.map((h) => ({
      _type: "serviceHighlight",
      sectionId: h.sectionId,
      fromPrice: h.fromPrice,
      timeline: h.timeline,
    })),
    "highlight",
  ),
  cta: staticHomePage.cta,
});

console.log(`Importing ${documents.length} documents to Sanity (${projectId}/${dataset})…`);

async function main() {
  const CHUNK = 100;
  for (let i = 0; i < documents.length; i += CHUNK) {
    const batch = documents.slice(i, i + CHUNK);
    const tx = client.transaction();
    for (const doc of batch) {
      tx.createOrReplace(doc);
    }
    await tx.commit();
    console.log(`  ${Math.min(i + CHUNK, documents.length)} / ${documents.length}`);
  }

  console.log("Done. Open http://localhost:3000/studio/ to review content.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
