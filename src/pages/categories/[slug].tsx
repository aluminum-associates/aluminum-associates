import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getClient } from 'lib/sanity.server'
import {
  categoriesQuery,
  categoryQuery,
  navigationQuery
} from 'util/sanity/queries'
import { CategoryData, NavItems } from 'types/SanityExtended'
import PageCategory from 'components/_pages/PageCategory'

export interface CategoryProps {
  data: {
    navItems?: NavItems
    category?: CategoryData
  }
}

const Category: NextPage<CategoryProps> = ({ data }) => (
  <PageCategory data={data} />
)

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getClient().fetch(categoriesQuery)
  const paths = categories.map((category: any) => {
    const { slug } = category
    return { params: { slug } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params || {}
  const navItems = await getClient().fetch(navigationQuery)
  const category = await getClient().fetch(categoryQuery, { slug })

  return { props: { data: { navItems, category } } }
}

export default Category
