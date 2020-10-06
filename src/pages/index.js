import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import style from "./home.module.scss"
import Img from "gatsby-image"
import { Navigation } from "../components/Header/Navigation"

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
    <div className={`${style.splashPage} ${style.parallax}`}>
      <SEO title="Home" />
      <div className={`${style.image} ${style.parallaxLayer} ${style.parallaxBack}`}>
        <Img fluid={imgSrc}/>
      </div>
      <div className={`${style.parallaxLayer} ${style.parallaxBase} ${style.info}`}>
        <h2 className={style.siteTitle}>{"William C. Duraney"}</h2>
        <p className={style.siteSubtitle}>{"Fullstack Javascript Developer"}</p>
      </div>
      <div className={`${style.parallaxLayer} ${style.parallaxBase} ${style.navigation}`}>
        <Navigation />
      </div>
    </div>
    )
}

export const query = graphql`
  {
    mobileBunny: file(relativePath: { eq: "bunny256.png" }) {
      childImageSharp {
        fluid(maxWidth: 256) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    desktopBunny: file(relativePath: { eq: "bunny1024.png" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    hiDpiBunny: file(relativePath: { eq: "bunny1024.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    codeResume: file(relativePath: {eq: "home/codeResume.md"}) {
      childMarkdownRemark {
        html
      }
    }
  }
`

export default IndexPage

//
// <div className={style.codeblock} dangerouslySetInnerHTML={{__html: data.codeResume.childMarkdownRemark.html}}/>
//