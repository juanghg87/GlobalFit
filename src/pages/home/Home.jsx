import React from 'react'
import { Link } from 'react-router-dom'
import "./home.scss"
// import Navbar from '../../components/Navbar/Navbar';
// import Hero from '../../components/hero/Hero';
// import ButtonFl from '../../components/buttonFl/ButtonFl';
// import Slider from '../../components/slider/Slider';

const Home = () => {
    return (
        <>
            {/* <ButtonFl />
            <Navbar />
            <section>
                <Hero />
            </section>
            <section>
                <Slider />
            </section> */}
            <h1>home</h1>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/services">Services</Link>
            </nav>
        </>

    )
}

export default Home