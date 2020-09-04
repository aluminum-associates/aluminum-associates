import React, { useState } from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"
import { AiOutlinePlus, AiOutlineFile } from "react-icons/ai"

const DocumentAccordion = ({ documentation }) => {
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
        Documentation <AiOutlinePlus className="ml-1" />
      </p>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            className="menu-list mb-2"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            style={{ listStyle: "none", listStylePosition: "outside" }}
          >
            {documentation.map(document => {
              const { url, id } = document.file.asset
              return (
                <li key={id}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <AiOutlineFile /> {document.title}
                  </a>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

DocumentAccordion.propTypes = {
  documentation: PropTypes.array.isRequired,
}

export default DocumentAccordion
