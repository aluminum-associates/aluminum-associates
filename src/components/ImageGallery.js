import React, { useState } from "react"
import PropTypes from "prop-types"
import GatsbyImage from "gatsby-plugin-image"
import { motion } from "framer-motion"
import Lightbox from "react-image-lightbox"

import "react-image-lightbox/style.css"

export default function ImageGallery({ images }) {
  const [isOpen, setLightbox] = useState(false)
  const [index, setIndex] = useState(0)

  return images ? (
    <div className="image-gallery-wrapper">
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
              flex: 1,
              border: "0",
              background: "none",
              outline: "none",
              cursor: "click",
              minWidth: "120px",
              minHeight: "120px",
              maxWidth: "300px",
              maxHeight: "300px",
            }}
            initial={{
              scale: 1,
            }}
            whileHover={{
              scale: 1.05,
            }}
          >
            <GatsbyImage
              image={image.asset.gatsbyImageData}
              alt={alternativeText}
              className="card"
              style={{
                backgroundColor: "transparent",
                minWidth: "inherit",
                minHeight: "inherit",
                maxWidth: "inherit",
                maxHeight: "inherit",
              }}
              imgStyle={{
                objectFit: "cover",
                minWidth: "inherit",
                minHeight: "inherit",
                maxWidth: "inherit",
                maxHeight: "inherit",
              }}
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
