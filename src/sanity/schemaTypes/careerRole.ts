import { defineArrayMember, defineField, defineType } from "sanity";

export const careerRole = defineType({
  name: "careerRole",
  title: "Career role",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "location", title: "Location", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "type", title: "Employment type", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "youAre",
      title: "You are",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({ name: "order", title: "Sort order", type: "number", validation: (Rule) => Rule.required().integer().min(0) }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "location" } },
});
