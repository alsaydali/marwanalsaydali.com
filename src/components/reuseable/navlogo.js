import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/icon.png"
const navLogoStyle =
  "flex justfy-center xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold antialiased"
const NavLogo = (props) => (
  <Link to="/" className={navLogoStyle}>
    <img src={Logo} className="w-6 pr-2" alt={props.navtitle} />
    {props.navtitle}
  </Link>
)

export default NavLogo
