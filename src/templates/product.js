import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import PortableText from "@sanity/block-content-to-react"
import YouTube from "react-youtube"
import { FaFile } from "react-icons/fa"
import Layout from "../components/Layout"
import ImageGallery from "../components/ImageGallery"
import getYouTubeID from "get-youtube-id"

export default function Product({ data }) {
  const product = data.sanityProduct

  const opts = {
    width: "640",
    height: "360",
  }

  const serializers = {
    types: {
      youtube: ({ node }) => (
        <YouTube
          videoId={getYouTubeID(node.url)}
          opts={opts}
          className="has-ratio"
          containerClassName="image is-16by9"
        />
      ),
    },
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
  } = product

  return (
    <Layout
      title={title}
      description={
        _rawDescription
          ? toPlainText(_rawDescription).substring(0, 154) + "..."
          : null
      }
    >
      <Hero
        size={heroSize}
        fluid={heroImage && heroImage.asset ? heroImage.asset.fluid : null}
      >
        <h1 className="title is-size-2">{title}</h1>
      </Hero>
      <section className="section has-background-white-bis">
        <div className="container" style={{ maxWidth: "75ch" }}>
          <level>
            <div className="level-left">
              {images ? <ImageGallery images={images} /> : null}
            </div>
            <div className="level-right"></div>
          </level>
          <div className="product-specs">
            {_rawDescription ? (
              <div className="overview content">
                <h1 className="title">Overview</h1>
                <PortableText blocks={_rawDescription} />
              </div>
            ) : null}
            {standardFeatures.length !== 0 ? (
              <div className="key-features content">
                <h2 className="title">Standard Features</h2>
                <ul>
                  {standardFeatures.map(feature => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {optionalFeatures.length !== 0 ? (
              <div className="product-options content">
                <h2 className="title">Options</h2>
                <ul>
                  {optionalFeatures.map(feature => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {documentation.length !== 0 ? (
              <div className="documentation">
                <h2 className="title">Learn More</h2>
                {documentation.map(document => (
                  <a
                    href={document.file.asset.url}
                    key={document.file.asset.id}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFile /> {document.file.asset.title}
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
          {images.length !== 0 ? (
            <div className="product-gallery">
              <h2 className="title">Gallery</h2>
              <div className="image-gallery-wrapper">
                <ImageGallery images={images} />
              </div>
            </div>
          ) : null}
        </div>
      </section>
      {_rawAdditionalInfo ? (
        <section className="section has-background-white-bis">
          <div className="container">
            <PortableText
              className="content"
              blocks={_rawAdditionalInfo}
              serializers={serializers}
            />
          </div>
        </section>
      ) : null}
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
