import React from "react"
import { Link, graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import ImageGallery from "../components/ImageGallery"
import Accordion from "../components/Accordion"
import {
  imageGallery,
  blockStyles,
  videoEmbed,
} from "../components/Serializers"

const Product = ({ data }) => {
  const {
    title,
    images,
    vendor,
    category,
    heroSize,
    heroImage,
    documentation,
    _rawDescription,
    standardFeatures,
    optionalFeatures,
    _rawAdditionalInfo,
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
          <div
            className="product-wrapper"
            style={
              images.length === 0
                ? {
                    gridTemplateColumns: "1fr",
                  }
                : null
            }
          >
            {images && images.length > 0 ? (
              <ImageGallery images={images} />
            ) : null}
            <div className="product-copy">
              <h2 className="title is-size-3 is-size-4-mobile">{title}</h2>
              <h3 className="subtitle is-size-6">
                {vendor && (
                  <a
                    href={vendor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {vendor.title}
                  </a>
                )}{" "}
                -{" "}
                {category && (
                  <Link to={`/products/${category.slug.current}`}>
                    {category.title}
                  </Link>
                )}
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
        </section>
        {_rawAdditionalInfo && (
          <>
            <hr style={{ border: "1px solid #CFCFCF", margin: "1.5rem" }} />
            <section className="section">
              <h2 className="title is-size-3 is-size-4-mobile">More Detail</h2>
              <PortableText
                blocks={_rawAdditionalInfo}
                serializers={{
                  types: {
                    imageGallery: imageGallery,
                    block: blockStyles,
                    videoEmbed: videoEmbed,
                  },
                }}
              />
            </section>
          </>
        )}
        <section className="section">
          <p className="disclaimer">
            * If you have a question about any of the products that we sell, if
            you'd like to receive a free estimate for professional installation,
            or have questions about a product you're going to install yourself,
            don't hesitate to contact us — we're happy to help. You can speak to
            a sales representative in our showroom at 1801 Trafalgar St. East,
            call us at <a href="tel:+(519)453-6400">519-453-6400</a>, or{" "}
            <a href="mailto:info@aluminumassociates.com">
              click here to e-mail us
            </a>
            .
          </p>
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
            fluid(maxWidth: 800) {
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
