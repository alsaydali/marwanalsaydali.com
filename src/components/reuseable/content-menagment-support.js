import React from "react"
import ContentsBox from "../../layout/contents-box"
import Contents from "../../layout/contents"

const ContentManagementSupport = () => {
  return (
    <ContentsBox>
      <Contents order="order-last md:order-none">text</Contents>
      <Contents>img</Contents>
    </ContentsBox>
  )
}

export default ContentManagementSupport
