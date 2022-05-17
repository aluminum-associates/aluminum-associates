import {
  SanityImageCrop,
  SanityImageHotspot
} from '@sanity/image-url/lib/types/types'
import {
  About,
  Card,
  Category,
  Faq,
  FaqTabs,
  Gallery,
  GallerySection,
  Index,
  SanityImageMetadata,
  Services,
  Vendor
} from './Sanity'

export interface Image {
  url?: string
  metadata?: SanityImageMetadata
}

export interface CustomCategory
  extends Omit<Pick<Category, 'title' | 'slug'>, 'slug'> {
  title?: string
  slug?: string
  subCategories?: {
    title?: string
    slug?: string
  }[]
}

export type NavItems = CustomCategory[]

export interface CategoryData extends Omit<Category, 'slug' | 'heroImage'> {
  slug?: string
  heroImage?: Image
}

export interface CustomCard extends Omit<Card, 'image'> {
  image?: Image
}

export interface CustomVendor extends Omit<Vendor, 'slug' | 'logo'> {
  slug?: string
  logo?: Image
}

export interface HomeData extends Omit<Index, 'heroImages' | 'cards'> {
  cards?: CustomCard[]
  heroImages?: {
    image?: Image
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
  }
  vendors?: CustomVendor[]
}

export interface AboutData extends Omit<About, 'heroImage'> {
  heroImage?: Image
}

export interface ServicesData extends Omit<Services, 'heroImage'> {
  heroImage?: Image
}

export interface CustomGallerySection
  extends Omit<GallerySection, 'heroImage'> {
  heroImage?: Image
}

export interface GalleryData extends Omit<Gallery, 'sections'> {
  sections?: CustomGallerySection[]
}

export interface CustomFaqTabs extends Omit<FaqTabs, 'slug'> {
  slug?: string
}

export interface FaqData extends Omit<Faq, 'tabs'> {
  tabs?: CustomFaqTabs[]
}
