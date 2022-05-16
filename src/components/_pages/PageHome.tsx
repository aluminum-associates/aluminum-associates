import Layout from 'components/Layout'
import { FC } from 'react'
import { NavItems } from 'types/SanityExtended'

interface PageHomeProps {
  navItems?: NavItems
}

const PageHome: FC<PageHomeProps> = ({ navItems }) => {
  return <Layout navItems={navItems}>PageHome</Layout>
}

export default PageHome
