import React from "react"
import Layout from "../../components/layout"
import FooterTabs from "../../components/FooterTabs"

export default function Installation() {
  const tabs = [
    {
      title: "Installation",
      slug: "/faq/installation",
    },
    {
      title: "Maintenance",
      slug: "/faq/maintenance",
    },
    {
      title: "Product Choice",
      slug: "faq/product-choice",
    },
  ]

  return (
    <Layout title="Installation">
      <div className="hero is-large is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1">
              Frequently Asked Installation Questions
            </h1>
          </div>
        </div>
        <FooterTabs tabs={tabs} />
      </div>
      <section className="section">
        <div className="container">
          <h2 className="title is-size-2">
            How Do I Calculate The Amount Of Vinyl Siding I Will Need?
          </h2>
        </div>
      </section>
    </Layout>
  )
}
