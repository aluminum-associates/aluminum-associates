import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Site Settings
 *
 *
 */
export interface SiteSettings extends SanityDocument {
  _type: "siteSettings";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Product Category Order — `array`
   *
   *
   */
  prodCatOrder?: Array<SanityKeyedReference<Category>>;
}

/**
 * Home Page
 *
 *
 */
export interface Index extends SanityDocument {
  _type: "index";

  /**
   * Page Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Meta Description — `text`
   *
   * Important for SEO. Keep between 155-160 characters if at all possible.
   */
  metaDescription?: string;

  /**
   * Notification Heading — `string`
   *
   *
   */
  notificationHeading?: string;

  /**
   * Notification — `blockContent`
   *
   *
   */
  notification?: BlockContent;

  /**
   * Notification Is Active — `boolean`
   *
   *
   */
  notificationActive?: boolean;

  /**
   * Hero Images — `array`
   *
   *
   */
  heroImages?: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;

  /**
   * Hero Size — `heroSize`
   *
   *
   */
  heroSize?: HeroSize;

  /**
   * Hero Heading — `string`
   *
   *
   */
  heroHeading?: string;

  /**
   * Cards — `array`
   *
   *
   */
  cards?: Array<SanityKeyed<Card>>;

  /**
   * Vendors — `array`
   *
   *
   */
  vendors?: Array<SanityKeyedReference<Vendor>>;

  /**
   * Testimonials — `array`
   *
   *
   */
  testimonials?: Array<SanityKeyedReference<Testimonial>>;
}

/**
 * About Page
 *
 *
 */
export interface About extends SanityDocument {
  _type: "about";

  /**
   * Page Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Meta Description — `text`
   *
   * Important for SEO. Keep between 155-160 characters if at all possible.
   */
  metaDescription?: string;

  /**
   * Hero Image — `image`
   *
   *
   */
  heroImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Hero Size — `heroSize`
   *
   *
   */
  heroSize?: HeroSize;

  /**
   * Hero Copy — `blockContent`
   *
   *
   */
  heroCopy?: BlockContent;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;
}

/**
 * Services Page
 *
 *
 */
export interface Services extends SanityDocument {
  _type: "services";

  /**
   * Page Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Meta Description — `text`
   *
   * Important for SEO. Keep between 155-160 characters if at all possible.
   */
  metaDescription?: string;

  /**
   * Hero Image — `image`
   *
   *
   */
  heroImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Hero Size — `heroSize`
   *
   *
   */
  heroSize?: HeroSize;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;

  /**
   * Pages — `array`
   *
   *
   */
  pages?: Array<SanityKeyed<Page>>;
}

/**
 * Gallery
 *
 *
 */
export interface Gallery extends SanityDocument {
  _type: "gallery";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Sections — `array`
   *
   *
   */
  sections?: Array<SanityKeyed<GallerySection>>;
}

/**
 * FAQ
 *
 *
 */
export interface Faq extends SanityDocument {
  _type: "faq";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Meta Description — `text`
   *
   *
   */
  metaDescription?: string;

  /**
   * Tabs — `array`
   *
   *
   */
  tabs?: Array<SanityKeyedReference<FaqTabs>>;
}

/**
 * Vendors
 *
 *
 */
export interface Vendor extends SanityDocument {
  _type: "vendor";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * logo — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Description — `blockContent`
   *
   *
   */
  description?: BlockContent;

  /**
   * URL — `url`
   *
   *
   */
  url?: string;
}

/**
 * Categories
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyed<string>>;

  /**
   * Hero Image — `image`
   *
   *
   */
  heroImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Hero Size — `heroSize`
   *
   *
   */
  heroSize?: HeroSize;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Parent categories — `array`
   *
   *
   */
  parents?: Array<SanityKeyedReference<Category>>;

  /**
   * Products — `array`
   *
   *
   */
  relatedProducts?: Array<SanityKeyedReference<Product>>;
}

/**
 * Products
 *
 *
 */
export interface Product extends SanityDocument {
  _type: "product";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyed<string>>;

  /**
   * Category — `reference`
   *
   *
   */
  category?: SanityReference<Category>;

  /**
   * Vendor — `reference`
   *
   *
   */
  vendor?: SanityReference<Vendor>;

  /**
   * Hero Image — `image`
   *
   *
   */
  heroImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Hero Size — `heroSize`
   *
   *
   */
  heroSize?: HeroSize;

