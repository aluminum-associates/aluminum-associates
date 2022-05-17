import Layout from 'components/Layout'
import { GalleryProps } from 'pages/gallery'
import { FC } from 'react'

const PageGallery: FC<GalleryProps> = ({ data }) => {
  const { navItems, galleryData } = data || {}

  return (
    <Layout navItems={navItems}>
      <pre>{JSON.stringify(galleryData, null, 2)}</pre>
    </Layout>
  )
}

export default PageGallery
