import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import HomeLayout from "../layouts/HomeLayout"

const ProjectsPage = ({ data }) => {
  const infoText = data.projectInfo.childMarkdownRemark.html;
  return (
    <HomeLayout>
      <SEO title="Projects" />
      <h1>My Projects</h1>
      <div className="article-text" dangerouslySetInnerHTML={{ __html: infoText }} />
    </HomeLayout>
  )
}

export const query = graphql`
  {
    projectInfo: file(relativePath: {eq: "projects/projectInfo.md"}) {
      childMarkdownRemark {
        html
      }
    }
  }
`

export default ProjectsPage