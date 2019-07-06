import React from "react"
import Helmet from "react-helmet"
import Hero from "../components/Hero/hero"
import HeroBackground from "../components/HeroBackground/heroBackground"
import About from "../components/About/about"
import Showcase from "../components/Showcase/showcase"
import Footer from "../components/Footer/footer"

import "./index.scss"

export default () => (
  <div>
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta charSet="utf-8" />
      <title>Jun Yu Lu</title>
      <meta name="description" content="Personal website and web development portfolio for Jun Yu Lu" />
    </Helmet>
    <HeroBackground className="fixedBackground">
      <Hero />
    </HeroBackground>
    <main>
      <About />
      <Showcase />
    </main>
    <Footer />
  </div>
)
