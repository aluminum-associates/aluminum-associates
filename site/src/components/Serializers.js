import React, { createElement } from "react"
import PortableText from "@sanity/block-content-to-react"
import ImageGallery from "../components/ImageGallery"

export const imageGallery = ({ node }) => {
  const { gallery } = node
  return (
    // <pre>{JSON.stringify(props, null, 2)}</pre>
    <div>
      {gallery.map(galleryImage => {
        const {image, alt} = galleryImage
        return (
          <img src={image.asset.src} alt={alt} />
          // <pre>{JSON.stringify(image, null, 2)}</pre>
        )
      })}
    </div>
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
