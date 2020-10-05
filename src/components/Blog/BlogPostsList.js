import React from "react"
import BlogPostCell from "./BlogPostCell"
import style from "./blogPostList.module.scss"

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
      <h2 className={style.title}>Blog Posts:</h2>
      <ul className={style.blogPostList}>
        {Posts}
      </ul>
    </div>
  )
}

