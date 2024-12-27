import React from 'react'
import { Link } from 'react-router-dom'
import "./services.scss"

const Services = () => {
  return (
    <div>Services
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
      </nav>
    </div>
  )
}

export default Services