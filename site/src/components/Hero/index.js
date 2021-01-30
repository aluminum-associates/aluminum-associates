import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import Overlay from "./Overlay"
import { Box } from "@chakra-ui/react"
import Container from "../Layout/Container"

const Hero = ({ size, fluid, fixed, children }) => {
  return fixed || fluid ? (
    <BackgroundImage
      fixed={fixed ? fixed : null}
      fluid={fluid ? fluid : null}
      className={`hero ${size} is-primary`}
    >
      <Overlay>
        <Box className="hero-body">
          <Box flex={1} minH="100px">
            <Container>{children}</Container>
          </Box>
        </Box>
      </Overlay>
    </BackgroundImage>
  ) : (
    <Box className={`hero ${size} is-primary`}>
      <Box className="hero-body">
        <Box flex={1} minH="100px">
          <Container>{children}</Container>
        </Box>
      </Box>
    </Box>
  )
}

Hero.propTypes = {
  size: PropTypes.string.isRequired,
  fluid: PropTypes.object,
  fixed: PropTypes.object,
}

export default Hero
