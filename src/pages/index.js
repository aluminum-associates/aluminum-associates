import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import Carousel from "../components/Carousel"
import Testimonial from "../components/Testimonial"
import Notification from "../components/Notification"

export default function Home({ data }) {
  const mapImage = data.map.childImageSharp.fluid
  const serviceImage = data.service.childImageSharp.fluid
  const jobImage = data.job.childImageSharp.fluid

  return (
    <Layout title="Home">
      <section className="hero is-fullheight-with-navbar is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-2">Windows, Doors and More</h1>
          </div>
        </div>
      </section>
      <Notification>
        <h2 className="title is-size-4">Open For Curbside Pickup Only</h2>
        <p>
          Due to COVID-19 our showroom is CLOSED to the public but you may order
          materials for pickup using any of the following options.
        </p>
        <p>
          <span>
            Phone: <a href="tel:519-453-6400">519-453-6400</a> (Mon-Fri between
            8am - 5pm)
          </span>
          <br />
          <span>
            Toll Free: <a href="tel:1-800-465-1791">1-800-465-1791</a> (Mon-Fri
            between 8am - 5pm)
          </span>
          <br />
          <span>Fax: 519-453-6438</span>
          <br />
          <span>
            Email:{" "}
            <a href="mailto:sales@aluminumassociates.com">
              sales@aluminumassociates.com
            </a>
          </span>
        </p>
        <p>How does it work?</p>
        <ol>
          <li>
            Place your order via phone, fax or email. Include your phone number
            with any faxed or emailed order so we may contact you !!
          </li>
          <li>
            We accept payment by e-transfer, debit, VISA or MasterCard.{" "}
            <strong>Cash is NOT accepted at this time.</strong>
          </li>
          <li>
            We will notify you when your order is ready, along with a reference
            number.
          </li>
          <li>Park in any of the available spots in front of our showroom.</li>
          <li>
            Call 519-453-6400 and we will provide further instructions for
            picking up your order.{" "}
            <strong>Orders are NOT being loaded at the loading docks.</strong>
          </li>
        </ol>
        <p>
          <strong>
            Product returns or exchanges are NOT accepted at this time!
          </strong>
        </p>
      </Notification>
      <section className="section-services has-background-white-bis">
        <div className="container">
          <div className="card-wrapper-landing">
            <div className="card">
              <div className="card-image">
                <Img fluid={mapImage} alt="Image of a map" loading="eager" />
              </div>
              <div className="card-body">
                <h2 className="subtitle">
                  Servicing London and Surrounding Area Since 1963
                </h2>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <Img
                  fluid={serviceImage}
                  alt="Employee helping customer"
                  loading="eager"
                />
              </div>
              <div className="card-body">
                <h2 className="subtitle">Customer Service</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <Img
                  fluid={jobImage}
                  alt="Contractor drilling into flooring"
                  loading="eager"
                />
              </div>
              <div className="card-body">
                <h2 className="subtitle">Over 100,000 Jobs Serviced</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-testimonial">
        <div className="container">
          <Carousel>
            {data.testimonials.edges.map(({ node: testimonial }) => (
              <Testimonial
                key={testimonial.id}
                quote={testimonial._rawQuote}
                client={testimonial.client}
                clientTitle={testimonial.clientTitle}
              />
            ))}
          </Carousel>
        </div>
      </section>
      <section className="section-quote-form">
        <div className="container">
          <ContactForm title="Request a Quote" className="form" />
        </div>
      </section>
    </Layout>
  )
}

export const data = graphql`
  {
    map: file(relativePath: { eq: "index/map.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    service: file(relativePath: { eq: "index/customer-service.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    job: file(relativePath: { eq: "index/job-serviced.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    testimonials: allSanityTestimonial(limit: 5) {
      edges {
        node {
          id
          _rawQuote
          client
          clientTitle
        }
      }
    }
  }
`
