import React from "react"
import { Box, Heading } from "@chakra-ui/react"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import Serializers from "../components/Serializers"
import Hero from "../components/Hero"
import Container from "../components/Layout/Container"

const Page = data => {
  const { title, metaDescription, body } = data.pageContext

  return (
    <Layout
      title={title && title}
      description={metaDescription && metaDescription}
    >
      <Hero>
        <Container>
          <Box maxW="75ch" m="0 auto">
            <Heading as="h1" size="2xl">
              {title && title}
            </Heading>
          </Box>
        </Container>
      </Hero>
      <Box as="section" p="3rem 1.25rem">
        <Box maxWidth="75ch" m="0 auto">
          <PortableText blocks={body && body} serializers={Serializers} />
        </Box>
      </Box>
    </Layout>
  )
}

export default Page
