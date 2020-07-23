import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Card from "../components/Card"

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
      <Hero size={heroSize} fluid={heroImage ? heroImage.asset.fluid : null}>
        <h1 className="title is-size-2">{title}</h1>
      </Hero>
      <section className="section has-background-white-bis">
        <div className="container">
          <div className="card-wrapper">
            {childCategories.map(({ node: category }) => {
              const { id, heroImage, slug, title, description } = category
              return (
                <Card
                  to={"/products/" + slug.current}
                  key={id}
                  image={heroImage ? heroImage.asset.fluid : null}
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
                  heroImage={heroImage ? heroImage.asset.fluid : null}
                  title={title}
                  description={description}
                />
              )
            })}
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
        asset {
          fluid(maxWidth: 1920) {
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
