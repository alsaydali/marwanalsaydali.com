import React from "react"
import Links from "../reuseable/links"
import NavLogo from "../reuseable/navlogo"
const navStyle = "w-full"
const Nav = (props) => (
  <nav className={navStyle}>
    <div className="container flex justify-between p-2">
      <NavLogo navtitle={props.sitetitle} />
      <Links />
    </div>
  </nav>
)

export default Nav
