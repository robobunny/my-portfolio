import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import HomeLayout from "../layouts/HomeLayout"

const AboutPage = ({ data }) => (
  <HomeLayout>
    <SEO title="About William Duraney" />
    <h1>About Me</h1>
    <div className="article-text" dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[0].node.html}}/>
  </HomeLayout>
)

export const query = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//about/" } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`

export default AboutPage