import React from "react"
import PropTypes from "prop-types"
import {
  Accordion,
  AccordionItem as Item,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"

const AccordionItem = ({ title, list }) => (
  <Item>
    <AccordionButton>
      <Box flex={1} textAlign="left">
        {title}
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel>
      <UnorderedList>
        {list.map((item, i) => (
          <ListItem key={i}>{item}</ListItem>
        ))}
      </UnorderedList>
    </AccordionPanel>
  </Item>
)

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
}

export default AccordionItem
