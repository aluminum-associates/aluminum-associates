import { Category } from './Sanity'

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
