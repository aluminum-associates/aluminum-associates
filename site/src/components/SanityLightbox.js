import React, { useState } from "react"
import PropTypes from "prop-types"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import { urlFor } from "../components/Serializers"

const SanityLightbox = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <div>
      <div className="sanity-image-gallery mb-6">
        {images.map((node, i) => {
          const { image, alt } = node

          return (
            <button
              key={i}
              onClick={() => {
                setIsOpen(!isOpen)
                setPhotoIndex(i)
              }}
              style={{
                border: 0,
                background: "none",
                cursor: "pointer",
              }}
            >
              <img src={urlFor(image.asset)} alt={alt} />
            </button>
          )
        })}
      </div>
      {isOpen && (
        <Lightbox
          imageTitle={images[photoIndex].alt}
          mainSrc={urlFor(images[photoIndex].image.asset)}
          nextSrc={urlFor(images[(photoIndex + 1) % images.length].image.asset)}
          prevSrc={urlFor(
            images[(photoIndex + images.length - 1) % images.length].image.asset
          )}
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
