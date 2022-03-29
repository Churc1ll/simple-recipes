import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import Seo from "../components/SEO"

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <Seo title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export default TagTemplate

export const query = graphql`
  query getRecipesByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
      }
    }
  }
`
