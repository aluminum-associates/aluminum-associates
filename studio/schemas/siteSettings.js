export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "prodCatOrder",
      title: "Product Category Order",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
  ],
};
