import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = props => {
  return (
    <>
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
