export default {
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "quote",
      title: "Quote",
      type: "blockContent",
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "clientTitle",
      title: "Title",
      description:
        "If the client has a title that applies, add it here. Please note this is not a necessary field!",
      type: "string",
    },
  ],
};
