import React from "react"
import { Link } from "gatsby"
const Links = (props) => (
  <div className={props.class}>
    {/*<Link className="" to="/"><Link className="" to="/contact">
      Contact
    </Link>
      Home
    </Link>*/}

    <Link className="" to="/blog">
      Blog
    </Link>
  </div>
)

export default Links
