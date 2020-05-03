import React from "react"
import PropTypes from "prop-types"

const Quote = props => {
  const style = {
    ":focus": {
      border: "none",
      outline: "none",
    },
  }

  return (
    <div className="quote-wrapper" style={style}>
      <p className="quote">{props.quote}</p>
      {props.author && <p className="author">- {props.author}</p>}
    </div>
  )

}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
}

export default Quote
