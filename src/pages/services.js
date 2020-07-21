import React from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

const Services = ({ data }) => {
  const {
    title,
    metaDescription,
    heroImage,
    heroSize,
    _rawBody,
  } = data.sanityServices
  return (
    <Layout title={title} description={metaDescription}>
      <Hero size={heroSize} fluid={heroImage ? heroImage.asset.fluid : null}>
        <h1 className="title is-size-2">{title}</h1>
      </Hero>
      <section className="section">
        <div className="container">
          <div className="content">
            <PortableText blocks={_rawBody} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const data = graphql`
  {
    sanityServices {
      title
      metaDescription
      heroImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      heroSize
      _rawBody
    }
  }
`

export default Services
