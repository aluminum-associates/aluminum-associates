import Layout from 'components/Layout'
import { HomeProps } from 'pages/index'
import { FC } from 'react'

const PageHome: FC<HomeProps> = ({ data }) => {
  const { navItems, homeData } = data

  return (
    <Layout navItems={navItems}>
      <pre>{JSON.stringify(homeData, null, 2)}</pre>
    </Layout>
  )
}

export default PageHome
