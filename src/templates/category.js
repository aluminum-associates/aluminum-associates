import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/Layout"
import Card from "../components/Card"
import HeroOverlay from "../components/HeroOverlay"

export default function Category({ data }) {
  const category = data.category
  const products = data.products

  return (
    <Layout
      title={category.title}
      description={
        category.description
          ? category.description.substring(0, 154) + "..."
          : null
      }
    >
      <BackgroundImage
        className="hero is-large is-primary"
        fluid={category.heroImage ? category.heroImage.image.asset.fluid : null}
      >
        <HeroOverlay>
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-size-1">{category.title}</h1>
            </div>
          </div>
        </HeroOverlay>
      </BackgroundImage>
      <section className="section">
        <div className="container">
          <div className="card-wrapper">
            {products.edges.map(({ node: product }) => (
              <Card
                to={
                  "/products/" +
                  product.category.slug.current +
                  "/" +
                  product.slug.current
                }
                key={product.title}
                heroImage={
                  product.heroImage ? product.heroImage.image.asset.fluid : null
                }
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>
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
        image {
          asset {
            fluid(maxWidth: 1900) {
              ...GatsbySanityImageFluid
            }
          }
        }
        alternativeText
      }
    }
    products: allSanityProduct(
      filter: { category: { slug: { current: { eq: $slug } } } }
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
            alternativeText
            image {
              asset {
                fluid(maxWidth: 1900) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
