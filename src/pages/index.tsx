import type { NextPage } from 'next'
import PageHome from 'components/_pages/PageHome'
import { getClient } from 'lib/sanity.server'
import { getNavProps } from 'util/sanity/queries'
import { NavItems } from 'types/SanityExtended'

interface HomeProps {
  data: {
    navItems?: NavItems
  }
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const { navItems } = data

  return <PageHome navItems={navItems} />
}

export const getStaticProps = async () => {
  const navItems = await getClient().fetch(getNavProps)

  return { props: { data: { navItems } } }
}

export default Home
