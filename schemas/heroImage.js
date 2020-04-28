export default {
  name: "heroImage",
  title: "Hero Image",
  type: "object",
  fields: [
    {
      name: "image",
      title: "image",
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
