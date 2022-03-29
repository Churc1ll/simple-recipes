import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import Seo from "../components/SEO"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <Seo title="About" description="This is about page" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Tilde ugh migas aesthetic organic green juice.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur, voluptate!
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="picture"
            className="about-img"
            placeholder="dominantColor"
          />
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
export default About
