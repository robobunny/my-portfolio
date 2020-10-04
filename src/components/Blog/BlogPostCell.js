import React from "react"
import { Link } from "gatsby"

const BlogPostCell = (props) => {
  const { path, excerpt, tags, title, date } = props.postInfo
  const postPath = "/blog" + path
  return (
    <div className="blog-post-cell">
      <Link to={postPath} className="blog-post-cell-title">{title}</Link>
      <p className="blog-post-cell-date">{date}</p>
      <p className="blog-post-cell-exceprt">{excerpt}</p>
      <p className="blog-post-cell-tags">Tags: {tags.join(', ')}</p>
    </div>
  )
}

export default BlogPostCell
