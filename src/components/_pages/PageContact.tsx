import Layout from 'components/Layout'
import { ContactProps } from 'pages/contact'
import React, { FC } from 'react'

const PageContact: FC<ContactProps> = ({ data }) => {
  const { navItems } = data || {}
  return <Layout navItems={navItems}>PageContact</Layout>
}

export default PageContact
