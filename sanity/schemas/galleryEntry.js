export default {
  name: "galleryEntry",
  title: "Entry",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 8,
    },
  ],
};
