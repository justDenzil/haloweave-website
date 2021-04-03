import React from "react"
import "../styles/styles.scss"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
  <section className="hero">
    <div className="background">
      <div className="stars-group">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
      </div>
      <div className="hero-banner">
        <StaticImage src="../assets/images/herobanner_desktop.png" alt="hero banner flex" />
      </div>
      <div className="hero-text">
        <h1>Turning your ideas into reality</h1>
        <p>We bring world class digital solutions to help scale your business through branding and building web &amp; mobile applications.</p>
      </div>
    </div>
  </section>
  )
}


