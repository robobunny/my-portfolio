import React from "react"
import style from "./footer.module.scss"

const Footer = () => (
  <footer className={style.footerContent}>
    © {new Date().getFullYear()}, Built with {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
)

export default Footer