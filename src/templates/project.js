import React from "react"
import { graphql } from "gatsby"
import HomeLayout from "../layouts/HomeLayout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import style from "./project.module.scss"

export default function ProjectTemplate({ data }) {
  console.log(data);
  const { title } = data.projectInfo.frontmatter
  const { html } = data.projectInfo
  const image = 
    data.ImageSm ?
    (
      <Img fluid={[
        data.imageSm.childImageSharp.fluid,
        {
          ...data.imageMd.childImageSharp.fluid,
          media: `(min-width: 768px)`,
        },
        {
          ...data.imageLg.childImageSharp.fluid,
          media: `(min-width: 1440px)`,
        },
      ]}/>
    ) :
    (false)

  return (
    <HomeLayout>
      <SEO title={title} />
      <h1 className={style.title}>{title}</h1>
      {image}
      <div className={style.content} dangerouslySetInnerHTML={{__html: html}} />
    </HomeLayout>
  )
}

export const query = graphql`
  query ($imageSource: String) {
    projectInfo: markdownRemark(frontmatter: { img: { eq: $imageSource }}) {
      frontmatter {
        title
      }
      html
    }
    imageSm: file(relativePath: { eq: $imageSource }){
      childImageSharp {
        fluid(maxWidth: 256){
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageMd: file(relativePath: { eq: $imageSource }){
      childImageSharp {
        fluid(maxWidth: 1024){
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageLg: file(relativePath: { eq: $imageSource }){
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


