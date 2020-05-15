import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/Layout"
import Card from "../components/Card"
import HeroOverlay from "../components/HeroOverlay"

export default function Category({ data }) {
  const category = data.category
  const childCategories = data.childCategories.edges
  const products = data.products.edges
  console.log(childCategories)

  const { title, description, heroImage } = category

  return (
    <Layout
      title={title}
      description={description ? description.substring(0, 154) + "..." : null}
    >
      {heroImage && heroImage.image ? (
        <BackgroundImage
          className="hero is-large is-primary"
          fluid={heroImage.image.asset.fluid}
        >
          <HeroOverlay>
            <div className="hero-body">
              <div className="container">
                <h1 className="title is-size-1">{title}</h1>
              </div>
            </div>
          </HeroOverlay>
        </BackgroundImage>
      ) : (
        <div className="hero is-large is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-size-1">{title}</h1>
            </div>
          </div>
        </div>
      )}
      <section className="section has-background-white-bis">
        <div className="container">
          <div className="card-wrapper">
            {childCategories.map(({ node: category }) => (
              <Card
                to={"/products/" + category.slug.current}
                key={category.id}
                heroImage={
                  !category.heroImage === null
                    ? category.heroImage.image.asset.fluid
                    : null
                }
                title={category.title}
                description={category.description}
              />
            ))}
            {products.map(({ node: product }) => (
              <Card
                to={
                  "/products/" +
                  product.category.slug.current +
                  "/" +
                  product.slug.current
                }
                key={product.id}
                heroImage={
                  product.heroImage.image
                    ? product.heroImage.image.asset.fluid
                    : null
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
            fluid(maxWidth: 1920) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
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
            image {
              asset {
                fluid(maxWidth: 400, maxHeight: 300) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            alternativeText
          }
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
            alternativeText
            image {
              asset {
                fluid(maxWidth: 400, maxHeight: 300) {
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
