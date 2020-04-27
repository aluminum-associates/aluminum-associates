export default {
  name: "product",
  title: "Product",
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
        maxLength: 96,
      },
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      name: "vendor",
      title: "Vendor",
      type: "reference",
      to: { type: "vendor" },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: "imageGallery",
      title: "Image Gallery",
      type: "imageGallery"
    },
    {
      name: "description",
      title: "Description",
      type: "localeBlockContent",
    },
    {
      name: "documentation",
      title: "Documentation",
      type: "productDocumentation",
    },
  ]
};
