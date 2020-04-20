import React from "react"

import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"
import Map from "../components/map"

function Contact() {
  return (
    <>
      <Layout>
        <section className="section-contact-page">
          <div className="container">
            <div className="contact-wrapper">
              <ContactForm title="Email Us" />
              <div className="contact-info">
                <h1 className="title">Visit Us</h1>
                <Map />
                <div className="content has-text-weight-semibold">
                  <p>Aluminum Associates A Division of Homeway Company Ltd.</p>
                  <p>
                    1801 Trafalgar Street East London, Ontario N5W 1X7 Canada
                  </p>
                  <p>
                    Phone: <a href="tel:519-453-6400">519-453-6400</a>
                  </p>
                  <p>
                    Toll Free: <a href="tel:1-800-465-1791">1-800-465-1791</a>
                  </p>
                  <p>
                    Fax: <a href="fax:519-453-6438">519-453-6438</a>
                  </p>
                  <a href="mailto:webpage@aluminumassociates.com">Email Us</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Contact
