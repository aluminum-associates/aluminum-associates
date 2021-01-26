import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import PortableText from "@sanity/block-content-to-react"

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
    <Modal isCentered isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent bg="yellow.400">
        <ModalHeader>{notificationHeading}</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>
          <PortableText blocks={_rawNotification} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default Notification
