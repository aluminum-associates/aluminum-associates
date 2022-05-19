import PageContact from 'components/_pages/PageContact'
import { getClient } from 'lib/sanity.server'
import { GetStaticProps, NextPage } from 'next'
import { NavItems } from 'types/SanityExtended'
import { navigationQuery } from 'util/sanity/queries'

export interface ContactProps {
  data?: {
    navItems?: NavItems
  }
}

const Contact: NextPage<ContactProps> = ({ data }) => {
  return <PageContact data={data} />
}

export const getStaticProps: GetStaticProps = async () => {
  const navItems = await getClient().fetch(navigationQuery)

  return { props: { data: { navItems } } }
}

export default Contact
