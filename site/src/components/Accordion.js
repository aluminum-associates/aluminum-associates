import React, { useState } from "react"
import PropTypes from "prop-types"
import { AiOutlinePlus } from "react-icons/ai"
import { motion, AnimatePresence } from "framer-motion"

const Accordion = ({ title, list }) => {
  const [isOpen, setIsOpen] = useState(false)
  const variants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        type: "tween",
      },
    },
  }

  return (
    <div className="menu pt-2">
      <p
        className="menu-label is-size-6 mb-1"
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: "flex", cursor: "pointer", alignItems: "center" }}
      >
        {title} <AiOutlinePlus className="ml-1" />
      </p>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            className="menu-list ml-5 mb-2"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            style={{ listStyle: "disc" }}
          >
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
}

export default Accordion
