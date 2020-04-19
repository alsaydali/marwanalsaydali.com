import React from "react"
import SocialMedia from "../reuseable/socialmedia"
const Footer = (props) => (
  <footer>
    <h4>{props.sitetitle}</h4>
    <SocialMedia class="footer__social" width="24px" />
  </footer>
)

export default Footer
