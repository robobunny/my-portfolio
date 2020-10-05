/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import style from "./homeLayout.module.scss"

const HomeLayout = ({ children }) => {
  return (
    <div className={style.homeLayout}>
      <Header />
        <main>
          <div className={style.homeLayoutContent}>
            {children}
          </div>
        </main>
      <Footer />
    </div>
  )
}

export default HomeLayout
