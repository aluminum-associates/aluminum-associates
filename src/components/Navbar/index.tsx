import {
  Box,
  BoxProps,
  Button,
  Container,
  forwardRef,
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

interface NavbarProps extends BoxProps {
  navItems?: NavItems
}

const Navbar: FC<NavbarProps> = forwardRef(({ navItems, ...rest }, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <>
      <Box
        ref={ref}
        w='100%'
        bg='blue.900'
        color='white'
        boxShadow='md'
        position='fixed'
        zIndex='docked'
        {...rest}
      >
        <Container maxW='container.lg' py={4}>
          <HStack justify='space-between'>
            <Link href='/'>
              <Box as='p'>Logo</Box>
            </Link>
            <HStack align='center'>
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
})

export default Navbar
