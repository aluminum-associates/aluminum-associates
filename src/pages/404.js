import { Link as GatsbyLink } from "gatsby"
import { Button } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Box, Container, Heading, Link, Spinner } from "@chakra-ui/react"
import React from "react"
import Layout from "../components/Layout"
import illustratrion from "../images/404.svg"

const Custom404 = () => {
  return (
    <Layout title="404: Not found">
      <Container maxW="container.xl" p="3rem 1.25rem">
        <Heading size="xl">Oops!</Heading>
        <Heading size="lg" color="gray.600" pb="2rem">
          It appears the page you are looking for doesn't exist.
        </Heading>
        <Link as={GatsbyLink} to="/">
          <Button colorScheme="primary">Return Home</Button>
        </Link>
        <Box minW="100%" minH="auto">
          <Image loading={<Spinner size="xl" />} src={illustratrion} />
        </Box>
      </Container>
    </Layout>
  )
}

export default Custom404
