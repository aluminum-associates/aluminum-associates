import { Box, Flex, FlexProps, useDimensions } from '@chakra-ui/react'
import { FC, useRef } from 'react'
import { NavItems } from 'types/SanityExtended'
import Navbar from './Navbar'

interface LayoutProps extends FlexProps {
  navItems?: NavItems
}

const Layout: FC<LayoutProps> = ({ children, navItems }) => {
  const navRef = useRef<HTMLDivElement>(null)
  const navDimensions = useDimensions(navRef)
  const navHeight: string = navDimensions?.borderBox.height + 'px'

  return (
    <Flex direction='column' minH='100%'>
      {/* @ts-ignore can't figure out this ref bs :) */}
      <Navbar ref={navRef} navItems={navItems} />
      <Box mt={navHeight}>{children}</Box>
    </Flex>
  )
}

export default Layout
