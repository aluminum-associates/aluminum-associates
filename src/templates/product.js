import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import ImageGallery from "../components/ImageGallery"
import Accordion from "../components/Accordion"

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
    vendor,
    category,
  } = data.sanityProduct

  return (
    <Layout title={title}>
      <Hero
        size={heroSize}
        fluid={heroImage && heroImage.asset ? heroImage.asset.fluid : null}
      >
        <h1 className="title is-size-2">{title}</h1>
      </Hero>
      <div className="container" style={{ maxWidth: "960px" }}>
        <section className="section">
          {images && images.length !== 0 ? (
            <div className="product-wrapper">
              <ImageGallery images={images} />
              <div className="product-copy">
                <h2 className="title is-size-3 is-size-4-mobile">{title}</h2>
                <h3 className="subtitle is-size-6">
                  <a
                    href={vendor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {vendor.title}
                  </a>{" "}
                  -{" "}
                  <Link to={`/products/${category.slug.current}`}>
                    {category.title}
                  </Link>
                </h3>
                <PortableText blocks={_rawDescription} />
                {standardFeatures || optionalFeatures ? (
                  <div className="menus my-2">
                    {standardFeatures.length > 0 && (
                      <Accordion
                        title="Standard Features"
                        list={standardFeatures}
                      />
                    )}
                    {optionalFeatures.length > 0 && (
                      <Accordion
                        title="Optional Features"
                        list={optionalFeatures}
                      />
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          ) : (
            <div className="product-copy">
              <h2 className="title is-size-3 is-size-4-mobile">{title}</h2>
              <h3 className="subtitle is-size-4 is-size-5-mobile">
                {vendor.title}
              </h3>
              <PortableText blocks={_rawDescription} />
              {standardFeatures || optionalFeatures ? (
                <div className="menus my-2">
                  {standardFeatures.length > 0 && (
                    <Accordion
                      title="Standard Features"
                      list={standardFeatures}
                    />
                  )}
                  {optionalFeatures.length > 0 && (
                    <Accordion
                      title="Optional Features"
                      list={optionalFeatures}
                    />
                  )}
                </div>
              ) : null}
            </div>
          )}
        </section>
        <hr style={{ border: "1px solid #CFCFCF", margin: "1.5rem" }} />
        <section className="section">
          <h2 className="title is-size-3 is-size-4-mobile">More Detail</h2>
          <div className="details-wrapper"></div>
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
        url
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
            fixed(width: 800) {
              ...GatsbySanityImageFixed
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
