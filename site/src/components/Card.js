import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { Box, Heading, Link, Text } from "@chakra-ui/react"
import Img from "gatsby-image"

const Card = ({ to, image, alt, title, body }) => {
  return to ? (
    <Link as={GatsbyLink} to={to}>
      <Box boxShadow="lg" w="100%" h="100%">
        <Box _hover={{ opacity: 0.75 }}>
          {image ? (
            <Img fluid={image} alt={alt} />
          ) : (
            <div className="image is-4by3 has-background-grey-lighter"></div>
          )}
        </Box>
        <Box p="0.75rem 0.75rem 2rem 0.75rem">
          <Heading as="h2" fontSize="2xl">
            {title}
          </Heading>
          {body && <Text>{body}</Text>}
        </Box>
      </Box>
    </Link>
  ) : (
    <Box boxShadow="lg" w="100%" h="100%">
      <Box>
        {image ? (
          <Img fluid={image} alt={alt} />
        ) : (
          <div className="image is-4by3 has-background-grey-lighter"></div>
        )}
      </Box>
      <Box p="0.75rem 0.75rem 2rem 0.75rem">
        <Heading as="h2" fontSize="2xl">
          {title}
        </Heading>
        {body && <Text className="is-size-5">{body}</Text>}
      </Box>
    </Box>
  )
}

Card.propTypes = {
  to: PropTypes.string,
  image: PropTypes.object,
  alt: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
}

export default Card
