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
      <p>
        <Link
          to={"/projects"}
        >
          My Projects
        </Link>
      </p>
      <p>
        <Link
          to={"/contact"}
        >
          Contact Me
        </Link>
      </p>
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
