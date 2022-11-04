import { Link } from "gatsby"
import React from "react"

import ShortcutMenuConfig from "../configs/ShortcutMenuConfig"

export default function ShortcutMenu() {
  return (
    <ul className="navbar-nav">
      {
        new ShortcutMenuConfig()
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
