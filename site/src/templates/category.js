import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Card from "../components/Card"
import { Box, Grid, Heading } from "@chakra-ui/react"
import Container from "../components/Layout/Container"

export default function Category({ data }) {
  const category = data.category
  const childCategories = data.childCategories.edges
  const products = data.products.edges

  const { title, description, heroImage, heroSize } = category

  return (
    <Layout
      title={title}
      description={description ? description.substring(0, 154) + "..." : null}
    >
      <Hero
        image={heroImage && heroImage.asset ? heroImage.url : null}
        size={heroSize && heroSize}
        hotspot={heroImage && heroImage.hotspot}
      >
        <Container>
          <Heading as="h1" size="2xl">
            {title}
          </Heading>
        </Container>
      </Hero>
      <Box as="section" className="section has-background-white-bis">
        <Container>
          <Grid
            templateColumns={{
              base: "minmax(0, 1fr)",
              md: "repeat(auto-fill, minmax(225px, 1fr))",
            }}
            autoRows="1fr"
            columnGap="24px"
            rowGap={{ base: "24px", md: "36px" }}
          >
            {childCategories.map(({ node: category }) => {
              const { id, heroImage, slug, title, description } = category
              return (
                <Card
                  to={"/products/" + slug.current}
                  key={id}
                  image={
                    heroImage && heroImage.asset ? heroImage.asset.fluid : null
                  }
                  title={title}
                  body={description}
                />
              )
            })}
            {products.map(({ node: product }) => {
              const {
                category,
                slug,
                id,
                heroImage,
                title,
                description,
              } = product
              return (
                <Card
                  to={"/products/" + category.slug.current + "/" + slug.current}
                  key={id}
                  heroImage={
                    heroImage && heroImage.asset ? heroImage.asset.fluid : null
                  }
                  title={title}
                  description={description}
                />
              )
            })}
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export const data = graphql`
  query($slug: String) {
    category: sanityCategory(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      title
      heroImage {
        asset {
          _id
        }
        crop {
          top
          bottom
          left
          right
        }
        hotspot {
          x
          y
        }
      }
      heroSize
    }
    childCategories: allSanityCategory(
      filter: { parents: { elemMatch: { slug: { current: { eq: $slug } } } } }
    ) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          heroImage {
            asset {
              _id
              url
            }
            crop {
              top
              bottom
              left
              right
            }
            hotspot {
              x
              y
            }
          }
          heroSize
        }
      }
    }
    products: allSanityProduct(
      filter: { category: { slug: { current: { eq: $slug } } } }
      sort: { fields: title }
    ) {
      edges {
        node {
          id
          title
          category {
            slug {
              current
            }
          }
          slug {
            current
          }
          heroImage {
            asset {
              _id
              fluid(maxWidth: 400, maxHeight: 300) {
                ...GatsbySanityImageFluid
              }
            }
            hotspot {
              x
              y
            }
          }
          heroSize
        }
      }
    }
  }
`
