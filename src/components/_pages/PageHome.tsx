import { Heading } from '@chakra-ui/react'
import Hero from 'components/Hero'
import Layout from 'components/Layout'
import { HomeProps } from 'pages/index'
import { FC } from 'react'

const PageHome: FC<HomeProps> = ({ data }) => {
  const { navItems, homeData } = data
  const { heroImages, heroSize, heroHeading } = homeData || {}

  return (
    <Layout navItems={navItems}>
      <Hero heroImage={heroImages && heroImages[0]} heroSize={heroSize}>
        <Heading>{heroHeading}</Heading>
      </Hero>
      <pre>{JSON.stringify(homeData, null, 2)}</pre>
    </Layout>
  )
}

export default PageHome
