import { FC } from 'react'
import NLink, { LinkProps as NLinkProps } from 'next/link'
import { Link as ChLink, LinkProps as ChLinkProps } from '@chakra-ui/react'

type LinkProps = Pick<NLinkProps, 'href'> & Omit<ChLinkProps, 'href'>

const Link: FC<LinkProps> = ({ href, children, ...rest }) => {
  return (
    <NLink href={href} passHref>
      <ChLink {...rest}>{children}</ChLink>
    </NLink>
  )
}

export default Link
