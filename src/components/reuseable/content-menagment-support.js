import React from "react"
import ContentsBox from "../../layout/contents-box"
import Contents from "../../layout/contents"
import CmsSupportText from "../contents/cms-support-text"
import CmsSupportImg from "../contents/cms-support-img"
const ContentManagementSupport = () => {
  return (
    <ContentsBox>
      <Contents order="order-last md:order-none">
        <CmsSupportText />
      </Contents>
      <Contents>
        <CmsSupportImg />
      </Contents>
    </ContentsBox>
  )
}

export default ContentManagementSupport
