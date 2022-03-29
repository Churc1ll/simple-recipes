import React from "react"
import TagList from "./TagList"
import RecipesList from "./RecipesList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        prepTime
        cookTime
        title
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipies = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query)
  return (
    <section className="recipes-container">
      <TagList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipies
