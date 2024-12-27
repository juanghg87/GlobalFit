import React from 'react'
import { Link } from 'react-router-dom'
import "./notFound.scss"

const NotFound = () => {
  return (
    <div>
      <section>
        <h1>
          NotFound
        </h1>
      </section>
      <section>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
        </nav>
      </section>
    </div>
  )
}

export default NotFound 