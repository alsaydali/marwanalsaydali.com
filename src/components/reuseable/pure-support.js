import React from "react"
import ContentsBox from "../../layout/contents-box"
import Contents from "../../layout/contents"
import PureSupportText from "../contents/pure-support-text"
const PureSupport = () => {
  return (
    <ContentsBox>
      <Contents order="order-last md:order-none">
        <PureSupportText />
      </Contents>
      <Contents>img</Contents>
    </ContentsBox>
  )
}

export default PureSupport
