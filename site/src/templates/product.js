import React from "react"
import { Link as GatsbyLink, graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import ImageGallery from "../components/ImageGallery"
import DocumentAccordion from "../components/Accordions/DocumentAccordion"
import Serializers from "../components/Serializers"
import { Accordion, Box, Grid, Heading, Link } from "@chakra-ui/react"
import Container from "../components/Layout/Container"
import AccordionItem from "../components/Accordions/AccordionItem"
import ColorsAccordion from "../components/Accordions/ColorsAccordion"

const Product = ({ data }) => {
  const {
    title,
    images,
    vendor,
    category,
    heroSize,
    heroImage,
    documentation,
    _rawDescription,
    standardFeatures,
    optionalFeatures,
    availableColors,
    _rawAdditionalInfo,
  } = data.sanityProduct

  return (
    <Layout title={title}>
      <Hero
        size={heroSize}
        fluid={heroImage && heroImage.asset ? heroImage.asset.fluid : null}
      >
        <Container>
          <Heading as="h1">{title}</Heading>
        </Container>
      </Hero>
      <Container>
        <Box as="section" className="section">
          <Grid templateColumns={images.length === 0 && "1fr"}>
            {images && images.length > 0 ? (
              <ImageGallery images={images} />
            ) : null}
            <Box>
              <Heading as="h2" size="lg">
                {title}
              </Heading>
              <Heading as="h3" size="md" color="gray.600">
                {vendor && (
                  <Link href={vendor.url} isExternal>
                    {vendor.title}
                  </Link>
                )}{" "}
                -{" "}
                {category && (
                  <Link
                    as={GatsbyLink}
                    to={`/products/${category.slug.current}`}
                  >
                    {category.title}
                  </Link>
                )}
              </Heading>
              <PortableText
                blocks={_rawDescription}
                serializers={Serializers}
              />
              {standardFeatures ||
              optionalFeatures ||
              availableColors ||
              documentation ? (
                <div className="menus my-2">
                  <Accordion allowToggle allowMultiple>
                    {standardFeatures && standardFeatures.length !== 0 && (
                      <AccordionItem
                        title="Standard Features"
                        list={standardFeatures}
                      />
                    )}
                    {optionalFeatures && optionalFeatures.length !== 0 && (
                      <AccordionItem
                        title="Optional Features"
                        list={optionalFeatures}
                      />
                    )}
                    {availableColors && availableColors.length !== 0 && (
                      <ColorsAccordion colors={availableColors.colors} />
                    )}
                    {documentation && documentation.length !== 0 && (
                      <DocumentAccordion documentation={documentation} />
                    )}
                  </Accordion>
                </div>
              ) : null}
            </Box>
          </Grid>
        </Box>
        {_rawAdditionalInfo && (
          <>
            <hr style={{ border: "1px solid #CFCFCF", margin: "1.5rem" }} />
            <section className="section">
              <h2 className="title is-size-3 is-size-4-mobile">More Detail</h2>
              <PortableText
                blocks={_rawAdditionalInfo}
                serializers={Serializers}
              />
            </section>
          </>
        )}
        <section className="section">
          <p className="disclaimer">
            * If you have a question about any of the products that we sell, if
            you'd like to receive a free estimate for professional installation,
            or have questions about a product you're going to install yourself,
            don't hesitate to contact us — we're happy to help. You can speak to
            a sales representative in our showroom at 1801 Trafalgar St. East,
            call us at <a href="tel:+(519)453-6400">519-453-6400</a>, or{" "}
            <a href="mailto:info@aluminumassociates.com">
              click here to e-mail us
            </a>
            .
          </p>
        </section>
      </Container>
    </Layout>
  )
}

export const data = graphql`
  query($slug: String!) {
    sanityProduct(slug: { current: { eq: $slug } }) {
      id
      title
      slug {
        current
      }
      category {
        id
        title
        slug {
          current
        }
      }
      heroImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      heroSize
      vendor {
        id
        title
        url
        slug {
          current
        }
      }
      _rawDescription
      images: imageGallery {
        image {
          asset {
            id
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
            fixed(width: 800) {
              ...GatsbySanityImageFixed
            }
          }
          hotspot {
            x
            y
          }
        }
        alternativeText
      }
      standardFeatures
      optionalFeatures
      availableColors {
        colors {
          name
          image {
            asset {
              fixed(width: 300) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
      documentation {
        file {
          asset {
            id
            url
          }
        }
        title
      }
      _rawAdditionalInfo
    }
  }
`

export default Product
