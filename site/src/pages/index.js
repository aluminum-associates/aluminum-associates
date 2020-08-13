import React, { useRef } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import Carousel from "../components/Carousel"
import Testimonial from "../components/Testimonial"
import Notification from "../components/Notification"
import Hero from "../components/Hero"
import Card from "../components/Card"

const scrollToRef = ref =>
  window.scrollTo({
    top: ref.current.offsetTop - 122,
    behavior: "smooth",
  })

export default function Home({ data }) {
  const { heroSize, heroImages, cards, vendors, testimonials } = data.page
  const contactRef = useRef(null)

  return (
    <Layout title="Home">
      <Hero
        size={heroSize}
        fluid={heroImages ? heroImages[0].asset.fluid : null}
      >
        <h1 className="title is-size-2 mb-6">Windows, Doors and More</h1>
        <button
          className="button is-warning is-medium"
          onClick={() => {
            scrollToRef(contactRef)
          }}
        >
          Contact Us
        </button>
      </Hero>
      <Notification />
      <section className="section-services has-background-white-bis">
        <div className="container">
          <div className="card-wrapper-landing">
            {cards.map(card => {
              const { _key, image, alt, title, body } = card
              return (
                <Card
                  key={_key}
                  image={image.asset.fluid}
                  alt={alt}
                  title={title}
                  body={body}
                />
              )
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h3 className="subtitle is-uppercase has-text-centered mb-5">
            Vendors We Work With
          </h3>
          <div className="flex-wrap">
            {vendors.map(vendor => {
              const { id, title, logo, url } = vendor
              return (
                <a
                  key={id}
                  className="mx-2 my-2"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    flex: 1,
                  }}
                >
                  <Img
                    fixed={logo.asset.fixed}
                    alt={title}
                    style={{
                      minWidth: "100px",
                      maxHeight: "80px",
                      flex: 1,
                      alignSelf: "center",
                    }}
                    imgStyle={{ objectFit: "contain" }}
                  />
                </a>
              )
            })}
          </div>
        </div>
      </section>
      <section className="section-testimonial">
        <div className="container">
          <Carousel>
            {testimonials.map(testimonial => {
              const { id, _rawQuote, client, clientTitle } = testimonial
              return (
                <Testimonial
                  key={id}
                  quote={_rawQuote}
                  client={client}
                  clientTitle={clientTitle}
                />
              )
            })}
          </Carousel>
        </div>
      </section>
      <section className="section-quote-form">
        <div ref={contactRef} className="container">
          <ContactForm title="Request a Quote" className="form" />
        </div>
      </section>
    </Layout>
  )
}

export const data = graphql`
  {
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
        body
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
        url
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
