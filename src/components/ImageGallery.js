import React, { useState } from "react"
import Img from "gatsby-image"
import Lightbox from "react-image-lightbox"

import "react-image-lightbox/style.css"

export default function ImageGallery(props) {
  const [isOpen, setLightbox] = useState(false)
  const [index, setIndex] = useState(0)

  const imagesLength = props.images.length
  return (
    <>
      {props.images.map(prop => (
        <a
          role="button"
          onClick={() => {
            setLightbox(!isOpen)
            setIndex(props.images.indexOf(prop))
          }}
          key={prop.image.asset.id}
        >
          <Img
            fluid={prop.image.asset.fluid}
            alt={prop.alternativeText}
            className="gallery-thumbnail card"
          />
        </a>
      ))}
      {isOpen ? (
        <Lightbox
          mainSrc={props.images[index].image.asset.fluid.src}
          nextSrc={
            props.images[(index + 1) % imagesLength].image.asset.fluid.src
          }
          prevSrc={
            props.images[(index + imagesLength - 1) % imagesLength].image.asset
              .fluid.src
          }
          mainSrcThumbnail={props.images[index].image.asset.fluid.base64}
          nextSrcThumbnail={
            props.images[(index + 1) % imagesLength].image.asset.fluid.base64
          }
          imageTitle={props.images[index].alternativeText}
          prevSrcThumbnail={
            props.images[(index + imagesLength - 1) % imagesLength].image.asset
              .fluid.base64
          }
          onCloseRequest={() => {
            setLightbox(!isOpen)
            setIndex(0)
          }}
          onMoveNextRequest={() => {
            setIndex((index + 1) % imagesLength)
          }}
          onMovePrevRequest={() => {
            setIndex((index + imagesLength - 1) % imagesLength)
          }}
        />
      ) : null}
    </>
  )
}
