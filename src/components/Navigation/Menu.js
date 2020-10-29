import React from "react"
import buildNavigationItems from "../../functions/buildNavigationItems"
import style from "./menu.module.scss"

const Menu = ({ menuOpen, ...props }) => {
  return (
    <nav
      aria-hidden={!menuOpen}
      className={`${style.menu} ${menuOpen ? style.menuOpen : style.menuClosed}`}
      {...props}
    >
      <ul>
        {buildNavigationItems()}
      </ul>
    </nav>
  )
}
export default Menu;