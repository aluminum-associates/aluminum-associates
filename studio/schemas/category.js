import client from "part:@sanity/base/client";
import { GoFileSubmodule } from "react-icons/go";

export default {
  name: "category",
  title: "Categories",
  type: "document",
  icon: GoFileSubmodule,
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
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "heroSize",
      title: "Hero Size",
      type: "heroSize",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "parents",
      title: "Parent categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      name: "relatedProducts",
      title: "Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "heroImage.image",
    },
  },
};
