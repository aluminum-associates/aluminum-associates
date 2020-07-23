export default {
  name: "pageTab",
  title: "Page Tab",
  type: "object",
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
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
