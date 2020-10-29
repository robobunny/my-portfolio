import React from "react"
import style from "./header.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Navigation from "../Navigation/Navigation"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      lilBunny: file(relativePath: {eq: "bunny256.png"}) {
        childImageSharp {
          fluid(maxWidth: 256) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <header className={style.header}>
      <div className={style.headerContent}>
        <Link to="/" className={style.homeLink}>
          <Img 
            fluid={data.lilBunny.childImageSharp.fluid}
            className={`${style.imageContainer}`}
          />
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
