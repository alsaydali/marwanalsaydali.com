import React from "react"
import Html from "../stacks/html"
import Css from "../stacks/Css"
import Bootstrap from "../stacks/bootstrap"
import Tailwind from "../stacks/tailwind"
import Material from "../stacks/material"
import Materialui from "../stacks/materialui"
import JavaScript from "../stacks/javascript"
import Reactjs from "../stacks/react"
import Gatsby from "../stacks/gatsby"
import Next from "../stacks/Next"
import Node from "../stacks/node"
import Npm from "../stacks/npm"
import ReactRouter from "../stacks/reactrouter"
import WordPress from "../stacks/wordpress"
import WooCommrace from "../stacks/woocommrace"
import Shopify from "../stacks/Shopify"
const Stacks = [
  <Html />,
  <Css />,
  <Bootstrap />,
  <Tailwind />,
  <Material />,
  <JavaScript />,
  <Node />,
  <Npm />,
  <Reactjs />,
  <ReactRouter />,
  <Gatsby />,
  <Next />,
  <Materialui />,
  <WordPress />,
  <WooCommrace />,
  <Shopify />,
]
const Grid =
  "grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-8 gap-5 mb-5"
const GridItem = "fill-current text-gray-600 w-12 m-auto"
const Stack = (props) => {
  return (
    <>
      <div className={Grid}>
        {Stacks.map((stack, index) => {
          return (
            <div className={GridItem} key={index}>
              {stack}
            </div>
          )
        })}
      </div>
      <div className="text-gray-400 text-pink-600 text-center mb-5">
        and more ..
      </div>
    </>
  )
}

export default Stack
