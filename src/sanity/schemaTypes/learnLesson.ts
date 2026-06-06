import { defineArrayMember, defineField, defineType } from "sanity";

const sectionTypeOptions = [
  { title: "Prose", value: "prose" },
  { title: "Checklist", value: "checklist" },
  { title: "Comparison table", value: "table" },
  { title: "Tip / callout", value: "tip" },
  { title: "Mixed content", value: "mixed" },
];

function showProse(type: string | undefined) {
  return type === "prose" || type === "mixed";
}

function showChecklist(type: string | undefined) {
  return type === "checklist" || type === "mixed";
}

function showTable(type: string | undefined) {
  return type === "table" || type === "mixed";
}

export const learnLesson = defineType({
  name: "learnLesson",
  title: "Learn lesson",
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
      name: "module",
      title: "Module",
      type: "reference",
      to: [{ type: "learnModule" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "orderInModule",
      title: "Order in module",
      type: "number",
      description: "0 = first lesson in the module",
      validation: (Rule) => Rule.required().integer().min(0),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "keyTakeaways",
      title: "Key takeaways",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (Rule) => Rule.required().min(1).max(6),
    }),
    defineField({
      name: "cta",
      title: "Call to action",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "href",
          title: "Link",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "buttonLabel",
          title: "Button label",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "lessonSection",
          fields: [
            defineField({
              name: "sectionType",
              title: "Section type",
              type: "string",
              options: { list: sectionTypeOptions },
              initialValue: "prose",
              validation: (Rule) => Rule.required(),
            }),
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
              of: [defineArrayMember({ type: "text", rows: 3 })],
              hidden: ({ parent }) => !showProse(parent?.sectionType),
            }),
            defineField({
              name: "items",
              title: "Checklist items",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
              hidden: ({ parent }) => !showChecklist(parent?.sectionType),
            }),
            defineField({
              name: "tableHeaders",
              title: "Table headers",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
              hidden: ({ parent }) => !showTable(parent?.sectionType),
            }),
            defineField({
              name: "tableRows",
              title: "Table rows",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "tableRow",
                  fields: [
                    defineField({
                      name: "cells",
                      title: "Cells",
                      type: "array",
                      of: [defineArrayMember({ type: "string" })],
                    }),
                  ],
                  preview: {
                    select: { cells: "cells" },
                    prepare: ({ cells }) => ({
                      title: Array.isArray(cells) ? cells.join(" · ") : "Row",
                    }),
                  },
                }),
              ],
              hidden: ({ parent }) => !showTable(parent?.sectionType),
            }),
            defineField({
              name: "tipBody",
              title: "Tip body",
              type: "text",
              rows: 4,
              hidden: ({ parent }) => parent?.sectionType !== "tip",
            }),
          ],
          preview: {
            select: { title: "heading", subtitle: "sectionType" },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  orderings: [
    {
      title: "Order in module",
      name: "orderAsc",
      by: [{ field: "orderInModule", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      moduleNum: "module.num",
      order: "orderInModule",
    },
    prepare({ title, moduleNum, order }) {
      return {
        title,
        subtitle: moduleNum ? `Module ${moduleNum} · #${(order ?? 0) + 1}` : undefined,
      };
    },
  },
});
