import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import HomeLayout from "../layouts/HomeLayout"

const ContactPage = ({ data }) => {
  const infoText = data.contactInfo.childMarkdownRemark.html;
  return (
    <HomeLayout>
      <SEO title="Contact" />
      <h1>Contact Me</h1>
      <div className="article-text" dangerouslySetInnerHTML={{ __html: infoText }} />
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