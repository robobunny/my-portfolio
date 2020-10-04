import { Link } from 'gatsby'
import React from "react"
import { Navigation } from './Navigation'
import style from "./header.module.scss"

const Header = (props) => (
  <header className={style.header}>
    <p className={style.image}>bunny</p>
    <h2 className={style.siteTitle}>
      <Link to="/">{props.title}</Link>
    </h2>
    <span className={style.siteSubtitle}>
      {props.subtitle}
    </span>
    <Navigation />
  </header>
)

Header.defaultProps = {
  title: "William C. Duraney",
  subtitle: "Fullstack Javascript Developer"
}

export default Header
