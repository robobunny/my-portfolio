import { graphql, Link } from "gatsby"
import React from "react"
import ProjectList from "../components/Projects/ProjectList"
import SEO from "../components/seo"
import HomeLayout from "../layouts/HomeLayout"
import style from "./projects.module.scss"

const ProjectsPage = ({ data }) => {
  const infoText = data.projectInfo.childMarkdownRemark.html;
  return (
    <HomeLayout>
      <SEO title="My Projects" />
      <h1 className={style.title}>My Projects</h1>
      <p className={style.content}>Here are a few of my projects:</p>
      <ProjectList />
      <div
        className={style.content}
        dangerouslySetInnerHTML={{ __html: infoText }}
      />
      <Link to={"/blog"} className={style.button}>
        My Blog
      </Link>
      <Link to={"/about/resume"} className={style.button}>
        My Resume
      </Link>
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