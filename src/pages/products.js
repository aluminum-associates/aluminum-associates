import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Card from "../components/Card"
import { Heading } from "@chakra-ui/layout"

export default function Products({ data }) {
  return (
    <Layout title="Products">
      <Hero size="medium">
        <Heading as="h1" size="2xl">
          Products
        </Heading>
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
                  image={heroImage?.image?.asset?.gatsbyImageData}
                  alt={heroImage?.alternativeText}
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
