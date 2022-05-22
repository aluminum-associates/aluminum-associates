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

export const categoryQuery = groq`
*[_type == 'category' && slug.current == $slug]{
  ...,
  'slug': slug.current,
  'heroImage': heroImage.asset->{
    url,
    metadata
  },
}[0]
`

export const homePageQuery = groq`
*[_type == 'index']{
  title,
  cards[]{
    alt,
    title,
    body,
    'image': image.asset->{
      _id,
      url,
      metadata
    }
  },
  heroHeading,
  heroImages[]{
    'image': asset->{
      _id,
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
      _id,
      url,
      metadata
    }
  }
}[0]
`

export const aboutQuery = groq`
*[_type == 'about']{
  ...,
  heroImage{
    'image': asset->{
      _id,
      url,
      metadata
    }
  }
}[0]
`

export const servicesQuery = groq`
*[_type == 'services']{
  ...,
  'heroImage': heroImage.asset->{
    url,
    metadata
  },
  'pages': pages[]{
    ...,
    'slug': slug.current
  }
}[0]
`

export const serviceQuery = groq`
*[_type == 'services'].pages[slug.current == $slug]{
  ...,
  'slug': slug.current
}
`

export const galleryQuery = groq`
*[_type == 'gallery']{
  sections[]{
    ...,
    images[]{
      ...,
      'image': image.asset->{
        url,
        metadata
      }
    }
  }
}[0]
`

export const faqQuery = groq`
*[_type == 'faq']{
  ...,
  'slug': slug.current,
  tabs[]->{
    ...,
    'slug': slug.current
  }
}[0]
`
