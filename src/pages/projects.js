import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import HomeLayout from "../layouts/HomeLayout"
import style from "./projects.module.scss"

const ProjectsPage = ({ data }) => {
  const infoText = data.projectInfo.childMarkdownRemark.html;
  return (
    <HomeLayout>
      <SEO title="Projects" />
      <h1 className={style.title}>My Projects</h1>
      <p className={style.content}>Here are a few of my projects:</p>
      <button>Project 1</button>
      <button>Project 2</button>
      <div className={style.content} dangerouslySetInnerHTML={{ __html: infoText }} />
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