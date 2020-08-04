import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import PortableText from "@sanity/block-content-to-react"
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
      <div className="container" style={{ maxWidth: "960px" }}>
        <section className="section">
          <PortableText blocks={_rawDescription} />
        </section>
        <hr />
        <section className="section">
          <h2 className="title is-size-3">More Detail</h2>
          <div className="menu">
            <p className="menu-label">Standard Features</p>
            <ul className="menu-list">
              {standardFeatures.map(feature => (
                <li>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="menu">
            <p className="menu-label">Optional Features</p>
            <ul className="menu-list">
              {optionalFeatures.map(feature => (
                <li>{feature}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
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
