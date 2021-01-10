import React, { useState } from "react"
import { useLocation } from "@reach/router"
import { Link, graphql, useStaticQuery } from "gatsby"
import ProductDropdown from "./ProductDropdown"
import Logo from "../images/logo.svg"
import { AiFillPhone } from "react-icons/ai"

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const currentPath = useLocation().pathname

  const data = useStaticQuery(graphql`
    {
      allTabs: sanityFaq {
        title
        metaDescription
        slug {
          current
        }
        tabs {
          title
          slug {
            current
          }
        }
      }
    }
  `)
  const { tabs } = data.allTabs

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
                margin: "10px 0"
              }}
            />
          </Link>
          <div
            id="burger"
            role="button"
            aria-label="Burger button"
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
            <ProductDropdown />
            <Link
              to="/services"
              className="navbar-item is-size-5"
              activeClassName="is-active"
            >
              Services
            </Link>
            <Link
              to={`/faq/${tabs[0].slug.current}`}
              className={`navbar-item is-size-5 ${
                currentPath.includes("faq") ? "is-active" : ""
              }`}
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
            <a href="tel:519-453-6400" className="navbar-item is-size-5">
              <AiFillPhone />
              519-453-6400
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
