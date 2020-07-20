import React, { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import { CSSTransition } from "react-transition-group"

const Notification = () => {
  const [closed, setClosed] = useState(false)
  const notificationRef = useRef()
  useEffect(() => {
    if (!closed) {
      notificationRef.current.focus()
    }
  })
  const query = useStaticQuery(graphql`
    {
      sanityIndex {
        _rawNotification
      }
    }
  `)
  const { _rawNotification } = query.sanityIndex

  return (
    <CSSTransition
      in={!closed}
      timeout={300}
      unmountOnExit
      classNames="notification"
      onEnter={() => setClosed(!closed)}
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
          <div className="content">
            <PortableText blocks={_rawNotification} />
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Notification
