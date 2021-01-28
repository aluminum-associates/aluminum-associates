/** @jsx jsx */
import React, { useState } from "react"
import PropTypes from "prop-types"
import { jsx, css } from "@emotion/core"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import {
  AccordionItem as Item,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Box,
  Grid,
  Button,
  Text,
} from "@chakra-ui/react"

const ColorsAccordion = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
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
                backgroundImage={`url(${image.asset.fixed.src})`}
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="contain"
                aria-label={`${name} color swatch button`}
                onClick={() => {
                  setIsOpen(!isOpen)
                  setPhotoIndex(i)
                }}
              />
            )
          })}
        </Grid>
        <Text mt="1rem">
          *Please note color reproduction on your screen won't be an exact match
        </Text>
      </AccordionPanel>
      {isOpen && (
        <Lightbox
          imageTitle={colors[photoIndex].name}
          mainSrc={colors[photoIndex].image.asset.fixed.src}
          nextSrc={
            colors[(photoIndex + 1) % colors.length].image.asset.fixed.src
          }
          prevSrc={
            colors[(photoIndex + colors.length - 1) % colors.length].image.asset
              .fixed.src
          }
          onCloseRequest={() => setIsOpen(!isOpen)}
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % colors.length)
          }
          onMovePrevRequest={() =>
            setPhotoIndex(photoIndex + colors.length - 1) % colors.length
          }
        />
      )}
    </Item>
  )
}

ColorsAccordion.propTypes = {
  colors: PropTypes.array.isRequired,
}

export default ColorsAccordion
