import Layout from 'components/Layout'
import { FaqProps } from 'pages/faq'
import React, { FC } from 'react'

const PageFaq: FC<FaqProps> = ({ data }) => {
  const { navItems, faqData } = data || {}

  return (
    <Layout navItems={navItems}>
      <pre>{JSON.stringify(faqData, null, 2)}</pre>
    </Layout>
  )
}

export default PageFaq
