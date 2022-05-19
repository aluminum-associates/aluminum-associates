import { HStack, Image, StackProps } from '@chakra-ui/react'
import { urlFor } from 'lib/sanity'
import { FC } from 'react'
import { CustomVendor } from 'types/SanityExtended'
import Link from './Link'

export interface VendorsProps extends StackProps {
  vendors?: CustomVendor[]
}

const Vendors: FC<VendorsProps> = ({ vendors, ...rest }) => {
  return (
    <HStack spacing={6} justify='space-evenly' wrap='wrap' {...rest}>
      {vendors?.map(vendor => {
        const { logo, url, title } = vendor
        const { _id, metadata } = logo || {}
        const src = urlFor(_id).url()

        return (
          <Link
            key={_id}
            href={url || ''}
            isExternal
            mb={10}
            maxW={120}
            maxH={90}
          >
            <Image
              src={src}
              fallbackSrc={metadata?.lqip}
              alt={title}
              maxW='inherit'
              maxH='inherit'
            />
          </Link>
        )
      })}
    </HStack>
  )
}

export default Vendors
