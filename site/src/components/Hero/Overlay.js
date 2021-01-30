import React from "react"
import { Flex } from "@chakra-ui/react"

const Overlay = ({ children }) => {
  return (
    <Flex
      minW="100%"
      minH="100%"
      bg="radial-gradient(transparent, rgba(0,0,0,0.45))"
      flex="1 0 auto"
      alignItems="center"
    >
      {children}
    </Flex>
  )
}

export default Overlay
