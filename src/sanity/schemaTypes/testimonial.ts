import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", title: "Role", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "location", title: "Location", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "service", title: "Service", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "rating", title: "Rating", type: "number", validation: (Rule) => Rule.required().min(1).max(5) }),
    defineField({ name: "order", title: "Sort order", type: "number", validation: (Rule) => Rule.required().integer().min(0) }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "service" } },
});
