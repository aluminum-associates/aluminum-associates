export default {
  name: "services",
  title: "Services Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      description:
        "Important for SEO. Keep between 155-160 characters if at all possible.",
      type: "text",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
