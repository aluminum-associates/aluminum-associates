import React from "react"
import { Helmet } from "react-helmet"
import SEO from "./SEO"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout(props) {
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
