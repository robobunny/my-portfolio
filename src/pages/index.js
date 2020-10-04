import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import style from "./home.module.scss"
import {Navigation} from "../components/Header/Navigation"
import Img from "gatsby-image"

const IndexPage = ({ data }, ...props) => {
  const imgSrc = [
    data.mobileBunny.childImageSharp.fluid,
    {
      ...data.desktopBunny.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
    {
      ...data.hiDpiBunny.childImageSharp.fluid,
      media: `(min-width: 1440px)`,
    },
  ]

  return (
    <div className={style.splashPage}>
      <SEO title="Home" />
      <Img
        fluid={imgSrc}
        className={style.image}
      />
      <div className={style.info}>
        <h2 className={style.siteTitle}>William C. Duraney</h2>
        <p className={style.siteSubtitle}>Fullstack Javascript Developer</p>
      </div>
      <Navigation />
    </div>
    )
}

export const query = graphql`
  {
    mobileBunny: file(relativePath: { eq: "bunny256.png" }) {
      childImageSharp {
        fluid(maxWidth: 256) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopBunny: file(relativePath: { eq: "bunny1024.png" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hiDpiBunny: file(relativePath: { eq: "bunny1024.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage