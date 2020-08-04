import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

const Product = ({ data }) => {
  const {
    _rawDescription,
    _rawAdditionalInfo,
    heroImage,
    heroSize,
    images,
    title,
    standardFeatures,
    optionalFeatures,
    documentation,
  } = data.sanityProduct

  return (
    <Layout>
      <Hero
        size={heroSize}
        fluid={heroImage && heroImage.asset ? heroImage.asset.fluid : null}
      >
        <h1 className="title is-size-2">{title}</h1>
      </Hero>
    </Layout>
  )
}

const data = graphql`
  query($slug: String!) {
    sanityProduct(slug: { current: { eq: $slug } }) {
      id
      title
      slug {
        current
      }
      category {
        id
        title
        slug {
          current
        }
      }
      heroImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      heroSize
      vendor {
        id
        title
        slug {
          current
        }
      }
      _rawDescription
      images: imageGallery {
        image {
          asset {
            id
            fluid(maxWidth: 800, maxHeight: 600) {
              ...GatsbySanityImageFluid
            }
          }
          hotspot {
            x
            y
          }
        }
        alternativeText
      }
      standardFeatures
      optionalFeatures
      documentation {
        file {
          asset {
            id
            title
            url
          }
        }
      }
      _rawAdditionalInfo
    }
  }
`

export default Product
