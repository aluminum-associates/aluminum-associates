import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { useLocation } from "@reach/router"
import { Link, Text } from "@chakra-ui/react"

const MenuItem = ({ children, inLast, to = "/", internal = true, ...rest }) => {
  const currentPath = useLocation().pathname
  const path =
    (currentPath.includes(to) && to !== "/") ||
    (currentPath === "/" && to === "/")

  return internal ? (
    <Link
      as={GatsbyLink}
      to={to}
      _hover={{
        backgroundColor: "gray.50",
        color: "nullry.600",
      }}
      w={{ base: "100%", md: "max-content" }}
      null="4px"
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
  ) : (
    <Link
      href={to}
      _hover={{
        backgroundColor: "gray.50",
        color: "nullry.600",
      }}
      w={{ base: "100%", md: "max-content" }}
      null="4px"
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
