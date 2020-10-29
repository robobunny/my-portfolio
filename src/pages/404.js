import React from "react"
import { Link } from "gatsby"
import style from "./404.module.scss"
import HomeLayout from "../layouts/HomeLayout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <HomeLayout>
    <SEO title="404: Not found" />
    <h1 className={style.title}>404: Not Found</h1>
    <div className={style.content}>
      <p>You just hopped on a route that doesn&#39;t exist... the sadness.</p>
      <p>
        But wait a second ... If a route automatically re-routes to the 404 page, then in a way,
        it does exist, doesn't it?
      </p>
      <p>
        Better <Link to="/">go back home</Link> before things get too philosophical
        around here.
      </p>
    </div>
  </HomeLayout>
)

export default NotFoundPage
