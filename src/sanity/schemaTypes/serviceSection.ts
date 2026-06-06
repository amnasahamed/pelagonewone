import { defineArrayMember, defineField, defineType } from "sanity";

export const serviceSection = defineType({
  name: "serviceSection",
  title: "Service section",
  type: "document",
  fields: [
    defineField({
      name: "sectionId",
      title: "Section ID",
      type: "string",
      description: "URL anchor id, e.g. start, tax, protect",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "subtitle", title: "Subtitle", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "order", title: "Sort order", type: "number", validation: (Rule) => Rule.required().integer().min(0) }),
    defineField({
      name: "items",
      title: "Services",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "serviceItem",
          fields: [
            defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "timeline", title: "Timeline", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "desc", title: "Description", type: "text", rows: 2, validation: (Rule) => Rule.required() }),
            defineField({ name: "valueLabel", title: "Value label", type: "string" }),
            defineField({ name: "toolId", title: "Related tool ID", type: "string" }),
            defineField({ name: "learnSlug", title: "Related learn slug", type: "string" }),
            defineField({ name: "blogSlug", title: "Related blog slug", type: "string" }),
          ],
          preview: { select: { title: "name", subtitle: "timeline" } },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "sectionId" } },
});
