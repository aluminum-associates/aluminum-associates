import React from "react"
import Layout from "../../components/Layout"
import FooterTabs from "../../components/FooterTabs"

export default function Maintenance() {
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
    <Layout title="Maintenance">
      <div className="hero is-large is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1">
              Frequently Asked Maintenance Questions
            </h1>
          </div>
        </div>
        <FooterTabs tabs={tabs} />
      </div>
      <section className="section">
        <div className="container">
          <h2 className="title is-size-2">Helping You Maintain</h2>
        </div>
      </section>
    </Layout>
  )
}
