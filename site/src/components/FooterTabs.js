import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Tabs, TabList, Tab, Link, Flex } from "@chakra-ui/react"
import { useLocation } from "@reach/router"

const FooterTabs = props => {
  const currentPath = useLocation().pathname

  const defaultIndex = props.tabs.map(tab => tab.slug).indexOf(currentPath)

  return (
    <Flex poisition="relative" bottom="0" justifyContent="center" alignItems="center" overflow="hidden">
      <Tabs
        flex={1}
        maxW="75ch"
        variant="enclosed"
        colorScheme="primary"
        defaultIndex={defaultIndex}
        isFitted
      >
        <TabList>
          {props.tabs.map(tab => {
            const { title, slug } = tab
            return (
              <Tab
                key={title}
                p={0}
                _selected={{ color: "primary.800", bg: "white" }}
                _hover={{ bg: "primary.800", color: "white" }}
              >
                <Link
                  flex={1}
                  p="8px 16px"
                  as={GatsbyLink}
                  to={slug}
                  _hover={{ bg: "transparent" }}
                >
                  {title}
                </Link>
              </Tab>
            )
          })}
        </TabList>
      </Tabs>
    </Flex>
  )
}

export default FooterTabs
