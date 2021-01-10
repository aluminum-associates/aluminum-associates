import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link, Text } from "@chakra-ui/react"

const MenuItem = ({ children, inLast, to = "/", internal = true, ...rest }) => {
  return (
    <Link
      as={internal ? GatsbyLink : Link}
      href={to}
      display="flex"
      _hover={{
        backgroundColor: "gray.100",
      }}
      w={{ base: "100%", md: "max-content" }}
    >
      <Text display="block" fontSize={{ base: "lg", md: "xl" }} {...rest}>
        {children}
      </Text>
    </Link>
  )
}

export default MenuItem
