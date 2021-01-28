import { Box } from "@chakra-ui/react"
import React from "react"

const Container = ({ children }) => {
  return (
    <Box maxW="1152px" m="0 auto">
      {children}
    </Box>
  )
}

export default Container
