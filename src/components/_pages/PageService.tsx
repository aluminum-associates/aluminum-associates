import Layout from 'components/Layout'
import { ServiceProps } from 'pages/services/[slug]'
import React, { FC } from 'react'

const PageService: FC<ServiceProps> = ({ data }) => {
  const { navItems } = data || {}

  return <Layout navItems={navItems}>PageService</Layout>
}

export default PageService
