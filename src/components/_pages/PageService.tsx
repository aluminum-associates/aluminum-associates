import { Container, Heading } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'
import Hero from 'components/Hero'
import Layout from 'components/Layout'
import Section from 'components/Section'
import { ServiceProps } from 'pages/services/[slug]'
import React, { FC } from 'react'

const PageService: FC<ServiceProps> = ({ data }) => {
  const { navItems, serviceData } = data || {}
  const { title, body } = serviceData?.[0] || {}

  return (
    <Layout navItems={navItems}>
      <Hero>
        <Container maxW='container.md'>
          <Heading>{title}</Heading>
        </Container>
      </Hero>
      <Section maxW='container.md'>
        <PortableText value={body} />
      </Section>
    </Layout>
  )
}

export default PageService
