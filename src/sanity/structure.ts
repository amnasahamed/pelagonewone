import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home page")
        .id("homePage")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.divider(),
      S.listItem()
        .title("Blog posts")
        .schemaType("blogPost")
        .child(S.documentTypeList("blogPost").title("Blog posts")),
      S.divider(),
      S.listItem()
        .title("Learn")
        .child(
          S.list()
            .title("Learn")
            .items([
              S.listItem()
                .title("Modules")
                .schemaType("learnModule")
                .child(
                  S.documentTypeList("learnModule")
                    .title("Modules")
                    .child((moduleId) =>
                      S.list()
                        .title("Module")
                        .items([
                          S.listItem()
                            .title("Edit module")
                            .child(
                              S.document().schemaType("learnModule").documentId(moduleId),
                            ),
                          S.divider(),
                          S.listItem()
                            .title("Lessons in this module")
                            .child(
                              S.documentList()
                                .title("Lessons")
                                .filter('_type == "learnLesson" && module._ref == $moduleId')
                                .params({ moduleId })
                                .defaultOrdering([
                                  { field: "orderInModule", direction: "asc" },
                                ]),
                            ),
                        ]),
                    ),
                ),
              S.listItem()
                .title("All lessons")
                .schemaType("learnLesson")
                .child(
                  S.documentTypeList("learnLesson")
                    .title("All lessons")
                    .defaultOrdering([{ field: "orderInModule", direction: "asc" }]),
                ),
            ]),
        ),
      S.listItem()
        .title("Clients")
        .schemaType("client")
        .child(S.documentTypeList("client").title("Clients")),
      S.listItem()
        .title("Service sections")
        .schemaType("serviceSection")
        .child(S.documentTypeList("serviceSection").title("Service sections")),
      S.listItem()
        .title("Tools")
        .schemaType("tool")
        .child(S.documentTypeList("tool").title("Tools")),
      S.listItem()
        .title("Career roles")
        .schemaType("careerRole")
        .child(S.documentTypeList("careerRole").title("Career roles")),
      S.listItem()
        .title("Testimonials")
        .schemaType("testimonial")
        .child(S.documentTypeList("testimonial").title("Testimonials")),
      S.listItem()
        .title("FAQs")
        .schemaType("faq")
        .child(S.documentTypeList("faq").title("FAQs")),
    ]);
