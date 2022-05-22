import PageService from 'components/_pages/PageService'
import { getClient } from 'lib/sanity.server'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { NavItems } from 'types/SanityExtended'
import { navigationQuery, servicesQuery } from 'util/sanity/queries'

export interface ServiceProps {
  data?: {
    navItems?: NavItems
  }
}

const Service: NextPage<ServiceProps> = ({ data }) => (
  <PageService data={data} />
)

export const getStaticPaths: GetStaticPaths = async () => {
  const services = await getClient().fetch(servicesQuery)
  const { pages } = services
  const paths = pages.map((page: any) => {
    const { slug } = page
    return { params: { slug } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const navItems = await getClient().fetch(navigationQuery)

  return { props: { data: { navItems } } }
}

export default Service
