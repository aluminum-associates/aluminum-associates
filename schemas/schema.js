import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import index from "./pages/index";
import about from "./pages/about";
import services from "./pages/services";
import blockContent from "./blockContent";
import blockImage from "./blockImage";
import category from "./category";
import product from "./product";
import vendor from "./vendor";
import notification from "./notification"
import testimonial from "./testimonial";
import galleryImage from "./galleryImage";
import heroImage from "./heroImage";
import productDocument from "./productDocument";
import embed from "./embed";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    index,
    about,
    services,
    vendor,
    notification,
    category,
    product,
    testimonial,
    blockContent,
    blockImage,
    galleryImage,
    heroImage,
    productDocument,
    embed,
  ]),
});
