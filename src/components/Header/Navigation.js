import React from "react"
import { Link } from "gatsby"
import { navRoutes } from "../../routes/navRoutes"
import style from "./header.module.scss"

const BuildNavigationItems = () => {
  const navBarItems = []
  let routes = navRoutes
    .filter(route => route.navOrder !== -1)
    .sort((a, b) => (
      a.navOrder - b.navOrder
    ))
  for (let route of routes) {
    navBarItems.push(
      <li className="navigation-item">
        <Link to={route.path}>{route.name.toUpperCase()}</Link>
      </li>
    )
  }
  return navBarItems
}

export const Navigation = () => (
  <nav>
    <ul className={style.navigationItems}>
      {BuildNavigationItems()}
    </ul>
  </nav>
)
