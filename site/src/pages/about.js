import React from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Serializers from "../components/Serializers"
import { Box } from "@chakra-ui/react"
import Container from "../components/Layout/Container"
import imageUrl from "../../utils/imageUrl"

const About = ({ data }) => {
  const {
    title,
    metaDescription,
    _rawHeroCopy,
    _rawBody,
    heroImage,
    heroSize,
  } = data.sanityAbout

  console.log(heroSize)

  const heroImageUrl = imageUrl(heroImage).url()

  return (
    <Box>
      <Layout title={title} description={metaDescription}>
        <Hero
          image={heroImage && heroImageUrl}
          size={heroSize && heroSize}
          hotspot={heroImage.hotspot}
        >
          <Container>
            <PortableText blocks={_rawHeroCopy} serializers={Serializers} />
          </Container>
        </Hero>
        <Box as="section">
          <Container>
            <Box maxWidth="75ch" m="0 auto">
              <PortableText blocks={_rawBody} serializers={Serializers} />
            </Box>
          </Container>
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
          _id
        }
        crop {
          top
          bottom
          left
          right
        }
        hotspot {
          x
          y
        }
      }
      heroSize
    }
  }
`

export default About
