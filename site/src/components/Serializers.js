import React, { createElement } from "react"
import PortableText from "@sanity/block-content-to-react"
import imageUrlBuilder from "@sanity/image-url"
import SanityLightbox from "../components/SanityLightbox"

const urlFor = src => {
  return imageUrlBuilder({
    projectId: process.env.GATSBY_SANITY_ID,
    dataset: process.env.GATSBY_SANITY_DATASET,
  }).image(src)
}

export const imageGallery = ({ node }) => {
  const { gallery } = node
  return (
    // <ul
    //   style={{
    //     display: "grid",
    //     gridTemplate: "auto / repeat(auto-fill, minmax(200px, 1fr))",
    //     gridGap: "12px",
    //     padding: "1rem 0"
    //   }}
    // >
    //   {gallery.map((galleryImage, i) => {
    //     const { image, alt } = galleryImage
    //     return (
    //       <li key={i}>
    //         <img
    //           src={urlFor(image).url()}
    //           alt={alt}
    //           style={{
    //             minWidth: "60px",
    //             minHeight: "100px",
    //             maxHeight: "200px",
    //           }}
    //         />
    //       </li>
    //     )
    //   })}
    // </ul>
    <SanityLightbox images={gallery} />
  )
}

export const blockStyles = props => {
  const { style = "normal" } = props.node

  switch (style) {
    case "h1":
      return createElement(
        style,
        { className: "title is-size-1  is-size-3-mobile" },
        props.children
      )
      break

    case "h2":
      return createElement(
        style,
        { className: "title is-size-3 is-size-5-mobile" },
        props.children
      )
      break

    case "h3":
      return createElement(
        style,
        { className: "title is-size-4 is-size-6-mobile" },
        props.children
      )
      break

    default:
      return PortableText.defaultSerializers.types.block(props)
  }
}
