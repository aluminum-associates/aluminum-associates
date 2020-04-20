import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"

const IndexPage = () => {
  // Image graphql queries
  const data = useStaticQuery(graphql`
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
    }
  `)

  // Store images in variables
  const mapImage = data.map.childImageSharp.fluid
  const serviceImage = data.service.childImageSharp.fluid
  const jobImage = data.job.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero is-large is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Aluminum Associates</h1>
          </div>
        </div>
      </section>
      <section className="section-services">
        <div className="container">
          <div className="card-wrapper">
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
          <p className="quote">
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            dicta sunt numquam adipisci perspiciatis, accusamus praesentium,
            tempore beatae quibusdam et, assumenda repellendus. Tenetur dolore
            maxime ducimus in perferendis placeat ab dolores recusandae
            explicabo autem repellendus libero natus voluptas perspiciatis, unde
            laborum quos neque sunt laudantium provident tempore molestias sit
            nemo eum. Aliquam sint fugiat ducimus dolorem similique architecto
            ratione vero quibusdam omnis tenetur? Asperiores voluptatibus
            dolores aliquid sed nam cupiditate nesciunt voluptates sit magnam
            eaque saepe aspernatur quod tempora nemo molestiae rem reiciendis
            facere reprehenderit veritatis corrupti laudantium, quae inventore."
          </p>
          <p className="author">- Joan Johnson</p>
        </div>
      </section>
      <section className="section-quote-form">
        <div className="container">
          <ContactForm title="Request a Quote"/>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
