import React from 'react'

import "./notFound.scss"
import Navbar from '../../components/Navbar/Navbar'
import ButtonFl from '../../components/buttonFl/ButtonFl'

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <ButtonFl />
      <h1>
        page not found
      </h1>
    </div>
  )
}

export default NotFound 