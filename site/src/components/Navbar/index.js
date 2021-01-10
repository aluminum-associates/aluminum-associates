import React, { useState } from "react"
import { Box, Container, Flex, useTheme } from "@chakra-ui/react"
import Logo from "./Logo"
import ToggleButton from "./ToggleButton"
import MenuLinks from "./MenuLinks"
const Navbar = props => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  const { breakpoints } = theme
  console.log(breakpoints)
  return (
    <Box bg="white">
      <Container flex={1} maxW={breakpoints.lg}>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          p="1rem"
          bg="white"
          color="gray.700"
          {...props}
        >
          <Logo />
          <ToggleButton toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
          <MenuLinks isOpen={isOpen} />
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
