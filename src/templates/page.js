import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import HeroOverlay from "../components/HeroOverlay"

const Page = ({ data }) => {
  return (
    <Layout title={data.page.title} description="">
      <BackgroundImage className="hero is-large is-primary">
        <HeroOverlay>
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-size-1">Hello.</h1>
            </div>
          </div>
        </HeroOverlay>
      </BackgroundImage>
      <section className="section">
        <div className="container">
          <PortableText blocks={data.page._rawPageContent} />
        </div>
      </section>
    </Layout>
  )
}

// export const data = graphql`
//   query($slug: String!) {
//     page: sanityPages(slug: { current: { eq: "$slug" } }) {
//       slug {
//         current
//       }
//       title
//       heroImage {
//         image {
//           asset {
//             fluid {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//         alternativeText
//       }
//       _rawHeroContent
//       _rawPageContent
//     }
//   }
// `

export default Page
