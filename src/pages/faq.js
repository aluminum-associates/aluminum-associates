import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import FooterTabs from "../components/FooterTabs"

const FAQ = ({ data }) => {
  const { tabs, slug } = data.allTabs

  const footerTabs = []

  tabs.map(tab => {
    footerTabs.push({
      title: tab.title,
      slug: `/${slug.current}/${tab.slug.current}`,
    })
  })

  return (
    <Layout title="Frequently Asked Questions">
      <section className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container" style={{ maxWidth: "70ch" }}>
            <h1 className="title is-size-1">Frequently Asked Questions</h1>
          </div>
        </div>
        <FooterTabs tabs={footerTabs} />
      </section>
    </Layout>
  )
}

export const data = graphql`
  {
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

export default FAQ
