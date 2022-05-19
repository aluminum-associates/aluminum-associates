import { Box, BoxProps, Container } from '@chakra-ui/react'
import React, { FC } from 'react'

const Section: FC<BoxProps> = ({
  children,
  maxW = 'container.lg',
  ...rest
}) => {
  return (
    <Box py={10} {...rest}>
      <Container maxW={maxW}>{children}</Container>
    </Box>
  )
}

export default Section
