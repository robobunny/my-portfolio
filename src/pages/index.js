import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import style from "./home.module.scss"
import Img from "gatsby-image"
import { Navigation } from "../components/Navigation/Navigation"

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

  const profilePic = [
    data.mobileProfile.childImageSharp.fluid,
    {
      ...data.desktopProfile.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <div className={`${style.splashPage} ${style.parallax}`}>
      <SEO title="Home" />
      <div className={`${style.parallaxGroup} ${style.pGroup1}`}>
        <div
          className={`\
            ${style.bunny} \
            ${style.parallaxLayer} \
            ${style.parallaxBack2} \
          `}
        >
          <Img fluid={imgSrc} />
        </div>
        <div
          className={`\
            ${style.parallaxLayer} \
            ${style.parallaxBack1} \
            ${style.info} \
          `}
        >
          <h1 className={style.siteTitle}>{"William C. Duraney"}</h1>
          <p className={style.siteSubtitle}>
            {"Fullstack Javascript Developer"}
          </p>
        </div>
        <div
          className={`\
            ${style.parallaxLayer} \
            ${style.parallaxForward1} \
            ${style.profileImage} \
          `}
        >
          <Img fluid={profilePic} />
        </div>
        <div
          className={`\
            ${style.parallaxLayer} \
            ${style.parallaxBase} \
            ${style.navigation} \
          `}
        >
          <Navigation align="center" />
        </div>
      </div>
      {/*<div className={`${style.parallaxGroup} ${style.pGroup2}`}>
        <p>Some words</p>
      </div>*/}
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
    codeResume: file(relativePath: { eq: "home/codeResume.md" }) {
      childMarkdownRemark {
        html
      }
    }
    mobileProfile: file(relativePath: { eq: "profilePic/mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    desktopProfile: file(relativePath: { eq: "profilePic/desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default IndexPage

//
// <div className={style.codeblock} dangerouslySetInnerHTML={{__html: data.codeResume.childMarkdownRemark.html}}/>
//
