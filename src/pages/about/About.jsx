import React from 'react'
import { Link } from 'react-router-dom'
import "./about.scss"
import ButtonFl from '../../components/buttonFl/ButtonFl'
import Navbar from '../../components/Navbar/Navbar'

const About = () => {
  return (
    <div>
      <ButtonFl />
      <Navbar />
      {/* <section>
        <h1>
          About
        </h1>
      </section>
      <section>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
        </nav>
      </section> */}
    </div>
  )
}

export default About