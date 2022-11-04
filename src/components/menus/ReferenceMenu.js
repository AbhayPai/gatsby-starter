import { Link } from "gatsby"
import React from "react"

export default function ReferenceMenu() {
  return (
    <nav class="navbar navbar-expand-sm bg-light">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
