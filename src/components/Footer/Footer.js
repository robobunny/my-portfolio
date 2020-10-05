import React from "react"
import style from "./footer.module.scss"

const Footer = () => (
  <footer className={style.footerContent}>
    {new Date().getFullYear()}, William Duraney
  </footer>
)

export default Footer