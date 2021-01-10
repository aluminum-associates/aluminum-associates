import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link, Text } from "@chakra-ui/react"

const MenuItem = ({ children, inLast, to = "/", ...rest }) => {
  return (
    <Link as={GatsbyLink} href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}

export default MenuItem
