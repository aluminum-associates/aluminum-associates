import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"

const VendorBanner = () => {
  const data = useStaticQuery(graphql`
    {
      sanityIndex {
        vendors {
          id
          title
          logo {
            asset {
              fixed(width: 125) {
                ...GatsbySanityImageFixed
              }
            }
          }
          url
        }
      }
    }
  `)
  const { vendors } = data.sanityIndex

  const parentVars = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  }

  const childVars = {
    initial: {
      x: 30,
      opacity: 0,
    },
    animate: i => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  return (
    <motion.div
      className="flex-wrap"
      style={{ justifyContent: "flex-start" }}
      initial="initial"
      animate="animate"
      variants={parentVars}
    >
      {vendors.map((vendor, i) => {
        const { id, title, logo, url } = vendor
        return (
          <motion.a
            custom={i}
            initial="initial"
            animate="animate"
            variants={childVars}
            key={id}
            className="mx-2 my-2"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-start",
            }}
          >
            <Img
              fixed={logo.asset.fixed}
              alt={title}
              style={{
                minWidth: "100px",
                maxHeight: "80px",
                flex: 1,
                alignSelf: "center",
              }}
              imgStyle={{ objectFit: "contain" }}
            />
          </motion.a>
        )
      })}
    </motion.div>
  )
}

export default VendorBanner
