import { defineArrayMember, defineField, defineType } from "sanity";

const imageKeyOptions = [
  { title: "Services / start", value: "servicesStart" },
  { title: "Contact", value: "contact" },
  { title: "About team", value: "aboutTeam" },
  { title: "About office", value: "aboutOffice" },
  { title: "Services / tax", value: "servicesTax" },
  { title: "Careers", value: "careers" },
  { title: "Hero", value: "hero" },
  { title: "Blog default", value: "blogDefault" },
];

const journeyStatusOptions = [
  { title: "Complete", value: "complete" },
  { title: "Active", value: "active" },
  { title: "Upcoming", value: "upcoming" },
];

export const homePage = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "badge", title: "Badge", type: "string" }),
        defineField({ name: "headlineHighlight", title: "Headline highlight", type: "string" }),
        defineField({ name: "headlineSub", title: "Headline subline", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
        defineField({
          name: "pills",
          title: "Outcome pills",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "journeySteps",
          title: "Journey steps",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "journeyStep",
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "detail", title: "Detail", type: "string" }),
                defineField({
                  name: "status",
                  title: "Status",
                  type: "string",
                  options: { list: journeyStatusOptions },
                }),
              ],
              preview: { select: { title: "title", subtitle: "status" } },
            }),
          ],
        }),
        defineField({ name: "journeyFooter", title: "Journey footer", type: "string" }),
      ],
    }),
    defineField({
      name: "whySection",
      title: "Why us",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2 }),
        defineField({
          name: "blocks",
          title: "Blocks",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "whyBlock",
              fields: [
                defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
                defineField({
                  name: "imageKey",
                  title: "Image",
                  type: "string",
                  options: { list: imageKeyOptions },
                }),
                defineField({
                  name: "points",
                  title: "Bullet points",
                  type: "array",
                  of: [defineArrayMember({ type: "string" })],
                }),
                defineField({ name: "href", title: "Link", type: "string" }),
                defineField({ name: "cta", title: "Link label", type: "string" }),
              ],
              preview: { select: { title: "title", subtitle: "eyebrow" } },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "processSteps",
      title: "Process steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "processStep",
          fields: [
            defineField({ name: "step", title: "Step label", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "desc", title: "Description", type: "text", rows: 2 }),
            defineField({ name: "deliverable", title: "Deliverable", type: "string" }),
          ],
          preview: { select: { title: "title", subtitle: "step" } },
        }),
      ],
    }),
    defineField({
      name: "comparison",
      title: "Comparison",
      type: "object",
      fields: [
        defineField({
          name: "traditional",
          title: "Traditional — bullet points",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "pelago",
          title: "Pelago — bullet points",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "scenarioTraditional",
          title: "Traditional scenario line",
          type: "text",
          rows: 2,
        }),
        defineField({
          name: "scenarioPelago",
          title: "Pelago scenario line",
          type: "text",
          rows: 2,
        }),
      ],
    }),
    defineField({
      name: "teamTrust",
      title: "Team trust",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2 }),
        defineField({
          name: "points",
          title: "Points",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
      ],
    }),
    defineField({
      name: "serviceHighlights",
      title: "Service pricing highlights",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "serviceHighlight",
          fields: [
            defineField({
              name: "sectionId",
              title: "Service section ID",
              type: "string",
              description: "Matches service section id: start, tax, protect, compliance, grow",
            }),
            defineField({ name: "fromPrice", title: "From price", type: "string" }),
            defineField({ name: "timeline", title: "Timeline", type: "string" }),
          ],
          preview: {
            select: { title: "sectionId", subtitle: "fromPrice" },
          },
        }),
      ],
    }),
    defineField({
      name: "cta",
      title: "Bottom CTA band",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2 }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Home page" };
    },
  },
});
