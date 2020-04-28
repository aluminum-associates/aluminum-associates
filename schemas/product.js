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
      name: "vendor",
      title: "Vendor",
      type: "reference",
      to: { type: "vendor" },
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "heroImage",
    },
    {
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      of: [
        {
          name: "galleryImage",
          title: "Gallery Image",
          type: "galleryImage",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "standardFeatures",
      title: "Standard Features",
      type: "array",
      of: [
        {
          name: "feature",
          title: "Feature",
          type: "string",
        },
      ],
    },
    {
      name: "optionalFeatures",
      title: "Optional Features",
      type: "array",
      of: [
        {
          name: "feature",
          title: "Feature",
          type: "string",
        },
      ],
    },
    {
      name: "documentation",
      title: "Documentation",
      type: "array",
      of: [
        {
          name: "productDocument",
          title: "Product Document",
          type: "productDocument",
        },
      ],
    },
  ],
};
