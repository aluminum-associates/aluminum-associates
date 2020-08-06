import { GrGallery } from "react-icons/gr";

export default {
  name: "imageGallery",
  title: "Image Gallery",
  icon: GrGallery,
  type: "object",
  fields: [{ name: "gallery", type: "array", of: [{ type: "blockImage" }] }],
};
