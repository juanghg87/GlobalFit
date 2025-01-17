import React from 'react';
import "./buttonFl.scss";
import cross from "../../Assets/cross.png";
import { motion } from "framer-motion";
import wp from "../../Assets/wp.png";
import ig from "../../Assets/ig.png";
import { useState } from 'react';

const variantButton = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 19, damping: 2 } },

}

const wpButton = {
  initial: { x: "-10px", y: "-20px", opacity: 0, pointerEvents: "none" },
  animate: {
    x: "50px", y: "-30px", opacity: 1, pointerEvents: "auto",
    transition: {
      type: "spring", stiffness: 19, damping: 3
    }
  }
}

const igButton = {
  initial: { x: "-10px", y: "-20px", opacity: 0, pointerEvents: "none" },
  animate: {
    x: "-15px", y: "-90px", opacity: 1, pointerEvents: "auto",
    transition: {
      type: "spring", stiffness: 19, damping: 3
    }
  }
}


const ButtonFl = () => {

  const [useClick, setUseClick] = useState(false);

  return (
    <>
      <motion.div
        className='crossContainer'
        initial="initial"
        animate="animate"
        variants={variantButton}
        onClick={() => setUseClick(!useClick)}
        role="button"
        aria-label="Abrir menú de redes sociales sociales"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter') setUseClick(!useClick);
        }}
      >
        <img className='imgCross' src={cross} alt="Signo de X para cerrar el botón" />
        <div className='btn-socialMedia'>
          <a href="https://wa.me/+573187474537" target="_blank" tooltip="WhatsApp" rel="noopener noreferrer" className='a-socialMedia' aria-label="Contactar por WhatsApp">
            <motion.img
              src={wp}
              className='wp'
              alt="Imagen de logo de whatsapp"
              initial="initial"
              animate={useClick ? "animate" : "initial"}
              variants={wpButton}

            />
          </a>
          <a href="https://www.instagram.com/lui.soto.17/?hl=es" tooltip="Instagram" rel="noopener noreferrer" target='_blank' className='a-socialMedia' aria-label="Contactar por instagram"
          >
            <motion.img src={ig} className='ig' alt="Imagen de logo de instagram"
              initial="initial"
              animate={useClick ? "animate" : "initial"}
              variants={igButton}
            />
          </a>

        </div>
      </motion.div>

    </>
  );
};

export default ButtonFl;
