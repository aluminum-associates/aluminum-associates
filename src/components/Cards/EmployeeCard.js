import * as React from "react"
import { Flex } from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"

const EmployeeCard = ({
  image,
  alt,
  imageOnClick,
  imageStyles,
  children,
  ...rest
}) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      border="1px solid"
      borderColor="gray.100"
      {...rest}
    >
      <Flex {...imageStyles} onClick={imageOnClick}>
        <GatsbyImage image={image} alt={alt} />
      </Flex>
      <Flex>{children}</Flex>
    </Flex>
  )
}

export default EmployeeCard
