import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/Layout"
import Card from "../components/Card"
import HeroOverlay from "../components/HeroOverlay"

const Page = ({ data }) => {
  return (
    <Layout title="" description="">
      <div className="hero is-large is-primary">
        <HeroOverlay>
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-size-1">Hello.</h1>
            </div>
          </div>
        </HeroOverlay>
      </div>
      <section className="section">
        <div className="container"></div>
      </section>
    </Layout>
  )
}

// export const data = graphql`
// query{

// }
// `

export default Page
