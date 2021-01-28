import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Box,
  CloseButton,
  Flex,
  Heading,
  useDisclosure,
} from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import PortableText from "@sanity/block-content-to-react"
import Serializers from "./Serializers"

const MotionBox = motion.custom(Box)

const boxVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const Notification = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })

  const query = useStaticQuery(graphql`
    {
      sanityIndex {
        notificationHeading
        _rawNotification
      }
    }
  `)
  const { notificationHeading, _rawNotification } = query.sanityIndex

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionBox
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={boxVariants}
          position="fixed"
          right={{ base: 0, md: "1.25rem" }}
          bottom={{ base: 0, md: "1.25rem" }}
          zIndex={10}
          yOverflow="scroll"
          w={{ base: "100%", md: "60ch" }}
          p="1.25rem"
          bg="yellow.400"
          borderRadius={{ base: 0, md: "4px" }}
          boxShadow="2xl"
        >
          <Flex pb="1rem" justifyContent="space-between" alignItems="center">
            <Heading size="lg">{notificationHeading}</Heading>
            <CloseButton onClick={onClose} />
          </Flex>
          <PortableText blocks={_rawNotification} serializers={Serializers} />
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

export default Notification
