import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import FooterTabs from "../components/FooterTabs"
import { Box, Heading } from "@chakra-ui/react"

const FAQ = ({ data }) => {
  const { tabs, slug } = data.allTabs

  const footerTabs = []

  tabs.map(tab => {
    footerTabs.push({
      title: tab.title,
      slug: `/${slug.current}/${tab.slug.current}`,
    })
    return footerTabs
  })

  return (
    <Layout title="Frequently Asked Questions">
      <Box as="section" className="hero is-medium is-primary">
        <Box className="hero-body">
          <Box maxW="70ch" m="0 auto">
            <Heading as="h1">Frequently Asked Questions</Heading>
          </Box>
        </Box>
        <FooterTabs tabs={footerTabs} />
      </Box>
    </Layout>
  )
}

export const data = graphql`
  {
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

export default FAQ
