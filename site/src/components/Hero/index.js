import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import Overlay from "./Overlay"
import { Box, Flex } from "@chakra-ui/react"
import Container from "../Layout/Container"

const Hero = ({ size, image, children, footer }) => {
  return (
    <Flex
      flex={1}
      direction="column"
      alignItems="stretch"
      justifyContent="space-between"
      bg="primary.800"
      color="white"
      backgroundImage={image && image}
    >
      <Box
        display="flex"
        alignItems="center"
        flex={1}
        minH={size === "fullscreen" ? "calc(100vh - 90px)" : "320px"}
        p={size => {
          switch (size) {
            case "small":
              return "1.5rem"
            case "medium":
              return "9rem 4.5rem"
            case "large":
              return "18rem 6 rem"
          }
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
