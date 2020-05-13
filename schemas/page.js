export default {
  name: "page",
  title: "Pages",
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
        maxLength: 96,
      },
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "heroImage",
    },
    {
      name: "heroContent",
      title: "Hero Content",
      type: "blockContent",
    },
    {
      name: "pageContent",
      title: "Page Content",
      type: "blockContent",
    },
  ],
};
