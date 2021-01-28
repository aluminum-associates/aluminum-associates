import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "@chakra-ui/react"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import FooterTabs from "../components/FooterTabs"
import Serializers from "../components/Serializers"

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
      <Box className="hero is-medium is-primary">
        <Box className="hero-body">
          <Box maxW="75ch" m="0 auto">
            <Heading as="h1">Frequently Asked Questions</Heading>
          </Box>
        </Box>
        <FooterTabs tabs={footerTabs} />
      </Box>
      <Box as="section" className="section">
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
