import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipies from "../components/AllRecipies"
import Seo from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" description="Sweet home (page)" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt=""
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simple recipes</h1>
              <h4>no fluff, only recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipies />
      </main>
    </Layout>
  )
}
