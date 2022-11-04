import { Link } from "gatsby"
import React from "react"

import MainMenuConfig from "../configs/MainMenuConfig"

export default function MainMenu() {
  return (
    <ul className="navbar-nav ms-auto">
      {
        new MainMenuConfig()
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
