import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import "./contactForm.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const variantsInitial = {
    initial: {
        scale: 0.7,
        opacity: 0
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 2
        }
    }
}

const variantsInitialItems = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 5
        }
    }
}

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
        <motion.div className='mainContactForm'>
            <motion.div className='containerContactForm'
                initial="initial"
                animate="animate"
                variants={variantsInitial}
            >
                <motion.h2 className='titleContactForm'
                    initial="initial"
                    animate="animate"
                    variants={variantsInitialItems}
                >Contáctanos</motion.h2>
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
                <motion.form ref={formRef} onSubmit={sendEmail} action=""
                    initial="initial"
                    animate="animate"
                    variants={variantsInitialItems}
                >
                    <input
                        id="name"
                        type="text"
                        required
                        placeholder="Nombre"
                        name="name"
                        aria-required="true"
                        aria-label="Ingresa tu nombre"
                        minlength="5"
                        maxlength="50"
                        pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$"
                        title="El nombre debe tener al menos 5 caracteres y solo puede contener letras y espacios."
                    />
                    <input
                        id="email"
                        type="email"
                        required
                        placeholder="Correo"
                        name="email"
                        aria-required="true"
                        aria-label="Ingresa tu correo electrónico"
                        maxlength="100"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Ingresa un correo electrónico válido. Por ejemplo: usuario@dominio.com"
                    />
                    <textarea
                        id="message"
                        rows={5}
                        placeholder="Mensaje"
                        name="message"
                        aria-label="Escribe tu mensaje"
                        title="El texto debe contener entre 10 y 500 caracteres."
                        minlength="10"
                        maxlength="500"
                        required
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
                </motion.form>
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
            </motion.div>
        </motion.div>
    )
}

export default ContactForm;