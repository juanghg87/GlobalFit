import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import "./carousel.scss";
import gif1 from '../../Assets/giphy.gif';
import gif2 from '../../Assets/deportivo.gif';
import gif3 from '../../Assets/funcional.gif';
import gif4 from '../../Assets/grupal.gif';
import gif5 from '../../Assets/mayor.gif';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [
    { src: gif1, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime molestias qui quis sed a obcaecati distinctio aut nesciunt ab autem?" },
    { src: gif2, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime molestias qui quis sed a obcaecati distinctio aut nesciunt ab autem?" },
    { src: gif3, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime molestias qui quis sed a obcaecati distinctio aut nesciunt ab autem?" },
    { src: gif4, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime molestias qui quis sed a obcaecati distinctio aut nesciunt ab autem?" },
    { src: gif5, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime molestias qui quis sed a obcaecati distinctio aut nesciunt ab autem?" },
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

    return (
        <div className="App">
            <Slider {...settings} className='slider'>
                {images.map((img, idx) => (
                    <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                        <img src={img.src} alt={img.description} />
                        <span className="image-description">{img.description}</span>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default Carousel;
