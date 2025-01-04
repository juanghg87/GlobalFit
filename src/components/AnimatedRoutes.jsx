import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Contact from "../pages/contact/Contact"
import Services from "../pages/services/Services"
import { AnimatePresence } from 'framer-motion';
import PruebasComponentes from "../pages/PruebasComponentes"


const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/test" element={<PruebasComponentes />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes