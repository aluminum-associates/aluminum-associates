import React from "react"
import PropTypes from "prop-types"
import PortableText from "@sanity/block-content-to-react"

const Testimonial = ({ quote, client, clientTitle }) => {
  return (
    <div className="content">
      <PortableText blocks={quote} />
      <p>&mdash; {client}</p>
      <p>
        {clientTitle ? (
          <>
            <br /> <span>{clientTitle}</span>
          </>
        ) : null}
      </p>
    </div>
  )
}

Testimonial.propTypes = {
  quote: PropTypes.array.isRequired,
  client: PropTypes.string.isRequired,
  clientTitle: PropTypes.string,
}

export default Testimonial
