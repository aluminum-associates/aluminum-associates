import React from "react"
import { Helmet } from "react-helmet"
import Header from "./navbar"
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
        <main className="page-content">
            <Header />
            {props.children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
