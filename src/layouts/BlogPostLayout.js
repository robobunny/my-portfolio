import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import style from "./blogPostLayout.module.scss"

const BlogPostLayout = ({ children }) => (
  <div className={style.blogPostLayout}>
    <Header />
      <main className={style.mainContainer}>
        <div className={style.blogPostLayoutContent}>
          {children}
        </div>
      </main>
    <Footer />
  </div>
)

export default BlogPostLayout