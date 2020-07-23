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
