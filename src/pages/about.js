import { graphql, Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import HomeLayout from "../layouts/HomeLayout"
import style from "./about.module.scss"
import Img from "gatsby-image"

const AboutPage = ({ data }) => {
  const infoText = data.aboutInfo.childMarkdownRemark.html
  const profilePic = [
    data.mobileProfile.childImageSharp.fluid,
    {
      ...data.desktopProfile.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]
  return (
    <HomeLayout>
      <SEO title="About William Duraney" />
      <h1 className={style.title}>About Me</h1>
      <p>
        <Link to={"resume"} className={style.button}>My Resume</Link>
        <Img
          fluid={profilePic}
          alt={"William C. Duraney in a park"}
          className={style.profilePic}
        />
      </p>
      <div
        className={style.content}
        dangerouslySetInnerHTML={{ __html: infoText }}
      />
      <p>
        <Link to={"/projects"}>My Projects</Link>
      </p>
      <p>
        <Link to={"/contact"}>Contact Me</Link>
      </p>
    </HomeLayout>
  )
}

export const query = graphql`
  {
    aboutInfo: file(relativePath: { eq: "about/aboutMe.md" }) {
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

export default AboutPage
