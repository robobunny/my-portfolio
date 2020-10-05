import React from "react"
import { navigate, graphql } from "gatsby"
import SEO from "../components/seo"
import HomeLayout from "../layouts/HomeLayout"
import style from "./resume.module.scss"

export default function CodeResume({ data }) {
  const { html } = data.codeResume.childMarkdownRemark

  return (
    <HomeLayout>
      <SEO title={`Resume`} />
      <div 
        className={style.resume}
        dangerouslySetInnerHTML={{__html: html}} 
      />
      <button onClick={()=>{navigate("/projects")}}>My Projects</button>
      <button onClick={()=>{navigate("/contact")}}>Contact Me</button>
    </HomeLayout>
  )
}

export const query = graphql`
  {
    codeResume: file(relativePath: {eq: "about/codeResume.md"}) {
      childMarkdownRemark {
        html
      }
    }
  }
`
