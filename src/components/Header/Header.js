import React, { useState } from "react"
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

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={style.header}>
      <div className={style.headerContent}>
        <Link to="/" className={style.homeLink}>
          <Img 
            fluid={data.lilBunny.childImageSharp.fluid}
            className={`${style.imageContainer} ${menuOpen && style.rotate}`}
          />
        </Link>
        <Navigation
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          toggleMenuOpen={toggleMenuOpen}
        />
      </div>
    </header>
  )
}

export default Header
