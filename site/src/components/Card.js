import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Card = ({ to, image, alt, title, body }) => {
  return to ? (
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
          {body ? <p className="is-size-5">{body}</p> : null}
        </div>
      </div>
    </Link>
  ) : (
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
        {body ? <p className="is-size-5">{body}</p> : null}
      </div>
    </div>
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
