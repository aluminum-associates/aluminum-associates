import { Box, BoxProps, Container } from '@chakra-ui/react'
import React, { FC } from 'react'

const Section: FC<BoxProps> = ({
  children,
  maxW = 'container.lg',
  maxWidth,
  ...rest
}) => {
  return (
    <Box py={10} {...rest}>
      <Container maxW={maxW || maxWidth}>{children}</Container>
    </Box>
  )
}

export default Section
