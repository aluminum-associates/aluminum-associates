import React from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { Box, Heading } from "@chakra-ui/react"
import Serializers from "../components/Serializers"

const Services = ({ data }) => {
  const {
    title,
    metaDescription,
    heroImage,
    heroSize,
    _rawBody,
  } = data.sanityServices
  return (
    <Layout title={title} description={metaDescription}>
      <Hero size={heroSize} fluid={heroImage ? heroImage.asset.fluid : null}>
        <Box maxW="75ch" m="0 auto">
          <Heading as="h1">{title}</Heading>
        </Box>
      </Hero>
      <Box as="section" className="section">
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
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      heroSize
      _rawBody
    }
  }
`

export default Services
