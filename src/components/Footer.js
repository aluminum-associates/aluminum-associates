import React from "react"
// import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="sections">
          <div className="section">
            <h3 className="is-size-5">Contact</h3>
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
              Phone: <a href="tel:+1(519)453-6400">(519) 453-6400</a>
            </p>
            <p>
              Toll Free: <a href="tel:1-800-465-1791">1-800-465-1791</a>
            </p>
            <p>
              Fax: <a href="tel:+1(519)453-6438">(519) 453-6438</a>
            </p>
            <a href="mailto:info@aluminumassociates.com">Email Us</a>
          </div>
        </div>
        <p className="has-text-centered">
          &copy; Copyright 2020 by Aluminum Associates.
        </p>
      </div>
    </footer>
  )
}

export default Footer