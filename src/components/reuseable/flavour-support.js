import React from "react"
import ContentsBox from "../../layout/contents-box"
import Contents from "../../layout/contents"
import FlavourSupportText from "../contents/flavour-support-text"
import FlavourSupportImg from "../contents/flavour-support-img"
const FlavourSupport = () => {
  return (
    <ContentsBox>
      <Contents>
        <FlavourSupportImg />
      </Contents>
      <Contents>
        <FlavourSupportText />
      </Contents>
    </ContentsBox>
  )
}

export default FlavourSupport
