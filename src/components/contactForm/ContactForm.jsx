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
                <h2 className='titleContactForm' >Contáctanos
                </h2>
                
                <span className='span-logoPhone'>
                    <img src="" alt="" />
                    <FaPhoneAlt className='logoPhone' />
                    <a href="tel:+573187474537" className='a-contactPhone'>( +57 )  3187474537</a>
                </span>
                <form ref={formRef} onSubmit={sendEmail} action="">
                    <input type="text" required placeholder='Nombre' name='name' />
                    <input type="email" required placeholder='Correo' name='email' />
                    <textarea rows={5} placeholder='Mensaje' name='message' />
                    <button>Enviar</button>
                    {error && "Hubo un error, ¡contáctame por WhatsApp!"}
                    {success && "¡Gracias por contactarnos!"} 
                </form>
                <div className='socialMedia' >
                    <a href="https://wa.me/+573187474537" className='aSocialMedia' target='blank'>
                        <IoLogoWhatsapp className='logoSocialMedia' />
                        WhatsApp
                        <img src="" alt="" />
                    </a>
                    <a href="https://www.instagram.com/lui.soto.17/?hl=es" className='aSocialMedia' target='blank' >
                        Instagram
                        <AiFillInstagram className='logoSocialMedia' />
                        <img src="" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;