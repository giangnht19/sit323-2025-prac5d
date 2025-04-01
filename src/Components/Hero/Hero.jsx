import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Empowering Student Connections and Growth</h1>
        <p>Welcome to Campus Culture, this platform designed to foster connections and community engagement within the campus environment. </p>
        <button className="btn">Get Started <img src={dark_arrow} alt="arrow" /></button>
      </div>
    </div>
  )
}
import "./Hero.css"

export default Hero
