import { defineQuery } from "next-sanity";

export const blogPostsQuery = defineQuery(`
  *[_type == "blogPost"] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    category,
    readTime,
    "date": publishedAt,
    excerpt,
    valueLabel,
    keyTakeaways,
    cta,
    sections[] {
      heading,
      paragraphs,
      callout
    }
  }
`);

export const blogPostBySlugQuery = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    category,
    readTime,
    "date": publishedAt,
    excerpt,
    valueLabel,
    keyTakeaways,
    cta,
    sections[] {
      heading,
      paragraphs,
      callout
    }
  }
`);

export const blogSlugsQuery = defineQuery(`
  *[_type == "blogPost"] { "slug": slug.current }
`);

export const learnModulesQuery = defineQuery(`
  *[_type == "learnModule"] | order(num asc) {
    num,
    title,
    duration
  }
`);

export const learnLessonsMetaQuery = defineQuery(`
  *[_type == "learnLesson"] | order(module->num asc, orderInModule asc) {
    "id": slug.current,
    title,
    duration,
    summary,
    "moduleNum": module->num,
    orderInModule
  }
`);

export const learnLessonBySlugQuery = defineQuery(`
  *[_type == "learnLesson" && slug.current == $slug][0] {
    "id": slug.current,
    title,
    keyTakeaways,
    cta,
    sections[] {
      sectionType,
      heading,
      paragraphs,
      items,
      tableHeaders,
      tableRows[] {
        cells
      },
      tipBody
    }
  }
`);

export const learnLessonSlugsQuery = defineQuery(`
  *[_type == "learnLesson"] { "slug": slug.current }
`);

export const clientsQuery = defineQuery(`
  *[_type == "client"] | order(order asc) {
    name,
    "logo": logoPath,
    featured
  }
`);

export const serviceSectionsQuery = defineQuery(`
  *[_type == "serviceSection"] | order(order asc) {
    "id": sectionId,
    title,
    subtitle,
    items[] {
      name,
      timeline,
      desc,
      valueLabel,
      toolId,
      learnSlug,
      blogSlug
    }
  }
`);

export const toolsQuery = defineQuery(`
  *[_type == "tool"] | order(order asc) {
    "id": toolId,
    name,
    category,
    desc,
    valueLabel,
    why,
    tips,
    relatedBlogSlug,
    relatedLearnSlug
  }
`);

export const careerRolesQuery = defineQuery(`
  *[_type == "careerRole"] | order(order asc) {
    "id": slug.current,
    title,
    location,
    type,
    summary,
    responsibilities,
    youAre
  }
`);

export const testimonialsQuery = defineQuery(`
  *[_type == "testimonial"] | order(order asc) {
    quote,
    name,
    role,
    location,
    service,
    rating
  }
`);

export const faqsQuery = defineQuery(`
  *[_type == "faq"] | order(order asc) {
    "q": question,
    "a": answer
  }
`);

export const homePageQuery = defineQuery(`
  *[_type == "homePage" && _id == "homePage"][0] {
    hero {
      badge,
      headlineHighlight,
      headlineSub,
      description,
      pills,
      journeySteps[] {
        title,
        detail,
        status
      },
      journeyFooter
    },
    whySection {
      eyebrow,
      title,
      subtitle,
      blocks[] {
        eyebrow,
        title,
        body,
        imageKey,
        points,
        href,
        cta
      }
    },
    processSteps[] {
      step,
      title,
      desc,
      deliverable
    },
    comparison {
      traditional,
      pelago,
      scenarioTraditional,
      scenarioPelago
    },
    teamTrust {
      title,
      subtitle,
      points
    },
    serviceHighlights[] {
      sectionId,
      fromPrice,
      timeline
    },
    cta {
      title,
      subtitle
    }
  }
`);
