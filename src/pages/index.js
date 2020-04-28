import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import Header from "../components/static/header"
import Stack from "../components/reuseable/stack"
const indexPage = ({ data }) => (
  <Layout>
    {/* <Header
      title={data.site.siteMetadata.title}
      desc={data.site.siteMetadata.description}
    />*/}

    <Stack />
  </Layout>
)

export default indexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        author {
          name
          summary
        }
        description
        title
        social {
          behance
          github
          instagram
          twitter
        }
      }
    }
  }
`
