import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverCloseButton,
  Text,
  Box,
  Link,
  Grid,
  Heading,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"
import React from "react"

const MenuDropdown = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      childCategories: allSanityCategory(
        filter: { slug: { current: { ne: null } } }
      ) {
        edges {
          node {
            id
            title
            slug {
              current
            }
            parents {
              id
              title
              slug {
                current
              }
            }
          }
        }
      }
      parentCategories: sanitySiteSettings {
        edges: prodCatOrder {
          id
          title
          slug {
            current
          }
        }
      }
      products: allSanityProduct {
        edges {
          node {
            id
            title
            slug {
              current
            }
            category {
              title
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)
  const parentCategories = data.parentCategories.edges
  const childCategories = data.childCategories.edges.filter(
    ({ node }) => node.parents.length > 0
  )
  const products = data.products.edges

  // 1. map over array and find "parent" categories and push to new array*/}
  // 2. find "child" categories and have them be sub-menu items of parent (in a new array)
  // 3. for every nth index, return a new block of items
  // 4. each grouping needs to have a class of "navbar-item" with a child div of "navbar-content"

  return (
    <>
      <Box display={{ base: "none", md: "block" }}>
        <Popover placement="bottom">
          <PopoverTrigger>
            <Text
              display="block"
              fontSize={{ base: "lg", md: "xl" }}
              _hover={{
                backgroundColor: "gray.50",
                color: "primary.600",
              }}
              w={{ base: "100%", md: "max-content" }}
              borderRadius="4px"
              p="0.5rem 0.75rem"
              flex="0 0 auto"
            >
              {children} <ChevronDownIcon color="primary.900" />
            </Text>
          </PopoverTrigger>
          <PopoverContent w="700px" p="1.25rem">
            <PopoverCloseButton />
            <PopoverBody>
              <Grid templateColumns="repeat(3, 1fr)" rowGap={4} columnGap={3}>
                {parentCategories.map(parent => (
                  <Box key={parent.id}>
                    <Heading size="md">{parent.title}</Heading>
                    <UnorderedList listStyleType="none" marginLeft={0}>
                      {childCategories
                        .filter(
                          ({ node: child }) =>
                            child.parents[0].title === parent.title
                        )
                        .map(({ node: child }) => {
                          return (
                            <ListItem key={child.id}>
                              <Link
                                as={GatsbyLink}
                                to={`/products/${child.slug.current}`}
                              >
                                {child.title}
                              </Link>
                            </ListItem>
                          )
                        })}
                      {products.map(({ node: product }) =>
                        product.category &&
                        product.category.title === parent.title ? (
                          <ListItem key={product.id}>
                            <Link
                              as={GatsbyLink}
                              to={`/products/${product.category.slug.current}/${product.slug.current}`}
                            >
                              {product.title}
                            </Link>
                          </ListItem>
                        ) : null
                      )}
                    </UnorderedList>
                  </Box>
                ))}
              </Grid>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
      <Accordion display={{ base: "block", md: "none" }} w="100%" allowToggle>
        <AccordionItem borderStyle="none">
          <AccordionButton p={0}>
            <Text
              display="flex"
              alignItems="center"
              fontSize={{ base: "lg", md: "xl" }}
              _hover={{
                backgroundColor: "gray.50",
                color: "primary.600",
              }}
              w={{ base: "100%", md: "max-content" }}
              borderRadius="4px"
              p="0.5rem 0.75rem"
              flex="0 0 auto"
            >
              {children} <AccordionIcon />
            </Text>
          </AccordionButton>
          <AccordionPanel>
            <UnorderedList listStyleType="none">
              {parentCategories.map(parent => {
                const { id, title, slug } = parent
                return (
                  <ListItem
                    display="flex"
                    key={id}
                    w="100%"
                    _hover={{
                      bg: "gray.50",
                    }}
                  >
                    <Link
                      as={GatsbyLink}
                      to={`/products/${slug.current}`}
                      w="100%"
                      fontSize="lg"
                    >
                      {title}
                    </Link>
                  </ListItem>
                )
              })}
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default MenuDropdown
