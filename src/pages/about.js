import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import HeroOverlay from "../components/HeroOverlay"

const About = ({ data }) => {
  const copyStyle = {
    maxWidth: "70ch",
  }
  const {
    title,
    metaDescription,
    _rawHeroCopy,
    _rawBody,
    heroImage,
  } = data.sanityAbout

  const BlockRenderer = props => {
    const { style = "normal" } = props.node

    if (/^h\d/.test(style)) {
      const level = style.replace(/[^\d]/g, "")
      return React.createElement(
        style,
        { className: `title is-size-2` },
        props.children
      )
    }

    // Fall back to default handling
    return PortableText.defaultSerializers.types.block(props)
  }

  return (
    <div>
      <Layout title={title} description={metaDescription}>
        {heroImage ? (
          <BackgroundImage
            fluid={heroImage.asset.fluid}
            className="hero is-medium is-primary"
          >
            <HeroOverlay>
              <div className="hero-body">
                <div className="container">
                  <div className="content">
                    <PortableText
                      blocks={_rawHeroCopy}
                      serializers={{ types: { block: BlockRenderer } }}
                    />
                  </div>
                </div>
              </div>
            </HeroOverlay>
          </BackgroundImage>
        ) : (
          <div className="hero is-medium is-primary">
            <div className="hero-body">
              <div className="container">
                <div className="content" style={copyStyle}>
                  <PortableText blocks={_rawHeroCopy} />
                </div>
              </div>
            </div>
          </div>
        )}
        <section className="section">
          <div className="container">
            <div className="content" style={copyStyle}>
              <PortableText blocks={_rawBody} />
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export const data = graphql`
  {
    sanityAbout {
      title
      metaDescription
      _rawBody
      _rawHeroCopy
      heroImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

export default About
