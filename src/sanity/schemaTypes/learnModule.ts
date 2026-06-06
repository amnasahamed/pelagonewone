import { defineField, defineType } from "sanity";

export const learnModule = defineType({
  name: "learnModule",
  title: "Learn module",
  type: "document",
  fields: [
    defineField({ name: "num", title: "Module number", type: "number", validation: (Rule) => Rule.required().integer().min(1) }),
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "duration", title: "Duration", type: "string", validation: (Rule) => Rule.required() }),
  ],
  orderings: [{ title: "Number", name: "numAsc", by: [{ field: "num", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "num" } },
});
