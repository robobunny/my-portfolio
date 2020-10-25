import React from "react"
import { Link } from "gatsby"
import { navRoutes } from "../../routes/navRoutes"
import style from "./navigation.module.scss"

const BuildNavigationItems = () => {
  const navBarItems = []
  let routes = navRoutes
    .filter(route => route.navOrder !== -1)
    .sort((a, b) => (
      a.navOrder - b.navOrder
    ))
  for (let [ index, route ] of routes.entries()) {
    navBarItems.push(
      <li key={index}>
        <Link to={route.path}>{route.name}</Link>
      </li>
    )
  }
  return navBarItems
}

// Expects an align prop which can be 'left', 'right', or 'center'
export const Navigation = (props) => {
  const alignment = () => {
    if (props.align === "left") {
      return `${style.left}`
    }
    if (props.align === "center") {
      return `${style.center}`
    }
    if (props.align === "right") {
      return `${style.right}`
    }
  }
  return (
    <nav>
      <ul 
        className={`${style.navigationItems} ${alignment()}`}
      >
        {BuildNavigationItems()}
      </ul>
    </nav>
  )
}
