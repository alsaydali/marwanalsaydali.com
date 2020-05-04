import React from "react"
import ContentsBox from "../../layout/contents-box"
import Contents from "../../layout/contents"
import PureSupportText from "../contents/pure-support-text"
import PureSupportImg from "../contents/pure-support-img"
const PureSupport = () => {
  return (
    <ContentsBox>
      <Contents order="order-last md:order-none">
        <PureSupportText />
      </Contents>
      <Contents>
        <PureSupportImg />
      </Contents>
    </ContentsBox>
  )
}

export default PureSupport
