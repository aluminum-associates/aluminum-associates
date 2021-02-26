import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Card from "../components/Card"

export default function Products({ data }) {
  return (
    <Layout title="Products">
      <Hero size="medium">
        <h1 className="title is-size-2">Products</h1>
      </Hero>
      <section className="section">
        <div className="container">
          <div className="card-wrapper">
            {data.allSanityCategory.edges.map(({ node: category }) => {
              const { id, slug, heroImage, title, description } = category
              return (
                <Card
                  key={id}
                  to={"/products/" + slug.current}
                  image={heroImage ? heroImage.image.asset.fluid : null}
                  alt={heroImage ? heroImage.alternativeText : null}
                  title={title}
                  body={description}
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
