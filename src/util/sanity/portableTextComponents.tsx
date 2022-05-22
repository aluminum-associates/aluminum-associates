import { Heading, Text } from '@chakra-ui/react'
import { PortableTextComponents } from '@portabletext/react'
import Link from 'components/Link'
export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <Heading as='h1' size='lg' py={4}>
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading as='h2' size='md' py={4}>
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading as='h3' size='sm' py={4}>
        {children}
      </Heading>
    ),
    normal: ({ children }) => <Text pb={4}>{children}</Text>
  },
  marks: {
    link: ({ text, value }) => <Link href={value.href || ''}>{text}</Link>
  }
}
