import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link } from "@chakra-ui/react"
import { AluminumAssociatesLogo } from "../Icons"

const Logo = () => {
  return (
    <Link as={GatsbyLink} href="/">
      <AluminumAssociatesLogo
        color="primary.900"
        boxSize="14rem"
        height="72px"
      />
    </Link>
  )
}

export default Logo
