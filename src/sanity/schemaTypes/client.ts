import { defineField, defineType } from "sanity";

export const client = defineType({
  name: "client",
  title: "Client",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Company name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "logoPath",
      title: "Logo path",
      type: "string",
      description: "Path under /public, e.g. /clients/example.png",
    }),
    defineField({
      name: "featured",
      title: "Show in logo strip",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "order", title: "Sort order", type: "number", validation: (Rule) => Rule.required().integer().min(0) }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "logoPath" },
  },
});
