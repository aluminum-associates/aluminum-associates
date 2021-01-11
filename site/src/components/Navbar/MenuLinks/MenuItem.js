import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { useLocation } from "@reach/router"
import { Link, Text } from "@chakra-ui/react"

const MenuItem = ({ children, inLast, to = "/", internal = true, ...rest }) => {
  const currentPath = useLocation().pathname
  const path =
    (currentPath.includes(to) && to != "/") ||
    (currentPath === "/" && to === "/")

  return (
    <Link
      as={internal ? GatsbyLink : Link}
      href={to}
      _hover={{
        backgroundColor: "gray.100",
        color: "primary.600",
      }}
      w={{ base: "100%", md: "max-content" }}
      borderRadius="4px"
      p="0.5rem 0.75rem"
      flex="0 0 auto"
    >
      <Text
        display="block"
        fontSize={{ base: "lg", md: "xl" }}
        color={path && "primary.600"}
        {...rest}
      >
        {children}
      </Text>
    </Link>
  )
}

export default MenuItem
