import React from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"
import { AiOutlineFile } from "react-icons/ai"
import {
  AccordionItem as Item,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  ListItem,
  ListIcon,
  Link,
  List,
} from "@chakra-ui/react"

const DocumentAccordion = ({ documentation }) => (
  <Item>
    <AccordionButton>
      <Box flex={1} textAlign="left">
        Documentation
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel>
      <List>
        {documentation.map(document => {
          const { url, id } = document.file.asset
          return (
            <ListItem key={id}>
              <ListIcon as={AiOutlineFile} />
              <Link href={url} isExternal>
                {document.title}
              </Link>
            </ListItem>
          )
        })}
      </List>
    </AccordionPanel>
  </Item>
)

DocumentAccordion.propTypes = {
  documentation: PropTypes.array.isRequired,
  className: PropTypes.string,
}

export default DocumentAccordion
