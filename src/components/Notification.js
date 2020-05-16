import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"

const Notification = ({ children }) => {
  const [closed, setClosed] = useState(false)
  const notificationRef = useRef()
  useEffect(() => {
    notificationRef.current.focus()
  })

  return (
    <div className={"notification is-warning " + (closed ? "is-hidden" : null)}>
      <button
        className="delete"
        onClick={() => setClosed(!closed)}
        ref={notificationRef}
        tabIndex={-1}
        onKeyDown={e => (e.key === "Escape" ? setClosed(!closed) : null)}
      ></button>
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
