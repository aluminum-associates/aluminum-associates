export default {
  name: "color",
  title: "Color",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Color Name",
      type: "string",
    },
  ],
};
