import { Category, SanityImageMetadata } from './Sanity'

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
