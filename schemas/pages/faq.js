export default {
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
    },
    {
      name: "tabs",
      title: "Tabs",
      type: "array",
      of: [{ type: "pageTab" }],
    },
  ],
};
