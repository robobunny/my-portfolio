import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import HomeLayout from "../layouts/HomeLayout"
import style from "./about.module.scss"

const AboutPage = ({ data }) => {
  const infoText = data.aboutInfo.childMarkdownRemark.html;
  return (
    <HomeLayout>
      <SEO title="About William Duraney" />
      <h1 className={style.title}>About Me</h1>
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
  }
`

export default AboutPage