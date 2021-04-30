import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { Flex, Heading, Link, Icon, Grid } from "@chakra-ui/react"
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
        <Grid
          maxW="max-content"
          m="0 auto"
          templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, 1fr)" }}
          gap={8}
        >
          {sections.map((section, i) => {
            const { title, slug, images } = section
            return (
              <Link key={i} as={GatsbyLink} to={`/gallery/${slug.current}`}>
                <Flex role="group" boxShadow="lg">
                  {images.length > 0 ? (
                    <Flex
                      maxH={{ base: "120px", md: "150px" }}
                      maxW={{ base: "120px", md: "150px" }}
                      _groupHover={{ opacity: 0.5 }}
                    >
                      <GatsbyImage
                        image={images[0].image.asset.gatsbyImageData}
                        alt="b"
                      />
                    </Flex>
                  ) : (
                    <Icon
                      as={AiFillCamera}
                      maxH={{ base: "120px", md: "150px" }}
                      maxW={{ base: "120px", md: "150px" }}
                      color="gray.400"
                      bg="gray.200"
                      boxSize={200}
                      p="1rem"
                      _groupHover={{ opacity: 0.5 }}
                    />
                  )}
                  <Flex
                    flex={1}
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    p="2rem"
                  >
                    <Heading
                      fontSize={{ base: "lg", md: "2xl" }}
                      textAlign="center"
                    >
                      {title}
                    </Heading>
                  </Flex>
                </Flex>
              </Link>
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
