import React from "react"
import buildNavigationItems from "../../functions/buildNavigationItems"
import style from "./menu.module.scss"

const Menu = ({ open }) => {
  return (
    <nav className={`${style.menu} ${open ? style.menuOpen : style.menuClosed}`}>
      {buildNavigationItems()}
    </nav>
  )
}
export default Menu;