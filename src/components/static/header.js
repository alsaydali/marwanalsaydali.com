import React from "react"

const Header = (props) => (
  <header className="">
    <h2 className="object-auto">{props.title}</h2>
    <p>{props.desc}</p>
  </header>
)

export default Header
