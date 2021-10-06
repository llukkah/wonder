import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Photos = () => {
  return (
    <>
      <Layout>
        <Seo title="Photos" />
        <h1>Photos</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          <Link to="/about/">About</Link>
          <Link to="/">Index</Link>
          <Link to="/page-2/">Go to page 2</Link> <br />
        </p>
      </Layout>
    </>
  )
}

export default Photos
