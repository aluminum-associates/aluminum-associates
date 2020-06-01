import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import ProductDropdown from "../components/ProductDropdown"
import Logo from "../images/aa-logo.png"
import { AiFillPhone } from "react-icons/ai"

export default function Navbar() {
  const [menu, setMenu] = useState(false)


  return (
    <nav className="navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item is-size-5" to="/">
            <img
              className="logo-img"
              src={Logo}
              alt="Aluminum Associates logo"
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
            <ProductDropdown />
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
            <a href="tel:519-453-6400" className="navbar-item is-size-5">
              <AiFillPhone />519-453-6400
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
