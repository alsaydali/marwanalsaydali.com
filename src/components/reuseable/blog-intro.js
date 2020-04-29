import React from "react"
import BlogIntroImg from "../contents/blog-intro-img"
import BlogIntroList from "../contents/blog-intro-list"
const BlogIntro = () => {
  return (
    <div className="flex items-center">
      <div className="p-5 w-1/2">
        <BlogIntroImg />
      </div>
      <div className="p-5 w-1/2 ">
        <BlogIntroList />
      </div>
    </div>
  )
}

export default BlogIntro
