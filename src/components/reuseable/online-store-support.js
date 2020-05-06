import React from "react"
import ContentsBox from "../../layout/contents-box"
import Contents from "../../layout/contents"
import CommraceSupportText from "../contents/commrace-support-text"
import CommraceSupportImg from "../contents/commrace-support-img"
const OnlineStoreSupport = () => {
  return (
    <ContentsBox>
      <Contents>
        <CommraceSupportImg />
      </Contents>
      <Contents>
        <CommraceSupportText />
      </Contents>
    </ContentsBox>
  )
}

export default OnlineStoreSupport
