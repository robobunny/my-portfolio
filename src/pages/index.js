import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import style from "./home.module.scss"
import {Navigation} from "../components/Header/Navigation"

const IndexPage = (props) => {
  return (
    <div className={style.splashPage}>
      <SEO title="Home" />
      <p className={style.image}>bunny</p>
      <h2 className={style.siteTitle}>
        <Link to="/">{props.title}</Link>
      </h2>
      <span className={style.siteSubtitle}>{props.subtitle}</span>
      <Navigation />
    </div>
    )
}

IndexPage.defaultProps = {
  title: "William C. Duraney",
  subtitle: "Fullstack Javascript Developer",
}

export default IndexPage