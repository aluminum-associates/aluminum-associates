import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'theme/index'
import { PortableTextComponentsProvider } from '@portabletext/react'
import { portableTextComponents } from 'util/sanity/portableTextComponents'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <PortableTextComponentsProvider components={portableTextComponents}>
        <Component {...pageProps} />
      </PortableTextComponentsProvider>
    </ChakraProvider>
  )
}

export default MyApp
