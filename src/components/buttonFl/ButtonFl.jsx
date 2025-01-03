import React from 'react';
import "./buttonFl.scss";
import cross from "../../Assets/cross.png";
import { motion } from "framer-motion";
import wp from "../../Assets/wp.png";
import ig from "../../Assets/ig.png";
import { useState } from 'react'; 

const variantButton = {
  initial: { rotate: 0 },
  animate: { rotate: 90, transition: { duration: 0.2 } },
  hover: { rotate: 225, transition: { duration: 0.2 }, scale: 1.1 }
}

const wpButton = {
  initial: { x: "-30px", y: "-20px", opacity: 0 },
  animate: {
    x: "50px", y: "-100px", opacity: 1,
    transition: {
      type: "spring", stiffness: 19, damping: 3
    }
  }
}

const igButton = {
  initial: { x: "-30px", y: "-10px", opacity: 0 },
  animate: {
    x: "70px", y: "-40px", opacity: 1,
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
        whileHover="hover"
        variants={variantButton}
        onClick={() => setUseClick(!useClick)}
      >
        <img className='imgCross' src={cross} alt="" />
      </motion.div>
      <div className='btn-socialMedia'>
        <a href="https://wa.me/+573187474537" target="_blank" tooltip="WhatsApp" rel="noopener noreferrer" className='a-socialMedia'>
          <motion.img src={wp} className='wp' alt=""
            initial="initial"
            animate={useClick ? "animate" : "initial"}
            variants={wpButton}
          />
        </a>
        <a href="https://www.instagram.com/lui.soto.17/?hl=es" tooltip="Instagram" rel="noopener noreferrer" target='_blank' className='a-socialMedia'>
          <motion.img src={ig} className='ig' alt=""
            initial="initial"
            animate={useClick ? "animate" : "initial"}
            variants={igButton}
          />
        </a>

      </div>
    </>
  );
};

export default ButtonFl;
