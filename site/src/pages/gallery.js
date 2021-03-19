import React, { useState } from "react"
import { graphql } from "gatsby"
import {
  Button,
  Grid,
  Heading,
  Image,
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
        <Container>
          <Heading as="h1" size="2xl">
            {title}
          </Heading>
        </Container>
      </Hero>
      <Container>
        <Grid
          templateColumns={{
            base: "minmax(0, 1fr)",
            md: "repeat(auto-fill, 250px)",
          }}
          gap="32px"
          p="3rem 1.25rem"
          m="0 auto"
        >
          {images.map((img, i) => {
            const { title, excerpt, image } = img

            return (
              <Button
                key={i}
                variant="unstyled"
                maxW={{ base: "100%", md: "250px" }}
                pt={{ base: "100%", md: 0 }}
                maxH="250px"
                minH="250px"
                boxShadow="xl"
                pos="relative"
                onClick={() => {
                  setProject({ title, excerpt, image })
                  onOpen()
                }}
              >
                <Image
                  fallbackSrc={image.asset.fixed.base64}
                  srcSet={image.asset.fixed.srcSet}
                  fit="cover"
                  align="center"
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top={0}
                  _hover={{
                    opacity: 0.75,
                  }}
                />
              </Button>
            )
          })}
        </Grid>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="white" bg="rgba(0,0,0,0.65)" maxW="max-content">
          <ModalHeader>{project?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            maxW="inherit"
            m="auto"
          >
            <Image
              fallbackSrc={project?.image?.asset?.fixed?.base64}
              srcSet={project?.image?.asset?.fixed?.srcSet}
              alt={project?.title}
              fit="contain"
              maxW="100%"
              maxH="70vh"
              pb="1rem"
            />
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
