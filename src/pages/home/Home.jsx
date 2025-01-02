import React from 'react'
import "./home.scss"
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/hero/Hero';
import ButtonFl from '../../components/buttonFl/ButtonFl';
import Slider3 from '../../components/slider/Slider3';
import Carousel from '../../components/slider/Carousel';

const Home = () => {
    return (
        <>
            <ButtonFl />
            <Navbar />
            <section>
                <Hero />
            </section>
            <section>
                <Carousel />
            </section>
        </>

    )
}

export default Home;