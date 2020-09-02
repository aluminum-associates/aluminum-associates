/** @jsx jsx */
import React, { useState } from "react"
import PropTypes from "prop-types"
import { jsx, css } from "@emotion/core"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const AvailableColors = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <>
      <h2 className="title is-size-4-desktop is-size-6-mobile">
        Available Colors
      </h2>
      <div
        css={css`
          display: grid;
          grid-template: auto / repeat(auto-fill, minmax(100px, 1fr));
          gap: 1rem;
        `}
      >
        {colors.map((color, i) => {
          const { image, name } = color

          return (
            <button
              key={i}
              css={css`
                width: inherit;
                height: 100px;
                background: transparent;
                border: none;
                background-image: url(${image.asset.fixed.src});
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
              `}
              onClick={() => {
                setIsOpen(!isOpen)
                setPhotoIndex(i)
              }}
            />
          )
        })}
      </div>
      <p className="mt-5">
        *Please note color reproduction on your screen won't be an exact match
      </p>
      {isOpen && (
        <Lightbox
          imageTitle={colors[photoIndex].name}
          mainSrc={colors[photoIndex].image.asset.fixed.src}
          nextSrc={
            colors[(photoIndex + 1) % colors.length].image.asset.fixed.src
          }
          prevSrc={
            colors[(photoIndex + colors.length - 1) % colors.length].image.asset
              .fixed.src
          }
          onCloseRequest={() => setIsOpen(!isOpen)}
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % colors.length)
          }
          onMovePrevRequest={() =>
            setPhotoIndex(photoIndex + colors.length - 1) % colors.length
          }
        />
      )}
    </>
  )
}

AvailableColors.propTypes = {
  colors: PropTypes.array.isRequired,
}

export default AvailableColors
