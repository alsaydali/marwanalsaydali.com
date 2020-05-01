import React from "react"

const Contents = (props) => {
  return (
    <div className={`${props.order} w-full  lg:w-1/2 xl:w-1/2 p-3 `}>
      {props.children}
    </div>
  )
}

export default Contents
