import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import slugify from "slugify"
import Seo from "../components/SEO"
const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    prepTime,
    servings,
    image,
    content: { ingredients, instructions, tags, tools },
    description: { description },
  } = data.contentfulRecipe
  const pathToImage = getImage(image)
  return (
    <Layout>
      <Seo title={title} description={description} />
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags :{" "}
                {tags.map((tag, index) => {
                  return (
                    <Link
                      to={`/tags/${slugify(tag, { lower: true })}`}
                      key={index}
                    >
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          {/* rest */}
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((insruction, index) => {
                return (
                  <div className="single-instruction" key={index}>
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{insruction}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingridients</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p className="single-ingredient" key={index}>
                      {item}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((item, index) => {
                  return (
                    <p className="single-tool" key={index}>
                      {item}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}
export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      prepTime
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`
export default RecipeTemplate
