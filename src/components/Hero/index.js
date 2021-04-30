import React from "react"
import PropTypes from "prop-types"
import { Box, Flex } from "@chakra-ui/react"

const Hero = ({ size, image, hotspot, children, footer }) => {
  return (
    <Flex
      flex={1}
      direction="column"
      alignItems="stretch"
      justifyContent="space-between"
      color="white"
      bg="primary.800"
      bgImage={image && `url(${image})`}
      backgroundSize="cover"
      backgroundPosition={
        hotspot && `${hotspot?.x * 100}%, ${hotspot?.y * 100}%`
      }
      bgRepeat="no-repeat"
    >
      <Box
        display="flex"
        alignItems="center"
        flex={1}
        minH={size === "fullscreen" ? "calc(100vh - 90px)" : "320px"}
        p={size => {
          var padding = ""
          switch (size) {
            default:
            case "small":
              padding = "1.5rem 0"
            case "medium":
              padding = "9rem 4.5rem"
            case "large":
              padding = "18rem 6rem"
          }
          return padding
        }}
      >
        {children}
      </Box>
      {footer && <Box flex={0}>{footer}</Box>}
    </Flex>
  )
}

Hero.propTypes = {
  size: PropTypes.string.isRequired,
  fluid: PropTypes.object,
  fixed: PropTypes.object,
}

export default Hero
