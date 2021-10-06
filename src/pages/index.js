import React from "react"
import Link from "gatsby-link"
import Menu from "../components/menu"
import { graphql } from "gatsby"

const IndexPage = () => (
  <div>
    <h1>Welcome to my website</h1>
    <p>This is a sample site for the Gatsby crash course</p>
    <Menu />
  </div>
)

export default IndexPage
