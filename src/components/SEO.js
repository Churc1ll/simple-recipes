import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDescription }]}
    />
  )
}

export default SEO

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
