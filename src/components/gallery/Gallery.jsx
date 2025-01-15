import React, { useState } from 'react';
import "./gallery.scss";
import { GrClose } from "react-icons/gr";
import { motion } from 'framer-motion';
import gif1 from '../../Assets/giphy.gif';
import gif2 from '../../Assets/deportivo.gif';
import mayor from '../../Assets/mayor.gif';
import gifgallery1 from '../../Assets/gif-gallery-1.gif';
import gifgallery2 from '../../Assets/gif-gallery-2.gif';
import gifgallery3 from '../../Assets/gif-gallery-3.gif';
import estimulacion from '../../Assets/estimulacion.gif';
import grupal from '../../Assets/grupal.gif';
import globalFit from '../../Assets/globalFit.gif';
import funcional from '../../Assets/funcional.gif';

const Gallery = () => {

    const images = [
        { id: 1, src: gif1, alt: "Animación de ejercicios físicos dinámicos" },
        { id: 7, src: gifgallery1, alt: "Demostración de técnica funcional" },
        { id: 6, src: mayor, alt: "Programa diseñado para adultos mayores" },
        { id: 2, src: estimulacion, alt: "Ejercicio de estimulación motriz" },
        { id: 4, src: grupal, alt: "Entrenamiento en grupo al aire libre" },
        { id: 12, src: gif2, alt: "Deportes y actividad física en equipo" },
        { id: 9, src: gifgallery2, alt: "Sesión de entrenamiento personalizado" },
        { id: 10, src: globalFit, alt: "Ejercicios con enfoque global fit" },
        { id: 11, src: funcional, alt: "Ejercicios de fuerza funcional" },
        { id: 8, src: gifgallery3, alt: "Animación de calentamiento físico" },
    ];

    const [model, setModel] = useState(false);
    const [tempSrc, setTempSrc] = useState('');

    const getImg = (src) => {
        setTempSrc(src);
        setModel(true);
    };

    return (
        <section className='gallery-container'>
            <main className='layout'>
                <motion.div
                    className={model ? "model open" : "model"}
                    role="dialog"
                    aria-hidden={!model}
                    aria-label="Vista ampliada de imagen"
                >
                    <img src={tempSrc}
                        alt="Vista ampliada de imagen seleccionada"
                        loading="lazy"
                        className="img-expanded"
                    />
                    <button
                        onClick={() => setModel(false)}
                        aria-label="Cerrar vista ampliada"
                        className='no-button'
                    >
                        <GrClose className="img-model"/>
                    </button>
                </motion.div>

                {images.map((image) => (
                    <motion.div
                        className='img-container'
                        key={image.id}
                        onClick={() => getImg(image.src)}
                    >
                        <img src={image.src} alt="" className='img-gallery' />
                    </motion.div>
                ))}
            </main>
        </section>
    );
};

export default Gallery;
