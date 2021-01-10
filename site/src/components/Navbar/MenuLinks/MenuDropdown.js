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
} from "@chakra-ui/react"
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"
import React from "react"

const MenuDropdown = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      categories: allSanityCategory(
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
  const categories = data.categories.edges
  const products = data.products.edges
  const links = [...categories, ...products]
  let parentCategories = []
  let childCategories = []

  // 1. map over array and find "parent" categories and push to new array*/}
  // 2. find "child" categories and have them be sub-menu items of parent (in a new array)
  // 3. for every nth index, return a new block of items
  // 4. each grouping needs to have a class of "navbar-item" with a child div of "navbar-content"

  links.map(({ node: link }) => {
    if (link.parents && link.parents.length === 0) {
      parentCategories.push(link)
    } else if (link.parents && link.parents.length > 0) {
      childCategories.push(link)
    }
  })

  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Text display="block" fontSize={{ base: "lg", md: "xl" }}>
          {children}
        </Text>
      </PopoverTrigger>
      <PopoverContent w="700px">
        <PopoverCloseButton />
        <PopoverBody>
          <Grid templateColumns="repeat(3, 1fr)">
            {parentCategories.map(parent => (
              <Box key={parent.id}>
                <Heading size="md">{parent.title}</Heading>
                {childCategories.map(child =>
                  child.parents[0].title === parent.title ? (
                    <Link
                      as={GatsbyLink}
                      key={child.id}
                      to={`/products/${child.slug.current}`}
                    >
                      {child.title}
                    </Link>
                  ) : null
                )}
                {products.map(({ node: product }) =>
                  product.category &&
                  product.category.title === parent.title ? (
                    <Link
                      as={GatsbyLink}
                      key={product.id}
                      to={`/products/${product.category.slug.current}/${product.slug.current}`}
                    >
                      {product.title}
                    </Link>
                  ) : null
                )}
              </Box>
            ))}
          </Grid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default MenuDropdown
