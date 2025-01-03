import React from 'react'
import "./contact.scss"
import Navbar from "../../components/Navbar/Navbar"
import ButtonFl from "../../components/buttonFl/ButtonFl"
import ContactForm from '../../components/contactForm/ContactForm'
import ContactVideo from '../../components/contactvideo/ContactVideo'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ButtonFl />
      <ContactForm />
      <ContactVideo />
    </div>
  )
}

export default Contact 