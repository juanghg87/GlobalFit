import React from 'react'
import "./home.scss"
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/hero/Hero';
import ButtonFl from '../../components/buttonFl/ButtonFl';
import Carousel from '../../components/slider/Carousel';
import Gallery from '../../components/gallery/Gallery';

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
            <section>
                <Gallery />
            </section>
        </>

    )
}

export default Home;