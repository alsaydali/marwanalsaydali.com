import React from "react"
import SocialMedia from "../reuseable/socialmedia"

const footerStyle = "container p-5 bg-gray-100 round"
const footerText =
  "text-center  xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold antialiased"
const footerJob = `text-center text-pink-600 `
const footerLoc = "flex justify-between w-24 m-auto mt-3 "
const Footer = (props) => (
  <footer className={footerStyle}>
    <h4 className={footerText}>{props.sitetitle}</h4>
    <h5 className={footerJob}>{props.job}</h5>
    <SocialMedia location={footerLoc} width="18px" />
  </footer>
)

export default Footer
