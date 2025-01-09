import React from 'react';
import video from "../../Assets/video-presentation.MP4";
import "./hero.scss";
import { motion } from 'framer-motion';

const videoVariants = {
  initial: { scale: 0.8 },
  animate: { scale: 1, transition: { duration: 3 } } 
};

const wordVariants = { 
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2, 
      duration: 0.5,
    },
  }),
};

const Hero = () => {
  const text = "¿Sabías que el deporte no solo fortalece el cuerpo de nuestros hijos, sino también su mente? El deporte es una herramienta invaluable para el desarrollo integral de los niños. Les ayuda a mejorar su concentración, coordinación y habilidades sociales. ¡Haz parte del crecimiento de los pequeños acompañándolos, motívalos a moverse, a crecer sanos y felices!";
  const words = text.split(" ");

  return (
    <div className='hero'>
      <motion.aside
        initial="initial"
        animate="animate"
        variants={videoVariants}
      >
        <motion.p className='introText'>
          {words.map((word, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              style={{ display: 'inline-block', marginRight: '4px' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </motion.aside>
      <motion.div className='videoContainer'>
        <motion.video
          src={video}
          autoPlay
          loop
          muted
          preload="auto"
          initial="initial"
          animate="animate"
          variants={videoVariants}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
