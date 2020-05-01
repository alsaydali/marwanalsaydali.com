import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const BlogIntroList = (props) => {
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
    <div>
      <h2 className="font-black  text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        My New Blog
      </h2>
      <h4>
        I have{" "}
        <span className="font-black text-pink-600">
          {data.allMarkdownRemark.totalCount}{" "}
        </span>
        Web development thoughts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className="bg-gray-100 p-3 mb-1 round ">
          <Link to={node.fields.slug} className="grid grid-cols-5">
            <div className="col-span-4">
              <h3 className="font-black">
                {node.frontmatter.title}
                <span className="ml-1 text-pink-600 font-bold">
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p className="antialiased">{node.excerpt}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogIntroList
