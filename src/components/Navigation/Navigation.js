import React, { useState } from "react"
// import style from "./navigation.module.scss"
import Burger from "./Burger"
import Menu from "./Menu"

// Expects an align prop which can be 'left', 'right', or 'center'

const Navigation = (props) => {
  const [menuOpen, setMenuOpen] = useState(true)
  // const [menuOpenStyles, setMenuOpenStyles] = useState(false)
  const toggleMenuOpen = () => {
    // setTimeout(()=>{setMenuOpenStyles(!menuOpenStyles)}, 300)
    setMenuOpen(!menuOpen)
  }

  return (
    <div>
      <Burger 
        toggleMenuOpen={toggleMenuOpen}
      />
      <Menu 
        menuOpen={menuOpen}
      />
    </div>
  )
}

export default Navigation