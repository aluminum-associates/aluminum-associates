import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import HeroOverlay from "./HeroOverlay"

const Hero = ({ size, fluid, fixed, children }) => {
  return fixed || fluid ? (
    <BackgroundImage
      fixed={fixed ? fixed : null}
      fluid={fluid ? fluid : null}
      className={`hero ${size} is-primary`}
    >
      <HeroOverlay>
        <div className="hero-body">
          <div className="container" style={{ maxWidth: "75ch" }}>
            <div className="content">{children}</div>
          </div>
        </div>
      </HeroOverlay>
    </BackgroundImage>
  ) : (
    <div className={`hero ${size} is-primary`}>
      <div className="hero-body">
        <div className="container" style={{ maxWidth: "75ch" }}>
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  size: PropTypes.string.isRequired,
  fluid: PropTypes.object,
  fixed: PropTypes.object,
}

export default Hero
