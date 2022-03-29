import { graphql, Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import Layout from "../components/Layout"
import setupTags from "../utils/setupTags"
const Tags = ({
  data: {
    allContentfulRecipe: { nodes },
  },
}) => {
  const newTags = setupTags(nodes)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            return (
              <Link
                to={`/tags/${slugify(text, { lower: true })}`}
                kew={index}
                className="tag"
              >
                <h5>{text} </h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}
export default Tags

export const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
