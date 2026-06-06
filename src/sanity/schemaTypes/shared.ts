import { defineArrayMember, defineField } from "sanity";

export const contentSectionFields = [
  defineField({
    name: "heading",
    title: "Heading",
    type: "string",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "paragraphs",
    title: "Paragraphs",
    type: "array",
    of: [defineArrayMember({ type: "text", rows: 4 })],
    validation: (Rule) => Rule.required().min(1),
  }),
];
