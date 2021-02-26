import React from "react"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import Map from "../components/Map"
import { MdEmail } from "react-icons/md"
import { AiFillPhone } from "react-icons/ai"
import { FaFax } from "react-icons/fa"
import {
  Box,
  Heading,
  Text,
  Link,
  Grid,
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react"
import Container from "../components/Layout/Container"
import Hero from "../components/Hero"

export default function Contact() {
  return (
    <Box>
      <Layout title="Contact">
      <Hero>
          <Container>
            <Heading as="h1">Let's Get In Touch</Heading>
          </Container>
        </Hero>
        <Box as="section" className="section-contact-page">
          <Container>
            <Grid
              templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, 1fr)" }}
              gap="32px"
            >
              <ContactForm title="Email Us" />
              <Box>
                <Heading as="h2">Visit Us</Heading>
                <Map />
                <Box fontWeight="bold">
                  <Text>
                    Aluminum Associates A Division of Homeway Company Ltd.
                  </Text>
                  <Text pb="1rem">
                    1801 Trafalgar Street East London, Ontario N5W 1X7 Canada
                  </Text>
                  <List>
                    <ListItem>
                      <ListIcon as={AiFillPhone} />
                      <Link href="tel:519-453-6400">Phone: 519-453-6400</Link>
                    </ListItem>
                    <ListItem>
                      <ListIcon as={AiFillPhone} />
                      <Link href="tel:1-800-465-1791">
                        Toll Free: 1-800-465-1791
                      </Link>
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaFax} />
                      <Link href="fax:519-453-6438">Fax: 519-453-6438</Link>
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdEmail} />
                      <Link href="mailto:webpage@aluminumassociates.com">
                        Email Us
                      </Link>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Grid>
          </Container>
        </Box>
      </Layout>
    </Box>
  )
}
