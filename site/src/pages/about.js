import React from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Serializers from "../components/Serializers"
import { Box } from "@chakra-ui/react"

const About = ({ data }) => {
  const {
    title,
    metaDescription,
    _rawHeroCopy,
    _rawBody,
    heroImage,
    heroSize,
  } = data.sanityAbout

  return (
    <Box>
      <Layout title={title} description={metaDescription}>
        <Hero fluid={heroImage.asset.fluid} size={heroSize}>
          <PortableText blocks={_rawHeroCopy} serializers={Serializers} />
        </Hero>
        <Box as="section" className="section">
          <Box maxWidth="75ch" m="0 auto">
            <PortableText blocks={_rawBody} serializers={Serializers} />
          </Box>
        </Box>
      </Layout>
    </Box>
  )
}

export const data = graphql`
  {
    sanityAbout {
      title
      metaDescription
      _rawBody
      _rawHeroCopy
      heroImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      heroSize
    }
  }
`

export default About
