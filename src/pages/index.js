import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import Carousel from "../components/Carousel"
import Testimonial from "../components/Testimonial"
import Notification from "../components/Notification"
import Hero from "../components/Hero"
import Card from "../components/Card"

export default function Home({ data }) {
  const { heroSize, cards, vendors, testimonials } = data.page

  return (
    <Layout title="Home">
      <Hero size={heroSize}>
        <h1 className="title is-size-2">Windows, Doors and More</h1>
      </Hero>
      <Notification />
      <section className="section-services has-background-white-bis">
        <div className="container">
          <div className="card-wrapper-landing">
            {cards.map(card => {
              const { _key, image, alt, title } = card
              return (
                <Card
                  key={_key}
                  image={image.asset.fluid}
                  alt={alt}
                  title={title}
                />
              )
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title">Vendors We Work With</h2>
          <div className="flex-wrap">
            {vendors.map(vendor => (
              <Img
                key={vendor.id}
                fixed={vendor.logo.asset.fixed}
                alt={vendor.title}
                style={{
                  minWidth: "100px",
                  maxHeight: "80px",
                  marginRight: "1rem",
                  flex: 1,
                  justifySelf: "center",
                  alignSelf: "center",
                }}
                imgStyle={{ objectFit: "contain" }}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section-testimonial">
        <div className="container">
          <Carousel>
            {testimonials.map(testimonial => (
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
    vendors: allSanityVendor {
      edges {
        node {
          id
          title
          logo {
            asset {
              fixed(width: 125) {
                ...GatsbySanityImageFixed
              }
            }
          }
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
    page: sanityIndex {
      title
      metaDescription
      notificationActive
      heroImages {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      heroSize
      cards {
        _key
        image {
          asset {
            fluid(maxWidth: 800, maxHeight: 600) {
              ...GatsbySanityImageFluid
            }
          }
          hotspot {
            x
            y
          }
        }
        alt
        title
      }
      vendors {
        id
        title
        logo {
          asset {
            fixed(width: 125) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
      testimonials {
        id
        _rawQuote
        client
        clientTitle
      }
    }
  }
`
