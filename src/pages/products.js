import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="hero-product is-large is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Title</h1>
          </div>
        </div>
        <div className="hero-foot">
          <div className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active">
                  <a href="{{ product|url }}">Product Name</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="card-wrapper">
            <a href="">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="" alt="" />
                  </figure>
                </div>
                <div className="card-content">
                  <h2 className="title is-size-4">Product Name</h2>
                  <p className="subtitle is-size-5">Product Description</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Products
