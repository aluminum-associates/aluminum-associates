import React, { createElement } from "react"
import imageUrlBuilder from "@sanity/image-url"
import ReactPlayer from "react-player/youtube"
import SanityLightbox from "../components/SanityLightbox"
import {
  Box,
  ListItem,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  UnorderedList,
} from "@chakra-ui/react"

export const urlFor = src => {
  return imageUrlBuilder({
    projectId: process.env.GATSBY_SANITY_ID,
    dataset: process.env.GATSBY_SANITY_DATASET,
  }).image(src)
}

export default {
  types: {
    block: props => {
      const { style = "normal" } = props.node

      switch (style) {
        case "h1":
          return createElement(
            style,
            { className: "title is-size-2  is-size-4-mobile" },
            props.children
          )

        case "h2":
          return createElement(
            style,
            { className: "title is-size-4 is-size-6-mobile" },
            props.children
          )

        case "h3":
          return createElement(
            style,
            { className: "title is-size-5 is-size-6-mobile" },
            props.children
          )

        default:
          return <Text pb="1rem">{props.children}</Text>
      }
    },
    imageGallery: ({ node }) => {
      const { gallery } = node
      return <SanityLightbox images={gallery} />
    },
    videoEmbed: ({ node }) => {
      const { url } = node
      return (
        <div style={{ margin: "2rem auto" }}>
          <ReactPlayer url={url} controls={true} />
        </div>
      )
    },
    table: ({ node }) => {
      return (
        <Box pb="2rem">
          <Table variant="striped" colorScheme="gray" size="sm" boxShadow="md">
            <Tbody>
              {node.rows.map(({ cells: row }, i) => (
                <Tr key={i}>
                  {row.map((cell, i) => (
                    <Td key={i}>{cell}</Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )
    },
  },
  list: ({ children }) => <UnorderedList pb="1rem">{children}</UnorderedList>,
  listItem: ({ children }) => <ListItem>{children}</ListItem>,
}
