import { Container, Flex, FlexProps } from '@chakra-ui/react'
import { FC } from 'react'
import { HeroSize } from 'types/Sanity'
import { urlFor } from 'lib/sanity'
import { HeroImage } from 'types/SanityExtended'

export interface HeroProps extends FlexProps {
  heroImage?: HeroImage
  heroSize?: HeroSize
}

const Hero: FC<HeroProps> = ({
  children,
  heroImage,
  heroSize = 'large',
  ...rest
}) => {
  const bgImage = heroImage && urlFor(heroImage?.image?._id!).url()
  const minH = {
    small: '360px',
    medium: '520px',
    large: '720px',
    fullscreen: 'calc(100vh - 72px)'
  }

  return (
    <Flex
      bgColor='blue.700'
      bgImage={heroImage?.image?.metadata?.lqip}
      bgSize='cover'
      bgRepeat='no-repeat'
    >
      <Flex
        flex={1}
        direction='column'
        justifyContent='center'
        bgImage={bgImage}
        bgSize='inherit'
        bgRepeat='inherit'
        minH={minH[heroSize]}
        {...rest}
      >
        <Container maxW='container.lg'>{children}</Container>
      </Flex>
    </Flex>
  )
}

export default Hero