import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Logo from "../images/aa-logo.png"

export default function Navbar() {
  const [menu, setMenu] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const query = useStaticQuery(data)
  const products = query.products.edges

  let categories = Array.from(new Set(products.map(p => p.node.category)))

  return (
    <nav className="navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              className="logo-img"
              src={Logo}
              alt="Aluminum Associates logo"
              style={{
                minWidth: "auto",
                minHeight: "5rem"
              }}
            />
          </Link>
          <div
            id="burger"
            role="button"
            tabIndex={-1}
            className={"navbar-burger" + (menu ? " is-active" : "")}
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              "&:active": {
                border: "none",
                outline: "none",
              },
            }}
            onClick={() => setMenu(!menu)}
            onKeyDown={() => setMenu(!menu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          id="nav-menu"
          className={"navbar-menu" + (menu ? " is-active" : "")}
        >
          <div className="navbar-end">
            <Link to="/" className="navbar-item" activeClassName="is-active">
              Home
            </Link>
            <Link
              to="/about"
              className="navbar-item"
              activeClassName="is-active"
            >
              About
            </Link>
            <div
              role="button"
              tabIndex={-1}
              className={
                "navbar-item has-dropdown is-hoverable" +
                (dropdown ? " is-active" : null)
              }
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                "&:active": {
                  border: "none",
                  outline: "none",
                },
              }}
              onClick={() => setDropdown(!dropdown)}
              onKeyDown={() => setDropdown(!dropdown)}
            >
              <span className="navbar-link">Products</span>
              <div className="navbar-dropdown">
                {categories.map(category => (
                  <Link
                    key={category.id}
                    to={"/products/" + category.slug.current}
                    className="navbar-item"
                    activeClassName="is-active"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/services"
              className="navbar-item"
              activeClassName="is-active"
            >
              Services
            </Link>
            <Link to="/faq" className="navbar-item" activeClassName="is-active">
              FAQ
            </Link>
            <Link
              to="/contact"
              className="navbar-item"
              activeClassName="is-active"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export const data = graphql`
  {
    products: allSanityProduct(
      filter: { category: { slug: { current: { ne: null } } } }
    ) {
      edges {
        node {
          id
          category {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  }
`
