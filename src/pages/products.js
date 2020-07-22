import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Card from "../components/Card"

export default function Products({ data }) {
  return (
    <Layout title="Products">
      <div className="hero is-fullheight-with-navbar is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-2">Products</h1>
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
                image={
                  category.heroImage
                    ? category.heroImage.image.asset.fluid
                    : null
                }
                alt={
                  category.heroImage ? category.heroImage.alternativeText : null
                }
                title={category.title}
                body={category.description}
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
