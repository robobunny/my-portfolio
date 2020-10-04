import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import HomeLayout from "../layouts/HomeLayout"

const AboutPage = ({ data }) => {
  const infoText = data.aboutInfo.childMarkdownRemark.html;
  return (
    <HomeLayout>
      <SEO title="About William Duraney" />
      <h1>About Me</h1>
      <div className="article-text" dangerouslySetInnerHTML={{ __html: infoText }}/>
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