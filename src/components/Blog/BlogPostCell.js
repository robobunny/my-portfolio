import React from "react"
import { navigate } from "gatsby"
import style from "./blogPostCell.module.scss"

const BlogPostCell = (props) => {
  const { path, excerpt, tags, title, date } = props.postInfo
  const postPath = "/blog" + path
  const goToPost = () => navigate(`${postPath}`)
  return (
    <button onClick={goToPost} className={style.blogPostCell}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.date}>{date}</p>
      <blockquote className={style.excerpt}>{excerpt}</blockquote>
      <p className={style.tags}>{
        tags.map((tag, index) => (
          <div key={index} className={style.tag}>{tag}</div>
        ))}</p>
    </button>
  )
}

export default BlogPostCell
