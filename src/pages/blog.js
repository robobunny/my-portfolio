import React from "react"
import { graphql } from "gatsby"
import BlogPostsList from "../components/Blog/BlogPostsList"
import HomeLayout from "../layouts/HomeLayout"
import SEO from "../components/seo"

export default function BlogHomePage ({ data }) {
  return (
    <HomeLayout>
      <SEO title="Robobunny Blog" />
      <h1>Robobunny Blog</h1>
      <div dangerouslySetInnerHTML={{__html: data.BlogIntro.html}} />
      <BlogPostsList data={data.BlogPosts}/>
    </HomeLayout>
  )
}

export const query = graphql`
  {
    BlogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {frontmatter: {type: {eq: "blogPost"}}}
    ) {
      edges {
        node {
          frontmatter {
            path
            excerpt
            date(formatString: "MMM D, YYYY")
            title
            tags
          }
        }
      }
    }
    BlogIntro: markdownRemark(
      fileAbsolutePath: {regex: "/copy\\/blog\\/intro.md/"}
    ) {
      html
    }
  }
`
