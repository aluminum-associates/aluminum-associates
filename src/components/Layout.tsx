import { Flex, FlexProps } from '@chakra-ui/react'
import { FC } from 'react'
import { NavItems } from 'types/SanityExtended'
import Navbar from './Navbar'

interface LayoutProps extends FlexProps {
  navItems?: NavItems
}

const Layout: FC<LayoutProps> = ({ children, navItems }) => {
  return (
    <Flex direction='column' minH='100%'>
      <Navbar navItems={navItems} />
      {children}
    </Flex>
  )
}

export default Layout
