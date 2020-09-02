import React from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

const About = ({ data }) => {
  const {
    title,
    metaDescription,
    _rawHeroCopy,
    _rawBody,
    heroImage,
    heroSize,
  } = data.sanityAbout

  const BlockRenderer = props => {
    const { style = "normal" } = props.node

    if (/^h\d/.test(style)) {
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
        <Hero fluid={heroImage.asset.fluid} size={heroSize}>
          <PortableText
            blocks={_rawHeroCopy}
            serializers={{ types: { block: BlockRenderer } }}
          />
        </Hero>
        <section className="section">
          <div className="container" style={{ maxWidth: "75ch" }}>
            <div className="content">
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
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      heroSize
    }
  }
`

export default About
