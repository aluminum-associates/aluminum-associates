import { Box, Grid, Text } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'
import { FC } from 'react'
import { Testimonial } from 'types/Sanity'

export interface TestimonialsProps {
  testimonials?: Testimonial[]
}

const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <Grid>
      {testimonials?.map(testimonial => {
        const { _id, client, quote } = testimonial

        return (
          <Box key={_id}>
            <PortableText value={quote} />
            <Text fontWeight='semibold'>{client}</Text>
          </Box>
        )
      })}
    </Grid>
  )
}

export default Testimonials
