import { groq } from 'next-sanity'

export const navigationQuery = groq`
*[_type == 'siteSettings'].prodCatOrder[]->{
    title,
    'slug': slug.current,
    'subCategories': *[_type == 'category' && ^.slug.current in parents[]->.slug.current]{
      title,
      'slug': slug.current
    }
  }
`

export const categoriesQuery = groq`
*[_type == 'category']{
  'slug': slug.current
}
`

export const homePageQuery = groq`
*[_type == 'index']{
  title,
  cards[]{
    alt,
    body,
    'image': image.asset->{
      url,
      metadata
    }
  },
  heroHeading,
  heroImages[]{
    'image': asset->{
      url,
      metadata
    },
    hotspot,
    crop
  },
  notification,
  notificationActive,
  notificationHeading,
  testimonials[]->,
  vendors[]->{
    title,
    'slug': slug.current,
    url,
    'logo': logo.asset->{
      url,
      metadata
    }
  }
}[0]
`
