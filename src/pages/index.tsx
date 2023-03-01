import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => (
  <main>
    <Layout pageTitle='Home Page'>
      <p>Gatsby Tut first page</p>
    </Layout>
  </main>
)

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
