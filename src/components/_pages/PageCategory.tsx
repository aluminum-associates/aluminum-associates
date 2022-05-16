import Layout from 'components/Layout'
import { CategoryProps } from 'pages/categories/[slug]'
import React, { FC } from 'react'

const PageCategory: FC<CategoryProps> = ({ data }) => {
  const { navItems, category } = data
  const { title } = category || {}

  return <Layout navItems={navItems}>{title}</Layout>
}

export default PageCategory
