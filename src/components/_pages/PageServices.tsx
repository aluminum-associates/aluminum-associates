import { PortableText } from '@portabletext/react'
import Hero from 'components/Hero'
import Layout from 'components/Layout'
import Section from 'components/Section'
import { ServicesProps } from 'pages/services'
import { FC } from 'react'

const PageServices: FC<ServicesProps> = ({ data }) => {
  const { navItems, servicesData } = data || {}
  const { heroImage, heroSize, body, pages } = servicesData || {}

  return (
    <Layout navItems={navItems}>
      <Hero heroImage={heroImage} heroSize={heroSize} />
      <Section>
        <PortableText value={body} />
      </Section>
      <Section>
        <pre>{JSON.stringify(pages, null, 2)}</pre>
      </Section>
    </Layout>
  )
}

export default PageServices
