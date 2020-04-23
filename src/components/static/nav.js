import React from "react"
import Links from "../reuseable/links"
import NavLogo from "../reuseable/navlogo"
const Nav = (props) => (
  <div>
    <nav className="container" navtitle={props.siteTitle}>
      <NavLogo class="nav__logo" />

      <Links class="nav__links" />
    </nav>
  </div>
)

export default Nav
