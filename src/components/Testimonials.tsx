import { Box, Grid, Text, keyframes } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'
import { FC } from 'react'
import { Testimonial } from 'types/Sanity'

export interface TestimonialsProps {
  testimonials?: Testimonial[]
}

const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  const numberOfTestimonials = testimonials?.length
  const interval = testimonials && testimonials?.length * 2
  const keyframe = keyframes`
    ${testimonials?.map((_, i) => {
      const percentage = (i / testimonials?.length) * 100
      const xVal = i * 100

      return `${percentage}% { transform: translateX(-${xVal}%); }`
    })}
  `
  const animation = `${keyframe} infinite ${interval}s ease-out`

  return (
    <Grid
      autoRows='1fr'
      templateColumns={`repeat(${numberOfTestimonials}, 100%)`}
      overflow='hidden'
    >
      {testimonials?.map((testimonial, i) => {
        const { client, quote } = testimonial

        return (
          <Box key={i} w='100%' animation={animation}>
            <PortableText value={quote} />
            <Text fontWeight='semibold'>{client}</Text>
          </Box>
        )
      })}
    </Grid>
  )
}

export default Testimonials
