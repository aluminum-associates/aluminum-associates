import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Button, Grid, Heading } from "@chakra-ui/react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Container from "../components/Layout/Container"

const Gallery = ({ data }) => {
  const { title, images } = data.sanityGallery
  return (
    <Layout title={title}>
      <Hero>
        <Heading as="h1">{title}</Heading>
      </Hero>
      <Container>
        <Grid
          templateColumns={{
            base: "minmax(0, 1fr)",
            md: "repeat(auto-fill, minmax(250px, 1fr))",
          }}
          gap="32px"
          p="3rem 1.25rem"
        >
          {images.map((img, i) => {
            const { title, excerpt, image } = img
            return (
              <Button key={i} variant="unstyled" maxW="250px" maxH="250px">
                <Box maxW="inherit" maxH="inherit">
                  <Img fluid={image.asset.fluid} alt={title} />
                </Box>
              </Button>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export const data = graphql`
  {
    sanityGallery {
      title
      images {
        title
        excerpt
        image {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

export default Gallery
