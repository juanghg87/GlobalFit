import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useState } from 'react';
import Slider from 'react-slick';
import "./carousel.scss";
import gif1 from '../../Assets/iniciacion.gif';
import gif2 from '../../Assets/deportivo.gif';
import gif3 from '../../Assets/funcional2.gif';
import gif4 from '../../Assets/grupal2.gif';
import gif5 from '../../Assets/mayor.gif';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [
    {
        src:
            gif1,
        title: "Iniciación",
        description: "La iniciación deportiva fomenta habilidades motoras, socialización, disciplina y autoestima, promoviendo un estilo de vida activo y saludable desde temprana edad."
    },
    {
        src:
            gif2,
        title: "Entrenamiento Competitivo",
        description: "El entrenamiento para competiciones mejora habilidades específicas, aumenta la confianza, fomenta la disciplina y prepara a los atletas para enfrentar desafíos."
    },
    {
        src:
            gif3,
        title: "Entrenamiento Funcional",
        description: "El entrenamiento funcional no competitivo mejora la movilidad, fuerza y resistencia, promoviendo un estilo de vida saludable y previniendo lesiones cotidianas."
    },
    {
        src:
            gif4,
        title: "Entrenamiento Grupal",
        description: "El entrenamiento grupal fomenta la motivación, el apoyo social y la camaradería, lo que mejora el compromiso y la adherencia al ejercicio."
    },
    {
        src:
            gif5,
        title: "Entrenamiento Senior",
        description: "El entrenamiento para adultos mayores mejora la movilidad, fuerza y equilibrio, reduciendo el riesgo de caídas y promoviendo una vida independiente y saludable."
    },
];

function Carousel() {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.1 });

    return (
        <motion.div className="App"
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
        >
            <div className='background-design'></div>
            <Slider {...settings} className='slider'>
                {images.map((img, idx) => (
                    <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                        <img src={img.src} alt={img.description} className='active-img' />
                        <h2 alt={img.description} className='carousel-title'>{img.title}</h2>
                        <span className="image-description">{img.description}</span>
                    </div>
                ))}
            </Slider>
        </motion.div>
    );
}
export default Carousel;
