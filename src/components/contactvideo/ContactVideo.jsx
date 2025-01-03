import React from 'react';
import videoContact from "../../Assets/backgroundContacUs.mp4";
import { motion, useInView } from "framer-motion";
import "./constVideo.scss";
import { lazy } from 'react';
import { useRef } from "react";

const container = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}



const ContactVideo = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <motion.div className="videoBg2" ref={ref} variants={container} initial="hidden" animate={isInView} whileInView="visible" >
      <video className='contact-video' src={videoContact} autoPlay loop muted  preload="auto" onLoad={lazy} />
    </motion.div>
  )
}

export default ContactVideo;