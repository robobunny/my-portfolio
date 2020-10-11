import React from "react"
import style from "./blogPost.module.scss"

const BlogPost = (props) => {
  return (
    <div>
      <div className={style.title}>
        <h1>{props.title}</h1>
        <p className={style.date}>{props.date}</p>
      </div>
      <div
        className={style.content}
        dangerouslySetInnerHTML={{ __html: props.html }}
      />
      <div className={style.tags}>
        <h2>Tags:</h2>
        {props.tags.map((value, index) => {
          return (
            <div className={style.tag} key={index}>
              {value}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BlogPost
