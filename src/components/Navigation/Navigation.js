import React, { useRef } from "react"
import FocusLock from "react-focus-lock"
import Burger from "./Burger"
import Menu from "./Menu"
import useOnClickOutside from "../../functions/useOnClickOutside"

const Navigation = ({ menuOpen, toggleMenuOpen, setMenuOpen, ...props}) => {
  const node = useRef()
  const menuId = "main-menu"
  useOnClickOutside(node, ()=>setMenuOpen(false))

  return (
    <div ref={node}>
      <FocusLock disabled={!menuOpen}>
        <Burger
          menuOpen={menuOpen}
          toggleMenuOpen={toggleMenuOpen}
          aria-controls={menuId}
        />
        <Menu 
          menuOpen={menuOpen}
          toggleMenuOpen={toggleMenuOpen}
          id={menuId}
        />
      </FocusLock>
    </div>
  )
}

export default Navigation