import React from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import FooterTabs from "../components/FooterTabs"
import { table } from "../components/Serializers"

const FaqTab = ({ data }) => {
  const { title, _rawBody } = data.currentTab
  const { slug, metaDescription, tabs } = data.allTabs

  const footerTabs = []

  tabs.map(tab => {
    footerTabs.push({
      title: tab.title,
      slug: `/${slug.current}/${tab.slug.current}`,
    })
    return footerTabs
  })

  return (
    <Layout title={title} description={metaDescription}>
      <div className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container" style={{ maxWidth: "75ch" }}>
            <h1 className="title is-size-2">
              Frequently Asked Installation Questions
            </h1>
          </div>
        </div>
        <FooterTabs tabs={footerTabs} />
      </div>
      <section className="section">
        <div className="container" style={{ maxWidth: "75ch" }}>
          <div className="content">
            <PortableText
              blocks={_rawBody}
              serializers={{
                types: {
                  table,
                },
              }}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const data = graphql`
  query($slug: String!) {
    currentTab: sanityFaqTabs(slug: { current: { eq: $slug } }) {
      id
      title
      slug {
        current
      }
      _rawBody
    }
    allTabs: sanityFaq {
      title
      metaDescription
      slug {
        current
      }
      tabs {
        title
        slug {
          current
        }
      }
    }
  }
`

export default FaqTab
