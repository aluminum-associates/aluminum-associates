import React, { useState } from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

import "react-image-lightbox/style.css"
import {
  Box,
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react"

const MotionBox = motion(Box)

export default function ImageGallery({ images }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [index, setIndex] = useState(0)

  return (
    <>
      <Grid gap={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
        {images.map((img, i) => {
          const { image, alternativeText } = img
          return (
            <MotionBox
              key={i}
              as="button"
              flex={1}
              border={0}
              background="none"
              outline="none"
              minW="120px"
              minH="120px"
              maxW="300px"
              maxH="300px"
              onClick={() => {
                onOpen()
                setIndex(images.indexOf(img))
              }}
              initial={{
                opacity: 1,
              }}
              whileHover={{
                opacity: 0.5,
              }}
            >
              <GatsbyImage
                image={image.asset.gatsbyImageData}
                alt={alternativeText}
                style={{
                  backgroundColor: "transparent",
                  minWidth: "inherit",
                  minHeight: "inherit",
                  maxWidth: "inherit",
                  maxHeight: "inherit",
                }}
                imgStyle={{
                  objectFit: "cover",
                  minWidth: "inherit",
                  minHeight: "inherit",
                  maxWidth: "inherit",
                  maxHeight: "inherit",
                }}
              />
            </MotionBox>
          )
        })}
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="transparent" color="white">
          <ModalHeader>{images[index].alternativeText}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <GatsbyImage
              image={images[index].image.asset.gatsbyImageData}
              alt={images[index].alternativeText}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
}
