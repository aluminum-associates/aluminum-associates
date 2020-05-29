import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import blockImage from "./blockImage";
import category from "./category";
import galleryImage from "./galleryImage";
import heroImage from "./heroImage";
import page from "./page";
import product from "./product";
import productDocument from "./productDocument";
import vendor from "./vendor";
import youtube from "./youtube";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    blockContent,
    blockImage,
    category,
    galleryImage,
    heroImage,
    page,
    product,
    productDocument,
    vendor,
    youtube,
  ]),
});
