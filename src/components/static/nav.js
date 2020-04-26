import React from "react"
import Links from "../reuseable/links"
import NavLogo from "../reuseable/navlogo"
const Nav = (props) => (
  <nav>
    <div className="container flex p-1 items-center justify-between bg-grey-500">
      <NavLogo />

      <Links />
    </div>
  </nav>
)

export default Nav
