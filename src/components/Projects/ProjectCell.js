import React from "react"
import { navigate } from "gatsby"
import style from "./projectCell.module.scss"

const ProjectCell = (props) => {
  const { title, summary, path: projectPath } = props.projectInfo
  const goToProject = () => navigate(`/projects${projectPath}`)
  return (
    <button onClick={goToProject} className={style.projectCell}>
      <p className={style.title}>{title}</p>
      <blockquote className={style.summary}>{summary}</blockquote>
    </button>
  )
}

export default ProjectCell
