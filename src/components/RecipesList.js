import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import slugify from "slugify"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe, index) => {
        const { title, cookTime, prepTime, image } = recipe
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link to={`/${slug}`} className="recipe" key={index}>
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Prep : {prepTime} min | Coock : {cookTime} min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
