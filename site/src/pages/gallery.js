import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { Flex, Heading, VStack, Link, Text, Icon } from "@chakra-ui/react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Container from "../components/Layout/Container"
import { GatsbyImage } from "gatsby-plugin-image"
import { AiFillCamera } from "react-icons/ai"

const Gallery = ({ data }) => {
  const { title, sections } = data.sanityGallery

  return (
    <Layout title={title}>
      <Hero>
        <Container>
          <Heading as="h1" size="2xl">
            {title}
          </Heading>
        </Container>
      </Hero>
      <Container>
        <VStack align="stretch" spacing={10} maxW="80ch" m="0 auto">
          {sections.map((section, i) => {
            const { title, slug, images } = section
            return (
              <Link key={i} as={GatsbyLink} to={`/gallery/${slug.current}`}>
                <Flex role="group" boxShadow="lg">
                  {images.length > 0 ? (
                    <Flex _groupHover={{ opacity: 0.5 }}>
                      <GatsbyImage
                        image={images[0].image.asset.gatsbyImageData}
                        alt="b"
                      />
                    </Flex>
                  ) : (
                    <Icon
                      as={AiFillCamera}
                      color="gray.400"
                      bg="gray.200"
                      boxSize={200}
                      p="1rem"
                      _groupHover={{ opacity: 0.5 }}
                    />
                  )}
                  <Flex direction="column" p="2rem 1.25rem">
                    <Heading>{title}</Heading>
                    <Text>Beepbeep</Text>
                  </Flex>
                </Flex>
              </Link>
            )
          })}
        </VStack>
      </Container>
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
              gatsbyImageData(width: 200, height: 200, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default Gallery
