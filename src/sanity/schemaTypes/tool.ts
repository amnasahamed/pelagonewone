import { defineArrayMember, defineField, defineType } from "sanity";

const toolCategories = [
  "Tax",
  "Finance",
  "Hiring",
  "Fundraising",
  "Setup",
] as const;

export const tool = defineType({
  name: "tool",
  title: "Tool",
  type: "document",
  fields: [
    defineField({
      name: "toolId",
      title: "Tool ID",
      type: "string",
      description: "Must match calculator code, e.g. gst, burn-rate",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: toolCategories.map((c) => ({ title: c, value: c })) },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "desc", title: "Description", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
    defineField({ name: "valueLabel", title: "Value label", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "why", title: "Why it matters", type: "text", rows: 2, validation: (Rule) => Rule.required() }),
    defineField({
      name: "tips",
      title: "Tips",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({ name: "relatedBlogSlug", title: "Related blog slug", type: "string" }),
    defineField({ name: "relatedLearnSlug", title: "Related learn slug", type: "string" }),
    defineField({ name: "order", title: "Sort order", type: "number", validation: (Rule) => Rule.required().integer().min(0) }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "category" } },
});
