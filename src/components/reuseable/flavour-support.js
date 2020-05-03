import React from "react"
import ContentsBox from "../../layout/contents-box"
import Contents from "../../layout/contents"
import FlavourSupportText from "../contents/flavour-support-text"
const FlavourSupport = () => {
  return (
    <ContentsBox>
      <Contents>img</Contents>
      <Contents>
        <FlavourSupportText />
      </Contents>
    </ContentsBox>
  )
}

export default FlavourSupport
