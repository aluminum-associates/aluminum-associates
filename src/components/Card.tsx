import {
  AspectRatio,
  Box,
  BoxProps,
  Flex,
  Heading,
  Image,
  Text
} from '@chakra-ui/react'
import { urlFor } from 'lib/sanity'
import { FC } from 'react'
import { CustomCard } from 'types/SanityExtended'

export interface CardProps extends BoxProps {
  card: CustomCard
}

const Card: FC<CardProps> = ({ card, ...rest }) => {
  const { alt, body, image, title } = card
  const src = urlFor(image?._id).url()

  return (
    <Box boxShadow='lg' borderRadius={8} overflow='hidden' {...rest}>
      <AspectRatio ratio={4 / 3}>
        <Image src={src} fallbackSrc={image?.metadata?.lqip} alt={alt} />
      </AspectRatio>
      <Flex direction='column' px={4} pt={6} pb={10}>
        <Heading size='lg' pb={4}>{title}</Heading>
        <Text>{body}</Text>
      </Flex>
    </Box>
  )
}

export default Card
