import React, { useState, useEffect, useRef } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import Carousel from "../components/Carousel"
import Testimonial from "../components/Testimonial"
import Notification from "../components/Notification"
import Hero from "../components/Hero"
import VendorBanner from "../components/VendorBanner"
import Card from "../components/Card"
import { Box, Button, Grid, Heading } from "@chakra-ui/react"
import Container from "../components/Layout/Container"
import imageUrl from "../../utils/imageUrl"

const scrollToRef = ref =>
  window.scrollTo({
    top: ref.current.offsetTop - 122,
    behavior: "smooth",
  })

export default function Home({ data }) {
  const { heroSize, heroImages, heroHeading, cards, testimonials } = data.page
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
  }, [])

  const { hotspot } = heroImages[0]

  const heroImageUrl = imageUrl(heroImages[0]).width(1440).height(810).url()

  return (
    <Layout title="Home">
      <Hero
        size={heroSize && heroSize}
        image={heroImages && heroImageUrl}
        hotspot={hotspot}
      >
        <Container>
          <Heading as="h1" size="2xl" pb="1rem" color="gray.800">
            {heroHeading}
          </Heading>
          <Button
            size="lg"
            colorScheme="yellow"
            onClick={() => {
              scrollToRef(contactRef)
            }}
          >
            Contact Us
          </Button>
        </Container>
      </Hero>
      <Notification />
      <Box as="section" className="section has-background-white-bis">
        <Container>
          <Grid
            templateColumns={{
              base: "minmax(0, 1fr)",
              md: "repeat(auto-fill, minmax(340px, 1fr))",
            }}
            gap={{ base: "24px", md: "36px" }}
          >
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
          </Grid>
        </Container>
      </Box>
      <Box as="section" ref={vendorRef} className="section">
        <Container>
          <Heading
            as="h3"
            mb="1rem"
            fontSize="2xl"
            fontWeight={200}
            textTransform="uppercase"
            textAlign="center"
          >
            Vendors We Work With
          </Heading>
          {visible ? <VendorBanner /> : null}
        </Container>
      </Box>
      <Box as="section" className="section-testimonial">
        <Container>
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
        </Container>
      </Box>
      <Box as="section" ref={contactRef}>
        <Container display="flex" flexDirection="column" alignItems="center">
          <ContactForm
            title="Request a Quote"
            minW={{ base: "100%", md: "50ch" }}
          />
        </Container>
      </Box>
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
          _id
        }
        crop {
          top
          bottom
          left
          right
        }
        hotspot {
          height
          width
          x
          y
        }
      }
      heroSize
      heroHeading
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
