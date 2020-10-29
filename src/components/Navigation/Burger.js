import React from 'react'
import style from "./burger.module.scss"

const Burger = ({ menuOpen, toggleMenuOpen, ...props }) => {
  return (
    <button 
      aria-label={`Toggle Menu`} 
      aria-expanded={menuOpen}     
      className={`${style.burger} ${menuOpen ? style.menuOpen : style.menuClosed}`}
      onClick={toggleMenuOpen}
      {...props}
    >
      <span className={`${menuOpen ? style.menuOpen : style.menuClosed}`}/>
      <span className={`${menuOpen ? style.menuOpen : style.menuClosed}`}/>
      <span className={`${menuOpen ? style.menuOpen : style.menuClosed}`}/>
    </button>
  )
}

export default Burger;