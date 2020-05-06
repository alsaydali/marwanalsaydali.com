import React from "react"

const Header = (props) => (
  <header className="">
    <h2 className="font-black  text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      {props.title}
    </h2>

    <p>{props.desc}</p>
  </header>
)

export default Header
