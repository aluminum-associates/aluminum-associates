import { Box, BoxProps } from '@chakra-ui/react'
import { FC } from 'react'

const Card: FC<BoxProps> = props => {
  return (
    <Box
      boxShadow='lg'
      borderRadius={8}
      borderWidth={1}
      borderColor='gray.100'
      {...props}
    />
  )
}

export default Card
