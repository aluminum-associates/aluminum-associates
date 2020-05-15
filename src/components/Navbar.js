import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Logo from "../images/aa-logo.png"

export default function Navbar() {
  const [menu, setMenu] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const query = useStaticQuery(data)
  const categories = query.categories.edges

  return (
    <nav className="navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item is-size-5" to="/">
            <img
              className="logo-img"
              src={Logo}
              alt="Aluminum Associates logo"
              style={{
                minWidth: "auto",
                minHeight: "5rem",
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
            <Link
              to="/"
              className="navbar-item is-size-5"
              activeClassName="is-active"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="navbar-item is-size-5"
              activeClassName="is-active"
            >
              About
            </Link>
            <div
              role="button"
              tabIndex={-1}
              className={
                "navbar-item is-size-5 has-dropdown is-hoverable" +
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
                {categories.map(({ node: category }) =>
                  category.parents.length === 0 ? (
                    <Link
                      key={category.id}
                      to={"/products/" + category.slug.current}
                      className="navbar-item"
                      activeClassName="is-active"
                    >
                      {category.title}
                    </Link>
                  ) : null
                )}
              </div>
            </div>
            <Link
              to="/services"
              className="navbar-item is-size-5"
              activeClassName="is-active"
            >
              Services
            </Link>
            <Link
              to="/faq/installation"
              className="navbar-item is-size-5"
              activeClassName="is-active"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="navbar-item is-size-5"
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
    categories: allSanityCategory(
      filter: { slug: { current: { ne: null } } }
      sort: { fields: title }
    ) {
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
