import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { MdEmail } from "react-icons/md"
import { AiFillPhone } from "react-icons/ai"
import { FaFax } from "react-icons/fa"

const Footer = () => {
  const data = useStaticQuery(query)

  return (
    <footer className="footer has-background-white-ter">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-section">
            <h3 className="title is-size-5">
              <Link to="/contact">Contact</Link>
            </h3>
            <p>
              Aluminum Associates <br />A Divison of Homeway Company Ltd.
            </p>
            <p>
              1801 Trafalgar St. East
              <br />
              London, Ontario, N5W 1X7
              <br />
              Canada
            </p>
            <p>
              <AiFillPhone /> Phone:{" "}
              <a href="tel:+1(519)453-6400">(519) 453-6400</a>
            </p>
            <p>
              <AiFillPhone /> Toll Free:{" "}
              <a href="tel:1-800-465-1791">1-800-465-1791</a>
            </p>
            <p>
              <FaFax /> Fax: <a href="tel:+1(519)453-6438">(519) 453-6438</a>
            </p>
            <a href="mailto:info@aluminumassociates.com">
              <MdEmail /> Email Us
            </a>
          </div>
          <div className="footer-section">
            <h3 className="title is-size-5">
              <Link to="/about">About</Link>
            </h3>
          </div>
          <div className="footer-section">
            <h3 className="title is-size-5">
              <Link to="/products">Products </Link>
            </h3>

            {data.categories.edges.map(({ node: product }) =>
              product.parents.length === 0 ? (
                <p key={product.id}>
                  <Link to={`/products/${product.slug.current}`}>
                    {product.title}
                  </Link>
                </p>
              ) : null
            )}
          </div>
          <div className="footer-section">
            <h3 className="title is-size-5">
              <Link to="/services">Services</Link>
            </h3>
          </div>
          <div className="footer-section">
            <h3 className="title is-size-5">
              <Link to="/faq/installation">FAQ</Link>
            </h3>
          </div>
        </div>
        <p className="has-text-centered">
          &copy; Copyright 2020 by Aluminum Associates.
        </p>
      </div>
    </footer>
  )
}

export const query = graphql`
  query {
    categories: allSanityCategory(sort: { fields: title }) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          parents {
            id
            slug {
              current
            }
          }
        }
      }
    }
  }
`

export default Footer
