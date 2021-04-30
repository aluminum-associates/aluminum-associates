import React from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { Box, Grid, Heading } from "@chakra-ui/react"
import Serializers from "../components/Serializers"
import Container from "../components/Layout/Container"
import Card from "../components/Card"

const Services = ({ data }) => {
  const {
    title,
    metaDescription,
    heroImage,
    heroSize,
    _rawBody,
    pages,
  } = data.sanityServices
  return (
    <Layout title={title} description={metaDescription}>
      <Hero size={heroSize && heroSize} fluid={heroImage && heroImage}>
        <Container>
          <Box maxW="75ch" m="0 auto">
            <Heading as="h1" size="2xl">
              {title}
            </Heading>
          </Box>
        </Container>
      </Hero>
      <Grid
        as="section"
        maxW="75ch"
        m="0 auto"
        p="3rem 1.25rem"
        gap="24px"
        templateColumns={{
          base: "minmax(0, 1fr)",
          md: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {pages.map((page, i) => {
          const { title, slug } = page
          return <Card key={i} title={title} to={`/services/${slug.current}`} />
        })}
      </Grid>
      <Box as="section" p="3rem 1.25rem">
        <Box maxW="75ch" m="0 auto">
          <PortableText blocks={_rawBody} serializers={Serializers} />
        </Box>
      </Box>
    </Layout>
  )
}

export const data = graphql`
  {
    sanityServices {
      title
      metaDescription
      heroImage {
        asset {
          gatsbyImageData(width: 1920)
        }
        hotspot {
          x
          y
        }
      }
      heroSize
      _rawBody
      pages {
        title
        slug {
          current
        }
      }
    }
  }
`

export default Services
