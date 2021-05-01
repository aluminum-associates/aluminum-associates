import React, { useState } from "react"
import PropTypes from "prop-types"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import {
  AccordionItem as Item,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Grid,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"

const ColorsAccordion = ({ colors }) => {
  const [index, setPhotoIndex] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Item>
        <AccordionButton>
          <Box flex={1} textAlign="left">
            Available Colors
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Grid
            p="1rem 0"
            templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
            gap="12px"
          >
            {colors.map((color, i) => {
              const { image, name } = color

              return (
                <Button
                  variant="unstyled"
                  key={i}
                  w="inherit"
                  h="100px"
                  bg="transparent"
                  border="none"
                  backgroundImage={`url(${image.asset.url})`}
                  backgroundRepeat="no-repeat"
                  backgroundPosition="center"
                  backgroundSize="contain"
                  aria-label={`${name} color swatch button`}
                  onClick={() => {
                    onOpen()
                    setPhotoIndex(i)
                  }}
                />
              )
            })}
          </Grid>
          <Text mt="1rem">
            *Please note color reproduction on your screen won't be an exact
            match
          </Text>
        </AccordionPanel>
      </Item>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="transparent" color="white" boxShadow="none">
          <ModalHeader>{colors[index].name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <GatsbyImage image={colors[index].image.asset.gatsbyImageData} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

ColorsAccordion.propTypes = {
  colors: PropTypes.array.isRequired,
}

export default ColorsAccordion
