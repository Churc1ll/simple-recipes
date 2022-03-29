import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <Seo title="contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>What to get in touch</h3>
            <p>
              Tumeric thundercats meditation kickstarter prism. Distillery
              normcore 3 wolf moon yuccie post-ironic echo park air plant VHS
              mixtape bicycle rights migas. Tumeric DIY man braid vegan coloring
              book. Edison bulb twee selvage, fingerstache food truck squid
              letterpress kitsch readymade VHS live-edge pug hella.{" "}
            </p>
            <p>
              Ugh copper mug edison bulb synth, crucifix squid woke pour-over
              keffiyeh palo santo hashtag. Forage ethical locavore scenester
              godard blog ugh.
            </p>
            <p>
              Pok pok freegan selfies lomo. Palo santo tattooed skateboard,
              slow-carb meditation helvetica iPhone. Normcore selvage health
              goth, next level raclette keytar you probably haven't heard of
              them.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xwkynoka"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Your name </label>
                <input type="text" name="name" id="name" />
              </div>

              <div className="form-row">
                <label htmlFor="email">Your email </label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message </label>
                <textarea type="text" name="message" id="message" />
              </div>

              <button type="submit" className="btn block ">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>look at this awesome souce</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        prepTime
        cookTime
        title
        id
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

export default Contact
