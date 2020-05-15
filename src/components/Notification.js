import React, { useState } from "react"
import PropTypes from "prop-types"

const Notification = ({ children }) => {
  const [closed, setClosed] = useState(false)

  return (
    <div
      className={"notification is-warning " + (closed ? "is-hidden" : null)}
    >
      <button className="delete" onClick={() => setClosed(!closed)}></button>
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  )
}

Notification.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Notification
