import { AiFillShop } from "react-icons/ai";

export default {
  name: "vendor",
  title: "Vendors",
  type: "document",
  icon: AiFillShop,
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
      name: "logo",
      title: "logo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "logo",
    },
  },
};
