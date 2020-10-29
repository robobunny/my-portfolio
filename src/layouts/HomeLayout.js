/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Footer from "../components/Footer/Footer"
import style from "./homeLayout.module.scss"
import Header from "../components/Header/Header"

const HomeLayout = ({ children }) => {
  return (
    <div className={style.homeLayout}>
      <Header />
      <main className={style.mainContainer}>
        <div className={style.homeLayoutContent}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomeLayout
