import { PortableText } from '@portabletext/react'
import Hero from 'components/Hero'
import Layout from 'components/Layout'
import Section from 'components/Section'
import { AboutProps } from 'pages/about'
import React, { FC } from 'react'

const PageAbout: FC<AboutProps> = ({ data }) => {
  const { navItems, aboutData } = data || {}
  const { heroImage, heroSize, heroCopy, body } = aboutData || {}

  return (
    <Layout navItems={navItems}>
      <Hero heroImage={heroImage} heroSize={heroSize}>
        <PortableText value={heroCopy} />
      </Hero>
      <Section maxW='container.md'>
        <PortableText value={body} />
      </Section>
    </Layout>
  )
}

export default PageAbout
