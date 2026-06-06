import { defineArrayMember, defineField, defineType } from "sanity";

const blogCategories = [
  { title: "Tax & Compliance", value: "Tax & Compliance" },
  { title: "Registration", value: "Registration" },
  { title: "Startup", value: "Startup" },
  { title: "Certifications", value: "Certifications" },
  { title: "Legal & IP", value: "Legal & IP" },
] as const;

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: blogCategories.map(({ title, value }) => ({ title, value })) },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Read time",
      type: "string",
      description: 'e.g. "8 min"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(320),
    }),
    defineField({
      name: "valueLabel",
      title: "Value label",
      type: "string",
      description: "Short badge shown on cards, e.g. “Pick the right entity in 10 minutes”",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "keyTakeaways",
      title: "Key takeaways",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "cta",
      title: "Call to action",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "subtitle", title: "Subtitle", type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "href", title: "Link", type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "buttonLabel", title: "Button label", type: "string", validation: (Rule) => Rule.required() }),
      ],
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "section",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "string", validation: (Rule) => Rule.required() }),
            defineField({
              name: "paragraphs",
              title: "Paragraphs",
              type: "array",
              of: [defineArrayMember({ type: "text", rows: 4 })],
              validation: (Rule) => Rule.required().min(1),
            }),
            defineField({ name: "callout", title: "Callout (optional)", type: "text", rows: 2 }),
          ],
          preview: {
            select: { title: "heading" },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  orderings: [
    {
      title: "Published date, newest",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      date: "publishedAt",
    },
    prepare({ title, subtitle, date }) {
      return {
        title,
        subtitle: [subtitle, date].filter(Boolean).join(" · "),
      };
    },
  },
});
