import { Grid, Heading } from '@chakra-ui/react'
import Hero from 'components/Hero'
import Layout from 'components/Layout'
import Section from 'components/Section'
import Testimonials from 'components/Testimonials'
import Vendors from 'components/Vendors'
import { HomeProps } from 'pages/index'
import { FC } from 'react'
import ServicePhotoCard from 'components/_cards/ServicePhotoCard'

const PageHome: FC<HomeProps> = ({ data }) => {
  const { navItems, homeData } = data
  const { heroImages, heroSize, heroHeading, cards, vendors, testimonials } =
    homeData || {}

  return (
    <Layout navItems={navItems}>
      <Hero heroImage={heroImages && heroImages[0]} heroSize={heroSize}>
        <Heading>{heroHeading}</Heading>
      </Hero>
      <Section>
        <Grid gap={6} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
          {cards?.map(card => {
            return <ServicePhotoCard key={card.image?._id} card={card} />
          })}
        </Grid>
      </Section>
      <Section maxW='container.md'>
        <Heading size='xl' pb={6} textAlign='center' textTransform='capitalize'>
          vendors we work with
        </Heading>
        <Vendors vendors={vendors} />
      </Section>
      <Section maxW='container.md'>
        <Testimonials testimonials={testimonials} />
      </Section>
    </Layout>
  )
}

export default PageHome
