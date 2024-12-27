import React, { useState } from 'react';
import './toggleMenu.scss';
import menu from "../../Assets/menu.png";
import personal from "../../Assets/personal.png";
import info from "../../Assets/info.png";
import trofeo from "../../Assets/trofeo.png";
import { Link } from 'react-router-dom';

const ToggleMenu = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <img
                src={menu}
                alt=""
                className='menu-img'
                onClick={handleToggle}
            />
            <div
                className='toggleContainer'
                style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}
            >
                <div className='img-container'>
                    <img className='img-menu' src={personal} alt="" />
                    <Link to="/contact" className='a-toggleMenu'>Contáctame</Link>
                </div>
                <div className='img-container'>
                    <img className='img-menu' src={info} alt="" />
                    <Link to="/about" className='a-toggleMenu'>Sobre mi</Link>
                </div>
                <div className='img-container'>
                    <img className='img-menu' src={trofeo} alt="" />
                    <Link to="/services" className='a-toggleMenu'>Planes</Link>
                </div>
            </div>
        </div>
    );
};

export default ToggleMenu;
