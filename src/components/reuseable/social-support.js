import React from "react"
import ContentsBox from "../../layout/contents-box"
import Contents from "../../layout/contents"
import SocialSupportText from "../contents/social-support-text"
import SocialSupportImg from "../contents/social-support-img"

const SocialSupport = () => {
  return (
    <ContentsBox>
      <Contents order="order-last md:order-none">
        <SocialSupportText />
      </Contents>
      <Contents>
        <SocialSupportImg />
      </Contents>
    </ContentsBox>
  )
}

export default SocialSupport
