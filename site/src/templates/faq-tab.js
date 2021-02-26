import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "@chakra-ui/react"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import FooterTabs from "../components/FooterTabs"
import Serializers from "../components/Serializers"
import Hero from "../components/Hero"
import Container from "../components/Layout/Container"

const FaqTab = ({ data }) => {
  const { title, _rawBody } = data.currentTab
  const { slug, metaDescription, tabs } = data.allTabs

  const footerTabs = []

  tabs.map(tab => {
    footerTabs.push({
      title: tab.title,
      slug: `/${slug.current}/${tab.slug.current}`,
    })
    return footerTabs
  })

  return (
    <Layout title={title} description={metaDescription}>
      <Hero
        className="hero is-medium is-primary"
        footer={<FooterTabs tabs={footerTabs} />}
      >
        <Container>
          <Box maxW="75ch" m="0 auto">
            <Heading as="h1">Frequently Asked Questions</Heading>
          </Box>
        </Container>
      </Hero>
      <Box as="section" p="3rem 1.25rem">
        <Box maxWidth="75ch" m="0 auto">
          <PortableText blocks={_rawBody} serializers={Serializers} />
        </Box>
      </Box>
    </Layout>
  )
}

export const data = graphql`
  query($slug: String!) {
    currentTab: sanityFaqTabs(slug: { current: { eq: $slug } }) {
      id
      title
      slug {
        current
      }
      _rawBody
    }
    allTabs: sanityFaq {
      title
      metaDescription
      slug {
        current
      }
      tabs {
        title
        slug {
          current
        }
      }
    }
  }
`

export default FaqTab
