import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default function Card(props) {
  const cardStyle = {
    minWidth: "400px",
    minHeight: "400px",
  }

  const imgStyle = {
    display: "block",
    height: "100%",
    width: "100%",
    paddingTop: "0",
  }

  return (
    <Link to={props.to}>
      <div className="card" style={cardStyle}>
        <div className="card-image">
          {props.heroImage ? (
            <Img
              className="image"
              fluid={props.heroImage}
              imgStyle={imgStyle}
              alt={props.alt}
            />
          ) : null}
        </div>
        <div className="card-content">
          <h2 className="title is-size-4">{props.title}</h2>
          {props.description ? (
            <p className="subtitle is-size-5">{props.description}</p>
          ) : null}
        </div>
      </div>
    </Link>
  )
}
