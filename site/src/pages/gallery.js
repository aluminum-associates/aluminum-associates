import React, { useState } from "react"
import { graphql } from "gatsby"
import { Heading, useDisclosure } from "@chakra-ui/react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Container from "../components/Layout/Container"

const Gallery = ({ data }) => {
  const { title } = data.sanityGallery

  return (
    <Layout title={title}>
      <Hero>
        <Container>
          <Heading as="h1" size="2xl">
            {title}
          </Heading>
        </Container>
      </Hero>
    </Layout>
  )
}

export const data = graphql`
  {
    sanityGallery {
      title
      sections {
        title
        slug {
          current
        }
        images {
          title
          excerpt
          image {
            asset {
              url
            }
            hotspot {
              x
              y
              width
              height
            }
          }
        }
      }
    }
  }
`

export default Gallery