  /**
   * Image Gallery — `array`
   *
   *
   */
  imageGallery?: Array<SanityKeyed<GalleryImage>>;

  /**
   * Description — `array`
   *
   *
   */
  description?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Standard Features — `array`
   *
   *
   */
  standardFeatures?: Array<SanityKeyed<string>>;

  /**
   * Optional Features — `array`
   *
   *
   */
  optionalFeatures?: Array<SanityKeyed<string>>;

  /**
   * Available Colors — `reference`
   *
   *
   */
  availableColors?: SanityReference<ColorPalette>;

  /**
   * Documentation — `array`
   *
   *
   */
  documentation?: Array<SanityKeyed<ProductDocument>>;

  /**
   * Additional Info — `blockContent`
   *
   * Any product-specific information that doesn't fit into the standard template can be written up here. You're able to add photos, embed videos and links as if you were writing a blog post.
   */
  additionalInfo?: BlockContent;
}

/**
 * Testimonials
 *
 *
 */
export interface Testimonial extends SanityDocument {
  _type: "testimonial";

  /**
   * Quote — `blockContent`
   *
   *
   */
  quote?: BlockContent;

  /**
   * Client — `string`
   *
   *
   */
  client?: string;

  /**
   * Title — `string`
   *
   * If the client has a title that applies, add it here. Please note this is not a necessary field!
   */
  clientTitle?: string;
}

/**
 * FAQ Tabs
 *
 *
 */
export interface FaqTabs extends SanityDocument {
  _type: "faqTabs";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;
}

/**
 * Color Palettes
 *
 *
 */
export interface ColorPalette extends SanityDocument {
  _type: "colorPalette";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Colors — `array`
   *
   *
   */
  colors?: Array<SanityKeyed<Color>>;
}

/**
 * Color
 *
 *
 */
export interface Color extends SanityDocument {
  _type: "color";

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Color Name — `string`
   *
   *
   */
  name?: string;
}

/**
 * Team
 *
 *
 */
export interface Team extends SanityDocument {
  _type: "team";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Teammates — `array`
   *
   *
   */
  teammates?: Array<SanityKeyed<Employee>>;
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<BlockImage>
  | SanityKeyed<ImageGallery>
  | SanityKeyed<VideoEmbed>
  | SanityKeyed<Table>
>;

export type BlockImage = {
  _type: "blockImage";
  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Alternative Text — `string`
   *
   *
   */
  alt?: string;
};

export type GalleryEntry = {
  _type: "galleryEntry";
  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Excerpt — `text`
   *
   *
   */
  excerpt?: string;
};

export type GallerySection = {
  _type: "gallerySection";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Images — `array`
   *
   *
   */
  images?: Array<SanityKeyed<GalleryEntry>>;
};

export type ImageGallery = {
  _type: "imageGallery";
  /**
   * gallery — `array`
   *
   *
   */
  gallery?: Array<SanityKeyed<BlockImage>>;
};

export type GalleryImage = {
  _type: "galleryImage";
  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Alternative Text — `string`
   *
   * Important for SEO and accessibility!
   */
  alternativeText?: string;
};

export type HeroSize = "small" | "medium" | "large" | "fullscreen";

export type Card = {
  _type: "card";
  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Image alt text — `string`
   *
   *
   */
  alt?: string;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Body — `text`
   *
   *
   */
  body?: string;
};

export type ProductDocument = {
  _type: "productDocument";
  /**
   * File — `file`
   *
   *
   */
  file?: { _type: "file"; asset: SanityReference<any> };

  /**
   * title — `string`
   *
   *
   */
  title?: string;
};

export type VideoEmbed = {
  _type: "videoEmbed";
  /**
   * URL — `url`
   *
   *
   */
  url?: string;
};

export type Page = {
  _type: "page";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;
};

export type Employee = {
  _type: "employee";
  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Job Title — `string`
   *
   *
   */
  jobTitle?: string;

  /**
   * Headshot — `image`
   *
   *
   */
  headshot?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Contact Email — `url`
   *
   * Make sure to add mailto: to the beginning of your email address
   */
  email?: string;

  /**
   * Biography — `array`
   *
   *
   */
  bio?: Array<SanityKeyed<SanityBlock>>;
};

export type Documents =
  | SiteSettings
  | Index
  | About
  | Services
  | Gallery
  | Faq
  | Vendor
  | Category
  | Product
  | Testimonial
  | FaqTabs
  | ColorPalette
  | Color
  | Team;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Table = any;
