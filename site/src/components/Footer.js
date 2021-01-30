import React from "react"
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby"
import {
  Box,
  Heading,
  Text,
  Link,
  List,
  ListIcon,
  ListItem,
  Grid,
  Flex,
} from "@chakra-ui/react"
import { MdEmail } from "react-icons/md"
import { AiFillPhone } from "react-icons/ai"
import { FaFax } from "react-icons/fa"
import Container from "./Layout/Container"

const headingStyles = {
  size: "md",
  pb: "0.5rem",
}

const Footer = () => {
  const query = useStaticQuery(data)
  const { categories } = query

  return (
    <Box as="footer" bg="gray.100" p="3rem 1.25rem">
      <Container>
        <Grid
          pb="3rem"
          templateColumns={{
            base: "minmax(0, 1fr)",
            md: "repeat(auto-fill, minmax(250px, 1fr))",
          }}
          gap="32px"
        >
          <Flex direction="column">
            <Heading as="h3" {...headingStyles}>
              <Link as={GatsbyLink} to="/contact">
                Contact
              </Link>
            </Heading>
            <Text>Aluminum Associates</Text>
            <Text>A Divison of Homeway Company Ltd.</Text>
            <Text>1801 Trafalgar St. East</Text>
            <Text>London, Ontario, N5W 1X7</Text>
            <Text>Canada</Text>
            <List>
              <ListItem>
                <ListIcon as={AiFillPhone} color="primary.900" />
                <Link href="tel:+1(519)453-6400">Phone: (519) 453-6400</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillPhone} color="primary.900" />

                <Link href="tel:1-800-465-1791">Toll Free: 1-800-465-1791</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={FaFax} color="primary.900" />
                <Link href="tel:+1(519)453-6438">Fax: (519) 453-6438</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={MdEmail} color="primary.900" />
                <Link href="mailto:info@aluminumassociates.com">Email Us</Link>
              </ListItem>
            </List>
          </Flex>
          <Flex direction="column">
            <Heading as="h3" {...headingStyles}>
              <Link as={GatsbyLink} to="/about">
                About
              </Link>
            </Heading>
          </Flex>
          <Flex direction="column">
            <Heading as="h3" {...headingStyles}>
              <Link as={GatsbyLink} to="/products">
                Products
              </Link>
            </Heading>
            <List>
              {categories.edges.map(({ node: product }) => {
                const { id, title, parents, slug } = product
                return (
                  parents.length === 0 && (
                    <ListItem key={id}>
                      <Link as={GatsbyLink} to={`/products/${slug.current}`}>
                        {title}
                      </Link>
                    </ListItem>
                  )
                )
              })}
            </List>
          </Flex>
          <Flex direction="column">
            <Heading as="h3" {...headingStyles}>
              <Link as={GatsbyLink} to="/services">
                Services
              </Link>
            </Heading>
          </Flex>
          <Flex direction="column">
            <Heading as="h3" {...headingStyles}>
              <Link as={GatsbyLink} to="/faq/installation">
                FAQ
              </Link>
            </Heading>
          </Flex>
          <Flex direction="column">
            <Heading as="h3" {...headingStyles}>
              <Link as={GatsbyLink} to="/sitemap.xml">
                Site Map
              </Link>
            </Heading>
          </Flex>
        </Grid>
        <Text className="has-text-centered">
          &copy; Aluminum Associates 2021
        </Text>
      </Container>
    </Box>
  )
}

export const data = graphql`
  {
    categories: allSanityCategory(sort: { fields: title }) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          parents {
            id
            slug {
              current
            }
          }
        }
      }
    }
  }
`

export default Footer
