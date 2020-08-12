import React, { createElement } from "react"
import PortableText from "@sanity/block-content-to-react"
import imageUrlBuilder from "@sanity/image-url"

const urlFor = src => {
  return imageUrlBuilder({
    projectId: "b4m1lsyt",
    dataset: "production",
  }).image(src)
}

export const imageGallery = ({ node }) => {
  const { gallery } = node
  return (
    <div>
      {gallery.map((galleryImage, i) => {
        const { image, alt } = galleryImage
        return <img key={i} src={urlFor(image).url()} alt={alt} />
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
