import React, { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import { motion, AnimatePresence } from "framer-motion"

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
  const variants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "tween",
      },
    },
  }

  return (
    <AnimatePresence>
      {!closed && (
        <motion.div
          className="notification is-warning"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Notification
