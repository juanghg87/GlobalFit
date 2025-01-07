import React from 'react'
import "./about.scss"
import ButtonFl from '../../components/buttonFl/ButtonFl'
import Navbar from '../../components/Navbar/Navbar'
import AboutInfo from '../../components/about/AboutInfo'

const About = () => {
  return (
    <div>
      <ButtonFl />
      <Navbar />
      <AboutInfo />
    </div>
  )
}

export default About