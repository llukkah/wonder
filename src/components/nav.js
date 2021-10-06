import React, { Component } from "react"
import { Link } from "gatsby"
import "./nav.css"

const nav = () => (
  <>
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/page-2/">Go to page 2</Link>{" "}
        </li>
        <li>
          <Link to="/photos/">Photos</Link>{" "}
        </li>
      </ul>
    </div>
  </>
)

export default nav
