import React, { useState } from "react"
import { Flex } from "@chakra-ui/react"
import Logo from "./Logo"
import ToggleButton from "./ToggleButton"
import MenuLinks from "./MenuLinks"
const Navbar = props => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg="white"
      color="primary.900"
      {...props}
    >
      <Logo />
      <ToggleButton toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </Flex>
  )
}

export default Navbar
