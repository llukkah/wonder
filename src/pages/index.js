import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import Nav from "../components/nav.js"
import Seo from "../components/seo"
// import About from "../pages/about"
// import Photos from "../pages/photos"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <Nav /> */}
    <h1>Index</h1>
  </Layout>
)

export default IndexPage
