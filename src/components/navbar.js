import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.png"

const Navbar = () => {
  const [menu, menuToggle] = useState(false)

  return (
    <nav className="navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              className="logo-img"
              src={Logo}
              alt="Aluminum Associates logo"
            />
          </Link>
          <div
            id="burger"
            className={"navbar-burger" + (menu ? " is-active" : "")}
            onClick={() => menuToggle(!menu)}
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
            <Link
              to="/products"
              className="navbar-item"
              activeClassName="is-active"
            >
              Products
            </Link>
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

export default Navbar
