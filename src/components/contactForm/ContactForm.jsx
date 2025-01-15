import React, { useRef, useState } from 'react';
import "./contactForm.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const formRef = useRef();
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_12k534f', 'template_e35f4zr', formRef.current, 'LEZsQBzfZw7xrEho1')
            .then((result) => {
                setSuccess(true);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                setError(true);
            });
    };


    return (
        <div className='mainContactForm'>
            <div className='containerContactForm' >
                <h2 className='titleContactForm' >Contáctanos</h2>
                <span className='span-logoPhone'>
                    <img src="" alt="" />
                    <FaPhoneAlt className='logoPhone' />
                    <a
                        href="tel:+573187474537"
                        className='a-contactPhone'
                        aria-label="Llamar al número telefónico: +57 318 747 4537"
                    >( +57 )  3187474537
                    </a>
                </span>
                <form ref={formRef} onSubmit={sendEmail} action="">
                    <input
                        id="name"
                        type="text"
                        required
                        placeholder="Nombre"
                        name="name"
                        aria-required="true"
                        aria-label="Ingresa tu nombre"
                    />
                    <input
                        id="email"
                        type="email"
                        required
                        placeholder="Correo"
                        name="email"
                        aria-required="true"
                        aria-label="Ingresa tu correo electrónico"
                    />
                    <textarea
                        id="message"
                        rows={5}
                        placeholder="Mensaje"
                        name="message"
                        aria-label="Escribe tu mensaje"
                    />
                    <button type="submit" aria-label="Enviar formulario">Enviar</button>
                    {error && (
                        <div
                            className="errorMessage"
                            role="alert"
                            aria-live="assertive"
                        >
                            Hubo un error, ¡contáctame por WhatsApp!
                        </div>
                    )}
                    {success && (
                        <div
                            className="successMessage"
                            role="status"
                            aria-live="polite"
                        >
                            ¡Gracias por contactarnos!
                        </div>
                    )}
                </form>
                <div className='socialMedia' >
                    <a
                        href="https://wa.me/+573187474537"
                        className="aSocialMedia"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contactar por WhatsApp"
                    >
                        <IoLogoWhatsapp className="logoSocialMedia" aria-hidden="true" />
                        WhatsApp
                    </a>
                    <a
                        href="https://www.instagram.com/lui.soto.17/?hl=es"
                        className="aSocialMedia"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visitar perfil de Instagram"
                    >
                        Instagram
                        <AiFillInstagram className="logoSocialMedia" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;