import React from "react"
import { Link } from "gatsby"
const margin = "uppercase text-gray-700 p-1 font-bold no-underline text-md"
const Links = (props) => (
  <div className={props.class}>
    <Link className={margin} to="/">
      Home
    </Link>
    <Link className={margin} to="/blog">
      Blog
    </Link>
    <Link className={margin} to="/contact">
      Contact
    </Link>
  </div>
)

export default Links
