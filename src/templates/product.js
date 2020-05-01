import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import ImageGallery from "../components/ImageGallery"
import HeroOverlay from "../components/HeroOverlay"

export default function Product({ data }) {
  const product = data.sanityProduct
  const images = product.imageGallery

  const imageGalleryStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gridGap: "5px",
  }

  const toPlainText = (blocks = []) => {
    return blocks
      .map(block => {
        if (block._type !== "block" || !block.children) {
          return ""
        }
        return block.children.map(child => child.text).join("")
      })
      .join("\n\n")
  }

  return (
    <Layout
      title={product.title}
      description={
        product._rawDescription
          ? toPlainText(product._rawDescription).substring(0, 154) + "..."
          : null
      }
    >
      <BackgroundImage
        fluid={product.heroImage.image.asset.fluid}
        className="hero is-large is-primary"
      >
        <HeroOverlay>
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">{product.title}</h1>
            </div>
          </div>
        </HeroOverlay>
      </BackgroundImage>
      <section className="section">
        <div className="container">
          <div className="product-grid-wrapper">
            <div className="product-specs">
              {product._rawDescription ? (
                <div className="overview">
                  <h1 className="title">Overview</h1>
                  <PortableText blocks={product._rawDescription} />
                </div>
              ) : null}
              {product.standardFeatures !== 0 ? (
                <div className="key-features">
                  <h2 className="title">Standard Features</h2>
                  <ul>
                    {product.standardFeatures.map(feature => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {product.optionalFeatures !== 0 ? (
                <div className="product-options">
                  <h2 className="title">Options</h2>
                  <ul>
                    {product.optionalFeatures.map(feature => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {product.documentation !== 0 ? (
                <div className="documentation">
                  <h2 className="title">Learn More</h2>
                  {product.documentation.map(document => (
                    <a
                      href={document.file.asset.url}
                      key={document.file.asset.id}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {document.title}
                    </a>
                  ))}
                </div>
              ) : null}
              <p className="disclaimer">
                * If you have a question about any of the products that we sell,
                if you'd like to receive a free estimate for professional
                installation, or have questions about a product you're going to
                install yourself, don't hesitate to contact us — we're happy to
                help. You can speak to a sales representative in our showroom at
                1801 Trafalgar St. East, call us at{" "}
                <a href="tel:+(519)453-6400">519-453-6400</a>, or{" "}
                <a href="mailto:info@aluminumassociates.com">
                  click here to e-mail us
                </a>
                .
              </p>
            </div>
            {images !== 0 ? (
              <div className="product-gallery">
                <h2 className="title">Gallery</h2>
                <div style={imageGalleryStyle}>
                  <ImageGallery images={images} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const data = graphql`
  query($slug: String) {
    sanityProduct(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      title
      tags
      categories {
        slug {
          current
        }
      }
      vendor {
        title
        slug {
          current
        }
      }
      heroImage {
        image {
          asset {
            id
            fluid(maxWidth: 1920) {
              ...GatsbySanityImageFluid
            }
          }
        }
        alternativeText
      }
      documentation {
        title
        file {
          asset {
            id
            url
            title
          }
        }
      }
      _rawDescription
      standardFeatures
      optionalFeatures
      imageGallery {
        image {
          asset {
            id
            fluid(maxWidth: 1400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        alternativeText
      }
    }
  }
`
