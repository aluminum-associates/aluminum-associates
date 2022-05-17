import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  useDisclosure
} from '@chakra-ui/react'
import React, { FC, useRef } from 'react'
import { NavItems } from 'types/SanityExtended'
import Drawer from './Drawer'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'components/Link'
import { navLinks } from 'data/navLinks'

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
            <Link href='/'>
              <Box as='p'>Logo</Box>
            </Link>
            <HStack>
              {navLinks.map(link => {
                const { title, href } = link

                return (
                  <Link key={href} href={href}>
                    {title}
                  </Link>
                )
              })}
              <Button variant='unstyled' onClick={onOpen}>
                <Icon as={GiHamburgerMenu} />
              </Button>
            </HStack>
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
