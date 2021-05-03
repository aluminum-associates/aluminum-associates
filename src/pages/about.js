import React, { useState } from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Layout from "@components/Layout"
import Hero from "@components/Hero"
import Serializers from "@components/Serializers"
import {
  Box,
  Heading,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react"
import Container from "@components/Layout/Container"
import EmployeeCard from "@components/Cards/EmployeeCard"
import imageUrl from "@utils/imageUrl"
import { MdEmail } from "react-icons/md"
import { GatsbyImage } from "gatsby-plugin-image"

const About = ({ data }) => {
  const {
    title,
    metaDescription,
    _rawHeroCopy,
    _rawBody,
    heroImage,
    heroSize,
  } = data.sanityAbout

  const { teammates } = data.sanityTeam

  const heroImageUrl = imageUrl(heroImage).url()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [modalImage, setModalImage] = useState(null)

  return (
    <Box>
      <Layout title={title} description={metaDescription}>
        <Hero
          image={heroImage && heroImageUrl}
          size={heroSize && heroSize}
          hotspot={heroImage && heroImage.hotspot}
        >
          <Container>
            <PortableText blocks={_rawHeroCopy} serializers={Serializers} />
          </Container>
        </Hero>
        <Box as="section">
          <Container maxW="container.md">
            <VStack align="flex-start" spacing={8}>
              <PortableText blocks={_rawBody} serializers={Serializers} />
              <Heading size="xl">{data.sanityTeam.title}</Heading>
              {teammates.map(teammate => {
                const {
                  _key,
                  name,
                  jobTitle,
                  email,
                  headshot,
                  _rawBio,
                } = teammate
                return (
                  <EmployeeCard
                    key={_key}
                    image={headshot?.asset?.gatsbyImageData}
                    alt={headshot?.asset?.altText}
                    imageOnClick={() => {
                      setModalImage(headshot?.asset)
                      onOpen()
                    }}
                    imageStyles={{
                      maxW: { base: "100%", md: "40%" },
                      maxH: "100%",
                      _hover: {
                        opacity: 0.5,
                      },
                    }}
                    flex={1}
                    borderRadius={6}
                    overflow="hidden"
                    boxShadow="lg"
                  >
                    <VStack align="flex-start" p="2rem" spacing={3}>
                      <Box>
                        <Heading size="lg">{name}</Heading>
                        <Heading as="h2" size="md">
                          {jobTitle}
                        </Heading>
                      </Box>
                      {email && (
                        <Link href={email}>
                          <Box
                            as={MdEmail}
                            display="inline-block"
                            mr="0.5rem"
                          />
                          {email?.replace("mailto:", "")}
                        </Link>
                      )}
                      {_rawBio && (
                        <PortableText
                          blocks={_rawBio}
                          serializers={Serializers}
                        />
                      )}
                    </VStack>
                  </EmployeeCard>
                )
              })}
            </VStack>
          </Container>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="transparent" boxShadow="none" color="white">
            <ModalCloseButton />
            <ModalHeader />
            <ModalBody>
              <GatsbyImage
                image={modalImage?.gatsbyImageData}
                alt={modalImage?.altText}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
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
    sanityTeam {
      title
      teammates {
        _key
        name
        jobTitle
        email
        headshot {
          asset {
            altText
            gatsbyImageData(
              fit: FILL
              placeholder: BLURRED
              width: 1200
              aspectRatio: 1
            )
          }
        }
        _rawBio
      }
    }
  }
`

export default About
