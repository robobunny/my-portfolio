import React from "react"
import { graphql } from "gatsby"
import BlogPostLayout from "../layouts/BlogPostLayout"
import BlogPost from "../components/Blog/BlogPost"
import SEO from "../components/seo"

export default function BlogPostTemplate({ data }) {
  const { frontmatter, html } = data.markdownRemark
  const { date, tags, title } = frontmatter

  return (
    <BlogPostLayout>
      <SEO title={title} />
      <BlogPost date={date} html={html} tags={tags} title={title} />
    </BlogPostLayout>
  )
}

export const query = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        title
      }
      html
    }
  }
`
