import React from "react"
import { Helmet } from "react-helmet"
import SEO from "./seo"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = props => {
  return (
    <>
      <SEO title={props.title} description={props.description}></SEO>
      <Helmet
        bodyAttributes={{
          class: "has-navbar-fixed-top",
        }}
      />
      <div className="site">
        <Navbar />
        <main className="page-content">{props.children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
