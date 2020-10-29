import React from "react"
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

  return (
    <header className={style.header}>
      <div className={style.headerContent}>
        <div 
          className={`${style.imageContainer}`}
        >
          <Link to="/">
            <Img fluid={data.lilBunny.childImageSharp.fluid} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
