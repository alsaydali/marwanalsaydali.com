import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "./layout"

const PostLayout = ({ data }) => {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <Img fluid={featuredImgFluid} />

      <div className="p-3">
        <div className="p-5 bg-gray-100 round">
          <h2 className="font-black  text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            {post.frontmatter.title}
          </h2>
          <h4 className=" font-bold text-pink-600">{post.frontmatter.date}</h4>
        </div>

        <div
          className="antialiased pt-5"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export default PostLayout

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
