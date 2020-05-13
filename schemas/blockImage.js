import { BsFillImageFill } from "react-icons/bs";

export default {
  name: "blockImage",
  title: "Image",
  type: "object",
  icon: BsFillImageFill,
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "alt",
      title: "Alternative Text",
      type: "string",
    },
  ],
};
