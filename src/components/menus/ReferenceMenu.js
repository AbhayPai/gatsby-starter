import { Link } from "gatsby"
import React from "react"

import ReferenceMenuConfig from "../configs/ReferenceMenuConfig"

export default function ReferenceMenu() {
  return (
    <ul className="navbar-nav">
      {
        new ReferenceMenuConfig()
          .filter(route => {return route.render;})
          .map((route, index) => (
            <li className="nav-link" key={index}>
              <Link className="nav-link" activeClassName="active" to={route.path}>{route.title}</Link>
            </li>
          ))
      }
    </ul>
  )
}
