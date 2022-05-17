import PageServices from 'components/_pages/PageServices'
import { getClient } from 'lib/sanity.server'
import { GetStaticProps, NextPage } from 'next'
import { NavItems, ServicesData } from 'types/SanityExtended'
import { navigationQuery, servicesQuery } from 'util/sanity/queries'

export interface ServicesProps {
  data?: {
    navItems?: NavItems
    servicesData?: ServicesData
  }
}

const Services: NextPage<ServicesProps> = ({ data }) => (
  <PageServices data={data} />
)

export const getStaticProps: GetStaticProps = async () => {
  const navItems = await getClient().fetch(navigationQuery)
  const servicesData = await getClient().fetch(servicesQuery)

  return { props: { data: { navItems, servicesData } } }
}

export default Services
