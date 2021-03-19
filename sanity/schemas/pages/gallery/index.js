export default {
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "gallerySection" }],
    },
  ],
};
