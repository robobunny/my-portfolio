import React from 'react'
import style from "./burger.module.scss"

const Burger = ({ open, toggleMenuOpen }) => {
  return (
    <button 
        className={`${style.burger} ${open ? style.menuOpen : style.menuClosed}`}
        onClick={toggleMenuOpen}
    >
      <div />
      <div />
      <div />
    </button>
  )
}

export default Burger;