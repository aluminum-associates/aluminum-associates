import React from "react"
import PropTypes from "prop-types"
import PortableText from "@sanity/block-content-to-react"

const Testimonial = ({ quote, client, clientTitle }) => {
  return (
    <div className="testimonial" style={{ margin: "auto" }}>
      <div className="content">
        <PortableText blocks={quote} className="quote" />
        <p className="client">&mdash; {client}</p>
        <p className="client-title">
          {clientTitle ? (
            <>
              <br /> <span>{clientTitle}</span>
            </>
          ) : null}
        </p>
      </div>
    </div>
  )
}

Testimonial.propTypes = {
  quote: PropTypes.array.isRequired,
  client: PropTypes.string.isRequired,
  clientTitle: PropTypes.string,
}

export default Testimonial
