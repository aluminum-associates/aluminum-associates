import { Icon, Link } from "@chakra-ui/react"
import React from "react"

const MenuSocialIcon = ({ to, icon }) => {
  return (
    <Link
      href={to}
      isExternal
      borderRadius="4px"
      _hover={{ backgroundColor: "gray.50" }}
    >
      <Icon
        as={icon}
        m="0.5rem"
        _hover={{ color: "primary.600" }}
        boxSize="2rem"
      />
    </Link>
  )
}

export default MenuSocialIcon
