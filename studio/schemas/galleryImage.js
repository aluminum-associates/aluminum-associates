export default {
  name: "galleryImage",
  title: "Gallery Image",
  type: "object",
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
      name: "alternativeText",
      title: "Alternative Text",
      description: "Important for SEO and accessibility!",
      type: "string",
    },
  ],
};
