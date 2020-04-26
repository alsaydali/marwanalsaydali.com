import React from "react"
import SocialMedia from "../reuseable/socialmedia"
const Footer = (props) => (
  <footer className="container  p-5 mb-5">
    <h4 className="font-bold text-center  mb-5">{props.sitetitle}</h4>
    <SocialMedia
      class="flex items-center justify-between w-40 mx-auto"
      width="20px"
    />
  </footer>
)

export default Footer
