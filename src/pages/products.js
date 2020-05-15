import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Card from "../components/Card"

export default function Products({ data }) {
  return (
    <Layout title="Products">
      <div className="hero-product is-large is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Products</h1>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="card-wrapper">
            {data.allSanityCategory.edges.map(({ node: category }) => (
              <Card
                key={category.id}
                to={"/products/" + category.slug.current}
                heroImage={
                  category.heroImage
                    ? category.heroImage.image.asset.fluid
                    : null
                }
                alt={
                  category.heroImage ? category.heroImage.alternativeText : null
                }
                title={category.title}
                description={category.description}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const data = graphql`
  query {
    allSanityCategory(sort: { fields: title }) {
      edges {
        node {
          id
          title
          slug {
            current
          }
        }
      }
    }
  }
`
