import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const PostsList = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `
  )
  return (
    <div className="">
      <h4>{`I Have ${data.allMarkdownRemark.totalCount} Posts here`}</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className="bg-gray-100 p-3 mb-1 round">
          <Link to={node.fields.slug}>
            <div className="">
              <Img
                className=""
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              />
            </div>
            <h3 className="font-black">
              {node.frontmatter.title}
              <span className="ml-1 text-pink-600 font-bold">
                — {node.frontmatter.date}
              </span>
            </h3>
            <p className="antialiased">{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PostsList
