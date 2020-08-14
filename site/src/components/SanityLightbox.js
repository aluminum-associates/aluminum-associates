import React, { useState } from "react"
import PropTypes from "prop-types"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import { urlFor } from "../components/Serializers"

const SanityLightbox = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  console.log(images[photoIndex].image.asset) //need to use urlFor() to grab images
  return (
    <div>
      {images.map(({ node: image }, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              setIsOpen(!isOpen)
              setPhotoIndex(i)
            }}
          >
            {JSON.stringify(image, null, 2)}
          </button>
        )
      })}
      {isOpen && (
        <Lightbox
          imageTitle={images[photoIndex].image.alt}
          mainSrc={images[photoIndex].image.asset.fixed.src}
          nextSrc={
            images[(photoIndex + 1) % images.length].image.asset.fixed.src
          }
          prevSrc={
            images[(photoIndex + images.length - 1) % images.length].image.asset
              .fixed.src
          }
          mainSrcThumbnail={images[photoIndex].image.asset.fixed.base64}
          nextSrcThumbnail={
            images[(photoIndex + 1) % images.length].image.asset.fixed.base64
          }
          prevSrcThumbnail={
            images[(photoIndex + images.length - 1) % images.length].image.asset
              .fixed.src
          }
          onCloseRequest={() => setIsOpen(!isOpen)}
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
        />
      )}
    </div>
  )
}

SanityLightbox.propTypes = {
  images: PropTypes.array.isRequired,
}

export default SanityLightbox
