import React from "react"
import style from "./footer.module.scss"

const Footer = () => (
  <footer className={style.footerContent}>
    <p>
      <a href="https://github.com/robobunny/my-portfolio/blob/master/LICENSE">
        0BSD License
      </a>
    </p>
    <p>{new Date().getFullYear()}, William Duraney</p>
    <p>
      <a href="https://github.com/robobunny">My Github</a>
    </p>
  </footer>
)

export default Footer