import PageAbout from 'components/_pages/PageAbout'
import { getClient } from 'lib/sanity.server'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { AboutData, NavItems } from 'types/SanityExtended'
import { aboutQuery, navigationQuery } from 'util/sanity/queries'

export interface AboutProps {
  data?: {
    navItems?: NavItems
    aboutData?: AboutData
  }
}

const About: NextPage<AboutProps> = ({ data }) => <PageAbout data={data} />

export const getStaticProps: GetStaticProps = async () => {
  const navItems = await getClient().fetch(navigationQuery)
  const aboutData = await getClient().fetch(aboutQuery)

  return { props: { data: { navItems, aboutData } } }
}

export default About
