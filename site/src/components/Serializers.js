import React, { createElement } from "react"
import PortableText from "@sanity/block-content-to-react"
import imageUrlBuilder from "@sanity/image-url"
import ReactPlayer from "react-player/youtube"
import SanityLightbox from "../components/SanityLightbox"

export const urlFor = src => {
  return imageUrlBuilder({
    projectId: process.env.GATSBY_SANITY_ID,
    dataset: process.env.GATSBY_SANITY_DATASET,
  }).image(src)
}

export const imageGallery = ({ node }) => {
  const { gallery } = node
  return <SanityLightbox images={gallery} />
}

export const videoEmbed = ({ node }) => {
  const { url } = node
  return (
    <div style={{ margin: "2rem auto" }}>
      <ReactPlayer url={url} controls={true} />
    </div>
  )
}

export const list = ({ children }) => (
  <ul
    style={{
      listStyleType: "disc",
      listStylePosition: "outside",
      marginBottom: "1rem",
      marginLeft: "2ch",
    }}
  >
    {children}
  </ul>
)

export const table = ({ node }) => {
  return (
    <table className="table is-bordered is-striped">
      <tbody>
        {node.rows.map(({ cells: row }, i) => {
          return (
            <tr key={i} className="tr">
              {row.map((cell, i) => {
                return (
                  <td key={i} className="td">
                    {cell}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export const blockStyles = props => {
  const { style = "normal" } = props.node

  switch (style) {
    case "h1":
      return createElement(
        style,
        { className: "title is-size-2  is-size-4-mobile" },
        props.children
      )
      break

    case "h2":
      return createElement(
        style,
        { className: "title is-size-4 is-size-6-mobile" },
        props.children
      )
      break

    case "h3":
      return createElement(
        style,
        { className: "title is-size-5 is-size-6-mobile" },
        props.children
      )
      break

    default:
      return PortableText.defaultSerializers.types.block(props)
  }
}
