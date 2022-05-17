import PageGallery from 'components/_pages/PageGallery'
import { getClient } from 'lib/sanity.server'
import { GetStaticProps, NextPage } from 'next'
import { GalleryData, NavItems } from 'types/SanityExtended'
import { galleryQuery, navigationQuery } from 'util/sanity/queries'

export interface GalleryProps {
  data?: {
    navItems?: NavItems
    galleryData?: GalleryData
  }
}

const Gallery: NextPage<GalleryProps> = ({ data }) => (
  <PageGallery data={data} />
)

export const getStaticProps: GetStaticProps = async () => {
  const navItems = await getClient().fetch(navigationQuery)
  const galleryData = await getClient().fetch(galleryQuery)

  return { props: { data: { navItems, galleryData } } }
}

export default Gallery
