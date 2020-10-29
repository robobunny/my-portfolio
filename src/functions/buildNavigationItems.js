import React from "react"
import { Link } from "gatsby"
import { navRoutes } from "../routes/navRoutes"

export default function buildNavigationItems (showHomeLink = true) {
    const navBarItems = []
    let routes = navRoutes
      .filter(route => showHomeLink || route.path !== "/")
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