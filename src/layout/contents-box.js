import React from "react"

const ContentsBox = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row  md:items-center lg:items-center xl:items-center">
      {children}
    </div>
  )
}

export default ContentsBox
