export default {
  name: "colorPalette",
  title: "Color Palettes",
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
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "color" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
