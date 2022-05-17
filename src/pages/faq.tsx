import PageFaq from 'components/_pages/PageFaq'
import { getClient } from 'lib/sanity.server'
import { GetStaticProps, NextPage } from 'next'
import { FaqData, NavItems } from 'types/SanityExtended'
import { faqQuery, navigationQuery } from 'util/sanity/queries'

export interface FaqProps {
  data?: {
    navItems?: NavItems
    faqData?: FaqData
  }
}

const Faq: NextPage<FaqProps> = ({ data }) => <PageFaq data={data} />

export const getStaticProps: GetStaticProps = async () => {
  const navItems = await getClient().fetch(navigationQuery)
  const faqData = await getClient().fetch(faqQuery)

  return { props: { data: { navItems, faqData } } }
}

export default Faq
