import React, { useState } from 'react';
import "./aboutInfo.scss";
import gifgallery1 from '../../Assets/gif-gallery-1.gif';
import petlover from '../../Assets/about-petlover.mp4'
import deportista from '../../Assets/about-deportista.mp4'
import entrenadora from '../../Assets/about-entrenadora.mp4'
import profesora from '../../Assets/about-profesora.mp4'

const info = [
    {
        id: 1,
        src: gifgallery1,
        title: "Profesional en Deportes",
        info: "Apasionada profesional en deportes con más de 5 años de experiencia. Experta en entrenamiento deportivo para todas las edades: iniciación infantil, formación competitiva y programas adaptados para adultos y adultos mayores. Con un enfoque amigable y motivador, inspiro bienestar, desarrollo físico y amor por un estilo de vida activo.",

    },
    {
        id: 2,
        src: profesora,
        title: "Profesora Deportiva",
        info: "Profesional en deportes y rescatista apasionada, con experiencia como profesora de natación en todos los estilos y edades. Comprometida con la seguridad y el aprendizaje, también promuevo habilidades en otros deportes. Amigable y motivadora, inspiro confianza en el agua y fuera de ella, fomentando un estilo de vida activo y saludable.",

    },
    {
        id: 3,
        src: entrenadora,
        title: "Entrenadora Deportiva y Competitiva",
        info: "Entrenadora deportiva con más de 5 años de experiencia en entrenamiento funcional, grupal y rehabilitación. Apasionada por ayudar a otros a alcanzar sus metas, amo trabajar con adultos mayores y personas en recuperación de lesiones deportivas, siempre promoviendo salud, confianza y un enfoque positivo.",

    },
    {
        id: 4,
        src: deportista,
        title: "Triatleta",
        info: "Soy una apasionada del deporte y la vida activa. Triatleta dedicada, basketbolista de corazón, y amante de la natación y el buceo. Disfruto superar límites, explorar el mundo bajo el agua, y fomentar estilos de vida saludables con energía, compromiso y una sonrisa siempre presente.",

    },
    {
        id: 5,
        src: petlover,
        title: "¡Mamá perruna de Gato!",
        info: "Soy una mujer apasionada por los animales, dedicada y cariñosa. Mamá perruna de Gato, un peludo que es mi compañero de vida y mi mayor alegría. Amo cuidar, proteger y aprender de ellos, porque cada animal es un mundo lleno de amor incondicional y lecciones únicas..",

    },
];

const AboutInfo = () => {
    const [selectedInfo, setSelectedInfo] = useState(info[0]);

    const handleClick = (id) => {
        const selected = info.find(item => item.id === id);
        setSelectedInfo(selected);
    };

    return (
        <main className='general-container'>
            <main className='container'>
                <div className='info-img-container'>
                    <aside className='img-container-about'>
                        {selectedInfo &&
                            <video src={selectedInfo.src} alt="Selected topic" className='img-selected'
                                autoPlay
                                loop
                                muted
                                preload="auto"
                                playsInline
                            >
                            </video>
                            // <img src={selectedInfo.src} alt="Selected topic" className='img-selected' />}
                        }
                    </aside>
                    <article className='info-container-about'>
                        <span className='professional-name'>Luisa Fernanda Soto</span>
                        {selectedInfo && <h1 className='title-about'>{selectedInfo.title}</h1>}
                        {selectedInfo && <p className='description-about'>{selectedInfo.info}</p>}
                    </article>
                </div>
                <aside className='list-topics'>

                    <button onClick={() => handleClick(1)} className='btn-about'>Profesional</button>
                    <button onClick={() => handleClick(2)} className='btn-about'>Profesora</button>
                    <button onClick={() => handleClick(3)} className='btn-about'>Entrenadora</button>
                    <button onClick={() => handleClick(4)} className='btn-about'>Deportista</button>
                    <button onClick={() => handleClick(5)} className='btn-about'>Petlover</button>
                </aside>
            </main>
        </main>
    );
};

export default AboutInfo;
