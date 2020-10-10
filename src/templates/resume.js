import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import HomeLayout from "../layouts/HomeLayout"
import style from "./resume.module.scss"

export default function CodeResume({ data }) {
  const { html, frontmatter } = data.codeResume.childMarkdownRemark

  return (
    <HomeLayout>
      <SEO title={`Resume`} />
      <h1 className={style.title}>{frontmatter.title}</h1>
      <div
        className={style.resume}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Link
        to={"/projects"}
        className={style.button}
      >
        My Projects
      </Link>
      <Link
        to={"/contact"}
        className={style.button}
      >
        Contact Me
      </Link>
    </HomeLayout>
  )
}

export const query = graphql`
  {
    codeResume: file(relativePath: {eq: "about/codeResume.md"}) {
      childMarkdownRemark {
        frontmatter {
          title
        }
        html
      }
    }
  }
`
