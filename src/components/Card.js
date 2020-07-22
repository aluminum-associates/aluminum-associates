import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Card = ({ to, image, alt, title, body }) => {
  return (
    <Link to={to}>
      <div className="card">
        <div className="card-image">
          {image ? (
            <Img fluid={image} alt={alt} />
          ) : (
            <div className="image is-4by3 has-background-grey-lighter"></div>
          )}
        </div>
        <div className="card-body">
          <h2 className="title is-size-4">{title}</h2>
          {body ? <p className="subtitle is-size-5">{body}</p> : null}
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  to: PropTypes.string,
  image: PropTypes.object,
  alt: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
}

export default Card
