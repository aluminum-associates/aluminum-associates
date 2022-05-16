import PageAbout from 'components/_pages/PageAbout'
import { getClient } from 'lib/sanity.server'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { NavItems } from 'types/SanityExtended'
import { navigationQuery } from 'util/sanity/queries'

export interface AboutProps {
  data?: {
    navItems?: NavItems
  }
}

const About: NextPage<AboutProps> = ({ data }) => <PageAbout data={data} />

export const getStaticProps: GetStaticProps = async () => {
  const navItems = await getClient().fetch(navigationQuery)

  return { props: { data: { navItems } } }
}

export default About
