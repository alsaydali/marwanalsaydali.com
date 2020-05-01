import React from "react"
import ContentsBox from "../../layout/contents-box"
import Contents from "../../layout/contents"
import BlogIntroImg from "../contents/blog-intro-img"
import BlogIntroList from "../contents/blog-intro-list"
const BlogIntro = () => {
  return (
    <ContentsBox>
      <Contents>
        <BlogIntroImg />
      </Contents>
      <Contents>
        <BlogIntroList />
      </Contents>
    </ContentsBox>
  )
}

export default BlogIntro
