export default {
  name: "index",
  title: "Home Page",
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
      name: "notification",
      title: "Notification",
      type: "blockContent",
    },
    {
      name: "notificationActive",
      title: "Notification Is Active",
      type: "boolean",
    },
    {
      name: "heroImages",
      title: "Hero Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "vendors",
      title: "Vendors",
      type: "array",
      of: [{ type: "reference", to: { type: "vendor" } }],
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "reference", to: { type: "testimonial" } }],
    },
  ],
};
