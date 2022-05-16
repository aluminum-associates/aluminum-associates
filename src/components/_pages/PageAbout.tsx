import Layout from 'components/Layout'
import { AboutProps } from 'pages/about'
import React, { FC } from 'react'

const PageAbout: FC<AboutProps> = ({ data }) => {
  const { navItems } = data || {}

  return <Layout navItems={navItems}>PageAbout</Layout>
}

export default PageAbout
