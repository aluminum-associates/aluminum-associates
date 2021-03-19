export default {
  name: "gallerySection",
  title: "Page",
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
      options: {
        source: (_, options) => options.parent.title,
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "galleryEntry" }],
    },
  ],
};
