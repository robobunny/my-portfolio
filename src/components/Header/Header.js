import React, { useState } from "react"
import { Navigation } from './Navigation'
import style from "./header.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

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

  const [navOpen, setNavOpen] = useState(false)
  const toggleNavOpen = () => {setNavOpen(!navOpen)}

  return (
    <header className={style.header}>
      <div className={style.headerContent}>
        <div 
          className={`${style.imageContainer} ${navOpen && style.rotate}`}
        >
          <Link to="/">
            <Img fluid={data.lilBunny.childImageSharp.fluid} />
          </Link>
        </div>
        <h2 className={style.siteTitle}> </h2>
        <button className={`${style.menuButton}`} onClick={toggleNavOpen}>
          ☰
        </button>
      </div>
      <div className={`${style.navContainer} ${navOpen && style.navOpen}`}>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
