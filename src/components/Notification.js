import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { CSSTransition } from "react-transition-group"

const Notification = ({ children }) => {
  const [closed, setClosed] = useState(false)
  const notificationRef = useRef()
  useEffect(() => {
    if (!closed) {
      notificationRef.current.focus()
    }
  })

  return (
    <CSSTransition
      in={!closed}
      timeout={300}
      unmountOnExit
      classNames="notification"
      onEnter={() => setClosed(!closed)}
      onexited={() => setClosed(closed)}
    >
      <div className="notification is-warning">
        <button
          aria-label="Close notification"
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
    </CSSTransition>
  )
}

Notification.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Notification
