import React from "react"
import SEO from "../SEO"
import Navbar from "./Navbar"
import Footer from "../Footer"

export default function Layout(props) {
  return (
    <>
      <SEO title={props.title} description={props.description}></SEO>
      <div className="site has-background-white-bis">
        <Navbar />
        <main className="page-content">{props.children}</main>
        <Footer />
      </div>
    </>
  )
}
