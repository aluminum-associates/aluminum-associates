import {
  AspectRatio,
  BoxProps,
  Flex,
  Heading,
  Image,
  Text
} from '@chakra-ui/react'
import { urlFor } from 'lib/sanity'
import { FC } from 'react'
import { CustomCard } from 'types/SanityExtended'
import Card from './Card'

export interface ServicePhotoCardProps extends BoxProps {
  card: CustomCard
}

const ServicePhotoCard: FC<ServicePhotoCardProps> = ({ card, ...rest }) => {
  const { alt, body, image, title } = card
  const src = urlFor(image?._id).url()

  return (
    <Card overflow='hidden' {...rest}>
      <AspectRatio ratio={4 / 3}>
        <Image src={src} fallbackSrc={image?.metadata?.lqip} alt={alt} />
      </AspectRatio>
      <Flex direction='column' px={4} pt={6} pb={10}>
        <Heading size='lg' pb={4}>
          {title}
        </Heading>
        <Text>{body}</Text>
      </Flex>
    </Card>
  )
}

export default ServicePhotoCard
