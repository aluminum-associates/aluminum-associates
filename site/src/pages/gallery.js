import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {
  Box,
  Button,
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Container from "../components/Layout/Container"

const Gallery = ({ data }) => {
  const { title, images } = data.sanityGallery
  const [project, setProject] = useState({})
  const { isOpen, onOpen, onClose } = useDisclosure()
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
              <Button
                key={i}
                variant="unstyled"
                maxW="250px"
                maxH="250px"
                minH="250px"
                boxShadow="xl"
                onClick={() => {
                  setProject({ title, excerpt, image })
                  onOpen()
                }}
              >
                <Box maxW="inherit" maxH="inherit">
                  <Img
                    fixed={image.asset.fixed}
                    alt={title}
                    style={{ maxWidth: "inherit", maxHeight: "inherit" }}
                  />
                </Box>
              </Button>
            )
          })}
        </Grid>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          color="white"
          bg="rgba(0,0,0,0.65)"
          maxW="max-content"
          maxH="90vh"
        >
          <ModalHeader>{project?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column">
            <Box pb="1rem" maxW="100%" maxH="100%">
              <Img
                fixed={project?.image?.asset?.fixed}
                alt={project?.title}
                style={{ maxWidth: "inherit", maxHeight: "inherit" }}
                imgStyle={{ objectFit: "contain" }}
              />
            </Box>
            <Text pb="1rem">{project?.excerpt}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
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
            fixed(width: 1200) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`

export default Gallery
