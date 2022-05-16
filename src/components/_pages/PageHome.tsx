import Layout from 'components/Layout'
import { HomeProps } from 'pages/index'
import { FC } from 'react'

const PageHome: FC<HomeProps> = ({ data }) => {
  const { navItems } = data

  return <Layout navItems={navItems}>PageHome</Layout>
}

export default PageHome
