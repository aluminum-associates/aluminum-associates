import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import index from "./pages/index";
import about from "./pages/about";
import services from "./pages/services";
import faq from "./pages/faq";
import blockContent from "./blockContent";
import blockImage from "./blockImage";
import category from "./category";
import product from "./product";
import vendor from "./vendor";
import testimonial from "./testimonial";
import galleryImage from "./galleryImage";
import heroSize from "./heroSize";
import faqTabs from "./faqTabs";
import card from "./card";
import productDocument from "./productDocument";
import embed from "./embed";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    index,
    about,
    services,
    faq,
    vendor,
    category,
    product,
    testimonial,
    blockContent,
    blockImage,
    galleryImage,
    heroSize,
    card,
    faqTabs,
    productDocument,
    embed,
  ]),
});
