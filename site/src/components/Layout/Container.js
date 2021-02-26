import { Box } from "@chakra-ui/react"
import React from "react"

const Container = (props) => {
  return (
    <Box display="block" flex={1} position="relative" p="3rem 1.25rem" maxW="1152px" m="0 auto" {...props}>
      {props.children}
    </Box>
  )
}

export default Container
