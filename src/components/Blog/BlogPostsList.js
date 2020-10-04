import React from "react"
import BlogPostCell from "./BlogPostCell"

export default function BlogPostsList ({ data }, ...props) {
  const Posts = data.edges
    .map((edge, index) => (
      <li>
        <BlogPostCell key={index} postInfo={edge.node.frontmatter} />
      </li>
    )
  )
  
  return (
    <div>
      <h2 className="blog-posts-list-title">Blog Posts:</h2>
      <ul className="blog-posts-list">
        {Posts}
      </ul>
    </div>
  )
}

