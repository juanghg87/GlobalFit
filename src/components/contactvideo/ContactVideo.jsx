import React from 'react';
import videoContact from "../../Assets/backgroundContacUs.mp4";
import { motion, useInView } from "framer-motion";
import "./constVideo.scss";
import { lazy } from 'react';
import { useRef } from "react";

const container = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 10
    }
  },
  exit: { opacity: 0 }
}



const ContactVideo = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <motion.div className="videoBg2" ref={ref} variants={container} initial="hidden" animate={isInView} whileInView="visible" aria-labelledby="niño nadando bajo el agua, entrenamiento previo" >
      <motion.video variants={container} initial="initial" animate="animate"  className='contact-video' src={videoContact} autoPlay loop muted  preload="auto" onLoad={lazy} aria-describedby="niño nadando bajo el agua, entrenamiento previo"/>
    </motion.div>
  )
}

export default ContactVideo;