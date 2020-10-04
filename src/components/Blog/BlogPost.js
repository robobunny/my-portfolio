import React from "react"

const BlogPost = (props) => {
  return (
    <div className="blog-post-content">
      <h1 className="blog-post-title">{props.title}</h1>
      <p className="blog-post-date">{props.date}</p>
      <div className="blog-post-body" dangerouslySetInnerHTML={{__html: props.html}} />
      <div className="blog-post-tags">
        {
          props.tags.forEach((value, index) => (
            <div className="blog-post-tag">{value}</div>
          ))
        }
      </div>
    </div>
  )
}

export default BlogPost
