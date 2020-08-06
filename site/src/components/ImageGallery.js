import React, { useState } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import Lightbox from "react-image-lightbox"

import "react-image-lightbox/style.css"

export default function ImageGallery({ images }) {
  const [isOpen, setLightbox] = useState(false)
  const [index, setIndex] = useState(0)

  return images ? (
    <div
      className="image-gallery-wrapper"
      style={{
        maxHeight: "700px",
        minHeight: "600px",
      }}
    >
      {images.map(prop => {
        const { image, alternativeText } = prop

        return (
          <motion.button
            aria-label="Image thumbnail"
            onClick={() => {
              setLightbox(!isOpen)
              setIndex(images.indexOf(prop))
            }}
            key={image.asset.id}
            style={{
              border: "0",
              background: "none",
              outline: "none",
              cursor: "click",
              width: "100%",
              height: "100%",
            }}
            initial={{
              scale: 1,
            }}
            whileHover={{
              scale: 1.05,
            }}
          >
            <Img
              fluid={image.asset.fluid}
              alt={alternativeText}
              className="gallery-thumbnail card"
              style={{ width: "100%", height: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </motion.button>
        )
      })}
      {isOpen ? (
        <Lightbox
          mainSrc={images[index].image.asset.fixed.src}
          nextSrc={images[(index + 1) % images.length].image.asset.fixed.src}
          prevSrc={
            images[(index + images.length - 1) % images.length].image.asset
              .fixed.src
          }
          mainSrcThumbnail={images[index].image.asset.fixed.base64}
          nextSrcThumbnail={
            images[(index + 1) % images.length].image.asset.fixed.base64
          }
          imageTitle={images[index].alternativeText}
          prevSrcThumbnail={
            images[(index + images.length - 1) % images.length].image.asset
              .fixed.base64
          }
          onCloseRequest={() => {
            setLightbox(!isOpen)
            setIndex(0)
          }}
          onMoveNextRequest={() => {
            setIndex((index + 1) % images.length)
          }}
          onMovePrevRequest={() => {
            setIndex((index + images.length - 1) % images.length)
          }}
        />
      ) : null}
    </div>
  ) : null
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
}