import React from "react"
import ContentsBox from "../../layout/contents-box"
import Contents from "../../layout/contents"
import CmsSupportText from "../contents/cms-support-text"
const ContentManagementSupport = () => {
  return (
    <ContentsBox>
      <Contents order="order-last md:order-none">
        <CmsSupportText />
      </Contents>
      <Contents>img</Contents>
    </ContentsBox>
  )
}

export default ContentManagementSupport
