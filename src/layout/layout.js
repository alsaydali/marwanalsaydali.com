import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Nav from "../components/static/nav"
import Footer from "../components/static/footer"
const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
              summary
            }
            description
            title
            job
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
  )
  const siteTitle = data.site.siteMetadata.title
  const jobTitle = data.site.siteMetadata.job
  return (
    <>
      {/*<Helmet>
        <meta charSet="utf-8" />
        <title>{siteTitle}</title>
        <meta
          name="viewport"
          content="viewport-fit=cover width=device-width, initial-scale=1.0"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Helmet><Nav sitetitle={siteTitle} />
      <main className="">{children}</main>*/}

      <Footer sitetitle={siteTitle} job={jobTitle} />
    </>
  )
}

export default Layout
