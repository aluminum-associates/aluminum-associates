import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import category from "./category";
import product from "./product";
import vendor from "./vendor";
import testimonial from "./testimonial";
import galleryImage from "./galleryImage";
import productDocument from "./productDocument";
import heroImage from "./heroImage";
import blockImage from "./blockImage";
import youtube from "./youtube";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    product,
    vendor,
    category,
    testimonial,
    blockContent,
    galleryImage,
    productDocument,
    heroImage,
    blockImage,
    youtube,
  ]),
});
