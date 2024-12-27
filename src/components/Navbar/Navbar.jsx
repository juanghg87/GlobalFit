import React from 'react';
import "./navbar.scss"
import logo from "../../Assets/GlobalFit-logo.png"
import logoDos from "../../Assets/globalfitlogo.png"
import { motion } from 'framer-motion';
import ToggleMenu from '../toggleMenu/ToggleMenu';
import { Link } from 'react-router-dom';

const navVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
};

const Navbar = () => {
    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <div className='imgContainer'>
                <Link to="/home">
                    <img className='navImg' src={logo} alt="Global Fit Logo" />
                    <img className='nav-Img' src={logoDos} alt="Global Fit Logo" />
                </Link>
            </div>
            <div className='anchorContainer'>
                <motion.a whileHover={{ scale: 1.2, color: "#ff0000", fontWeight: "bolder" }} >
                    <Link to="/contact">Contáctame</Link>
                </motion.a>
                <motion.a href="" whileHover={{ scale: 1.2, color: "#ff0000", fontWeight: "bolder" }} >
                    <Link to="/about">Sobre mi</Link>
                </motion.a>
                <motion.a href="" whileHover={{ scale: 1.2, color: "#ff0000", fontWeight: "bolder" }} >
                    <Link to="/services">Planes</Link>
                </motion.a>
            </div>
            <ToggleMenu />
        </motion.nav>
    )
}

export default Navbar