import React, { useState, useEffect, useRef } from "react"
import { InView } from "react-intersection-observer"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import Carousel from "../components/Carousel"
import Testimonial from "../components/Testimonial"
import Notification from "../components/Notification"
import Hero from "../components/Hero"
import VendorBanner from "../components/VendorBanner"
import Card from "../components/Card"

const scrollToRef = ref =>
  window.scrollTo({
    top: ref.current.offsetTop - 122,
    behavior: "smooth",
  })

export default function Home({ data }) {
  const { heroSize, heroImages, cards, testimonials } = data.page
  const [visible, setVisible] = useState(false)
  const contactRef = useRef(null)
  const vendorRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If ref is intersecting, setVisible to load component
        entry.isIntersecting && setVisible(true)
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    )
    vendorRef.current && observer.observe(vendorRef.current)
  })

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
      <section ref={vendorRef} className="section">
        <div className="container">
          <h3 className="subtitle is-uppercase has-text-centered mb-5">
            Vendors We Work With
          </h3>
          {visible ? <VendorBanner /> : null}
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
      <section ref={contactRef} className="section-quote-form">
        <div className="container">
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

      testimonials {
        id
        _rawQuote
        client
        clientTitle
      }
    }
  }
`
