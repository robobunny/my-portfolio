import React from "react"
import style from "./navigation.module.scss"
import buildNavigationItems from "../../functions/buildNavigationItems"

// Expects an align prop which can be 'left', 'right', or 'center'
export const Navigation = (props) => (
  <nav>
    <ul 
      className={`${style.navigationItems}`}
    >
      {buildNavigationItems()}
    </ul>
  </nav>
)
