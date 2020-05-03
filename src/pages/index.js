import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import PureSupport from "../components/reuseable/pure-support"
import FlavourSupport from "../components/reuseable/flavour-support"
import ContentManagementSupport from "../components/reuseable/content-menagment-support"
import OnlineStoreSupport from "../components/reuseable/online-store-support"
import SocialSupport from "../components/reuseable/social-support"
import BlogIntro from "../components/reuseable/blog-intro"
import Header from "../components/static/header"
import Stack from "../components/reuseable/stack"
const indexPage = ({ data }) => (
  <Layout>
    {/* */}
    <Header
      title={data.site.siteMetadata.title}
      desc={data.site.siteMetadata.description}
    />
    <PureSupport />
    <FlavourSupport />
    <ContentManagementSupport />
    <OnlineStoreSupport />
    <SocialSupport />
    <BlogIntro />
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
