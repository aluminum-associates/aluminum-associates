import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function FAQ() {
  return (
    <Layout>
      <SEO title="Frequently Asked Questions" />
      <section className="hero is-large is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1">Frequently Asked Questions</h1>
          </div>
        </div>
      </section>
    </Layout>
  )
}
