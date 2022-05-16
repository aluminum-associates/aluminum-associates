import type { NextPage } from 'next'
import PageHome from 'components/_pages/PageHome'
import { getClient } from 'lib/sanity.server'
import { homePageQuery, navigationQuery } from 'util/sanity/queries'
import { HomeData, NavItems } from 'types/SanityExtended'

export interface HomeProps {
  data: {
    navItems?: NavItems
    homeData?: HomeData
  }
}

const Home: NextPage<HomeProps> = ({ data }) => <PageHome data={data} />

export const getStaticProps = async () => {
  const navItems = await getClient().fetch(navigationQuery)
  const homeData = await getClient().fetch(homePageQuery)

  return { props: { data: { navItems, homeData } } }
}

export default Home
