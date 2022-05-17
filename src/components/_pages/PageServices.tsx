import Layout from 'components/Layout'
import { ServicesProps } from 'pages/services'
import { FC } from 'react'

const PageServices: FC<ServicesProps> = ({ data }) => {
  const { navItems, servicesData } = data || {}
  return (
    <Layout navItems={navItems}>
      <pre>{JSON.stringify(servicesData, null, 2)}</pre>
    </Layout>
  )
}

export default PageServices
