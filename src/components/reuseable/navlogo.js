import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/icon.png"
const NavLogo = (props) => (
  <Link to="/" className={props.class}>
    <img src={Logo} className="w-6" />
    {props.navtitle}
  </Link>
)

export default NavLogo
