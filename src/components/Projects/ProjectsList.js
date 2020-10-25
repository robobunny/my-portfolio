import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import ProjectCell from "./ProjectCell"


export default function ProjectsList () {
  const { projects } = useStaticQuery(graphql`
    {
      projects: allFile(
        filter: {
          relativePath: {glob: "projects/*"}, 
          childMarkdownRemark: {
            frontmatter: {
              hasOwnPage: {eq: true}
            }
          }
        },
        sort: {
          order: DESC,
          fields: [childMarkdownRemark___frontmatter___number]
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                summary
                path
              }
            }
          }
        }
      }
    }
  `)  
 
  const Projects = projects.edges
    .map((project, index) => (
      <li key={index}>
        <ProjectCell  
          projectInfo={project.node.childMarkdownRemark.frontmatter} 
        />   
      </li>
    ))

  return (
    <ul>
      {Projects}
    </ul>
  )
}