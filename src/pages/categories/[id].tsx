import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getClient } from 'lib/sanity.server'
import { categoriesQuery, navigationQuery } from 'util/sanity/queries'
import { NavItems } from 'types/SanityExtended'
import Layout from 'components/Layout'

interface CategoryProps {
  data: {
    navItems?: NavItems
    id?: string
  }
}

const Category: NextPage<CategoryProps> = ({ data }) => {
  const { navItems, id } = data

  return <Layout navItems={navItems}>{id}</Layout>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getClient().fetch(categoriesQuery)
  const paths = categories.map((category: any) => {
    const { slug } = category
    return { params: { id: slug } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context
  const { id } = params || {}
  const navItems = await getClient().fetch(navigationQuery)

  return { props: { data: { navItems, id } } }
}

export default Category
