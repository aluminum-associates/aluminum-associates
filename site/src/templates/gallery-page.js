import React, { useState } from "react"
import {
  Button,
  Image,
  Grid,
  Heading,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Flex,
} from "@chakra-ui/react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Container from "../components/Layout/Container"
import { GatsbyImage } from "gatsby-plugin-image"

const GalleryPage = data => {
  const { title, images } = data.pageContext
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

            console.log(image.asset)

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
                <Flex
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top={0}
                  _hover={{
                    opacity: 0.75,
                  }}
                >
                  <GatsbyImage
                    image={image.asset.gatsbyImageData}
                    alt={title}
                    objectPosition="center"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Flex>
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
          m="1.25rem"
        >
          <ModalHeader>{project?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            maxW="inherit"
            m="auto"
          >
            <Flex maxW="100%" maxH="70vh" pb="1rem">
              <GatsbyImage
                image={project?.image?.asset?.gatsbyImageData}
                objectFit="contain"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Flex>
            <Text pb="1rem">{project?.excerpt}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Layout>
  )
}

export default GalleryPage
