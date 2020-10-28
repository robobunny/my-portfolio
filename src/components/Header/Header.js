import React, { useState } from "react"
import { Navigation } from '../Navigation/Navigation'
import style from "./header.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import MenuIcon from "../../images/svg/hamburger.inline.svg"

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

  const [menuOpen, setMenuOpen] = useState(false)
  const [menuOpenStyles, setMenuOpenStyles] = useState(false)
  const toggleMenuOpen = () => {
    setTimeout(()=>{setMenuOpenStyles(!menuOpenStyles)}, 300)
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={style.header}>
      <div className={style.headerContent}>
        <div 
          className={`${style.imageContainer} ${menuOpen && style.rotate}`}
        >
          <Link to="/">
            <Img fluid={data.lilBunny.childImageSharp.fluid} />
          </Link>
        </div>
        <button className={`${style.menuButton}`} onClick={toggleMenuOpen}>
          ≡
        </button>
      </div>
      <div className={`${style.menuContainer} ${menuOpen && style.menuOpen}`}>
        <h2 className={style.siteTitle}>William C. Duraney</h2>
        <Navigation align="right"/>
      </div>
    </header>
  )
}

export default Header
