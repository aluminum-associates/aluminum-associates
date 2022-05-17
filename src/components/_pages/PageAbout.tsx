import Layout from 'components/Layout'
import { AboutProps } from 'pages/about'
import React, { FC } from 'react'

const PageAbout: FC<AboutProps> = ({ data }) => {
  const { navItems, aboutData } = data || {}

  return (
    <Layout navItems={navItems}>
      <pre>{JSON.stringify(aboutData, null, 2)}</pre>
    </Layout>
  )
}

export default PageAbout
