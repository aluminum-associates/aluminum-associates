import React from "react"
import Layout from "../components/layout"
import FooterTabs from "../components/FooterTabs"

export default function FAQ() {
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
    <Layout title="Frequently Asked Questions">
      <section className="hero is-large is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1">Frequently Asked Questions</h1>
          </div>
        </div>
        <FooterTabs tabs={tabs} />
      </section>
    </Layout>
  )
}
