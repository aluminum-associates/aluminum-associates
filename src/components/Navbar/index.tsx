import { Box, Button, Container, HStack, useDisclosure } from '@chakra-ui/react'
import React, { FC, useRef } from 'react'
import { NavItems } from 'types/SanityExtended'
import Drawer from './Drawer'
import { GiHamburgerMenu } from 'react-icons/gi'

interface NavbarProps {
  navItems?: NavItems
}

const Navbar: FC<NavbarProps> = ({ navItems }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<any>()

  return (
    <>
      <Box>
        <Container maxW='container.lg'>
          <HStack justify='space-between'>
            <Box as='p'>Logo</Box>
            <Button
              variant='unstyled'
              leftIcon={<GiHamburgerMenu />}
              onClick={onOpen}
            />
          </HStack>
        </Container>
      </Box>
      <Drawer
        navItems={navItems}
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      />
    </>
  )
}

export default Navbar
