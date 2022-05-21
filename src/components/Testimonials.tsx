import { Box, Grid, Text, keyframes, useDimensions } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'
import { FC, useRef } from 'react'
import { Testimonial } from 'types/Sanity'

export interface TestimonialsProps {
  testimonials?: Testimonial[]
}

const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  const numberOfTestimonials = testimonials?.length
  const keyframe = keyframes`
  0% { transform: translateX(0); }
    ${testimonials?.map((_, i) => {
      const percentage = 100 / i

      if (i > 0) {
        return `${percentage} { transform: translateX(-100%); }`
      }
    })}
  100% { transform: translateX(0); }
  `
  const animation = `${keyframe} 2s ease-in-out`

  return (
    <Grid
      autoRows='1fr'
      templateColumns={`repeat(${numberOfTestimonials}, 100%)`}
      overflow='hidden'
    >
      {testimonials?.map((testimonial, i) => {
        const { client, quote } = testimonial

        return (
          <Box
            key={i}
            w='100%'
            // transition='transform 1s'
            transform={`translateX(0)`}
            animation={animation}
          >
            <PortableText value={quote} />
            <Text fontWeight='semibold'>{client}</Text>
          </Box>
        )
      })}
    </Grid>
  )
}

export default Testimonials
