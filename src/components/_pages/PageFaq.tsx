import { Container, Heading } from '@chakra-ui/react'
import Hero from 'components/Hero'
import Layout from 'components/Layout'
import Section from 'components/Section'
import { FaqProps } from 'pages/faq'
import React, { FC } from 'react'

const PageFaq: FC<FaqProps> = ({ data }) => {
  const { navItems, faqData } = data || {}
  const { title, tabs } = faqData || {}

  return (
    <Layout navItems={navItems}>
      <Hero>
        <Container maxW='container.md'>
          <Heading>{title}</Heading>
        </Container>
      </Hero>
      <Section maxW='container.md'>
        <pre>{JSON.stringify(tabs, null, 2)}</pre>
      </Section>
    </Layout>
  )
}

export default PageFaq
