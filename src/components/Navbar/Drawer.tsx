import {
  Box,
  Drawer as ChDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps as ChDrawerProps,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import Link from 'components/Link'
import { FC } from 'react'
import { NavItems } from 'types/SanityExtended'

interface DrawerProps extends Omit<ChDrawerProps, 'children'> {
  navItems?: NavItems
}

const Drawer: FC<DrawerProps> = ({ navItems, ...rest }) => {
  return (
    <ChDrawer {...rest}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Categories</DrawerHeader>
        <DrawerBody>
          <UnorderedList>
            {navItems?.map(category => {
              const { title, slug, subCategories } = category

              return (
                <Box key={slug}>
                  <Link href={`/categories/${slug}`}>
                    <ListItem>{title}</ListItem>
                  </Link>
                  {subCategories && (
                    <UnorderedList>
                      {subCategories?.map(category => {
                        const { title, slug } = category

                        return (
                          <Link key={slug} href={`/categories/${slug}`}>
                            <ListItem>{title}</ListItem>
                          </Link>
                        )
                      })}
                    </UnorderedList>
                  )}
                </Box>
              )
            })}
          </UnorderedList>
        </DrawerBody>
      </DrawerContent>
    </ChDrawer>
  )
}

export default Drawer
