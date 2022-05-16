import {
  SanityImageCrop,
  SanityImageHotspot
} from '@sanity/image-url/lib/types/types'
import { Card, Category, Index, SanityImageMetadata, Vendor } from './Sanity'

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
