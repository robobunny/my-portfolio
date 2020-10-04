import React from "react"
import { Navigation } from './Navigation'
import style from "./header.module.scss"

const Header = () => (
  <header className={style.header}>
    <Navigation />
  </header>
)

export default Header
