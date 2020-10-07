import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import HomeLayout from "../layouts/HomeLayout"
import style from "./contact.module.scss"

const ContactPage = ({ data }) => {
  const infoText = data.contactInfo.childMarkdownRemark.html;
  return (
    <HomeLayout>
      <SEO title="Contact" />
      <h1 className={style.title}>Contact Me</h1>
      <div className="article-text" dangerouslySetInnerHTML={{ __html: infoText }} />
      <p>
        <a 
          href="mailto:williamduraney@gmail.com" 
          className={style.button}
        >
          Email
        </a>
      </p>
      <p>
        <a 
          href="https://github.com/robobunny" 
          className={style.button}
        >
          Github
        </a>
      </p>
      <p>
        <a 
          href="https://www.linkedin.com/in/william-duraney" 
          className={style.button}
        >
          LinkedIn
        </a>
      </p>
    </HomeLayout>
  )
}

export const query = graphql`
  {
    contactInfo: file(relativePath: {eq: "contact/contactInfo.md"}) {
      childMarkdownRemark {
        html
      }
    }
  }
`

export default ContactPage