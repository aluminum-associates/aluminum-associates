import { groq } from 'next-sanity'

export const getNavProps = groq`
*[_type == 'siteSettings'].prodCatOrder[]->{
    title,
    'slug': slug.current,
    'subCategories': *[_type == 'category' && ^.slug.current in parents[]->.slug.current]{
      title,
      'slug': slug.current
    }
  }
`
