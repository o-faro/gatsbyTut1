import { Link, PageProps } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage: React.FC<PageProps> = () => (
  <Layout pageTitle='About this page'>
    <p>content about this page</p>
  </Layout>
)

export default AboutPage

export const Head = () => (
  <>
    <Seo title="About Me" />
    <meta name="description" content="Your description" />
  </>
)