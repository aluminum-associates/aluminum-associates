import { HStack } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'
import Hero from 'components/Hero'
import Layout from 'components/Layout'
import Link from 'components/Link'
import Section from 'components/Section'
import Card from 'components/_cards/Card'
import { ServicesProps } from 'pages/services'
import { FC } from 'react'

const PageServices: FC<ServicesProps> = ({ data }) => {
  const { navItems, servicesData } = data || {}
  const { heroImage, heroSize, body, pages } = servicesData || {}

  return (
    <Layout navItems={navItems}>
      <Hero heroImage={heroImage} heroSize={heroSize} />
      <Section maxW='container.md'>
        <PortableText value={body} />
      </Section>
      <Section maxW='container.md'>
        <HStack spacing={4}>
          {pages?.map(page => {
            const { title, slug } = page

            return (
              <Link key={title} href={`/services/${slug}`}>
                <Card p={6}>{title}</Card>
              </Link>
            )
          })}
        </HStack>
      </Section>
    </Layout>
  )
}

export default PageServices
