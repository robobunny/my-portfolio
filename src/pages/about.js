import { graphql, navigate } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import HomeLayout from "../layouts/HomeLayout"
import style from "./about.module.scss"
import Img from "gatsby-image"

const AboutPage = ({ data }) => {
  const infoText = data.aboutInfo.childMarkdownRemark.html;
  return (
    <HomeLayout>
      <SEO title="About William Duraney" />
      <h1 className={style.title}>About Me</h1>
      <button onClick={(()=>{navigate("resume")})} className={style.button}>My Resume</button>
        <Img fluid={data.profilePic.childImageSharp.fluid} alt="William C. Duraney in a park" className={style.profilePic}/>
        <div className={style.content} dangerouslySetInnerHTML={{ __html: infoText }}/>
    </HomeLayout>
  )
}

export const query = graphql`
  {
    aboutInfo: file(relativePath: {eq: "about/aboutMe.md"}) {
      childMarkdownRemark {
        html
      }
    }
    profilePic: file(relativePath: {eq: "profile-pic.png"}) {
      childImageSharp {
        fluid (maxWidth: 512) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage