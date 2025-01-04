import React, { useState } from 'react';
import "./gallery.scss";
import { GrClose } from "react-icons/gr";
import { motion } from 'framer-motion';
import gif1 from '../../Assets/giphy.gif';
import gif2 from '../../Assets/deportivo.gif';
import gif3 from '../../Assets/funcional.gif';
import mayor from '../../Assets/mayor.gif';
import opinion1 from '../../Assets/opinion1.PNG';
import estimulacion from '../../Assets/estimulacion.gif';
import grupal from '../../Assets/grupal.gif';
import opinion3 from '../../Assets/opinion3.PNG';
import globalFit from '../../Assets/globalFit.gif';
import funcional from '../../Assets/funcional.gif';
import opinion2 from '../../Assets/opinion2.PNG';

const Gallery = () => {

    let images = [
        {
            id: 1,
            src: gif1,
        },
        {
            id: 7,
            src: opinion1,
        },
        {
            id: 6,
            src: mayor,
        },
        {
            id: 2,
            src: estimulacion,
        },
        {
            id: 3,
            src: gif3,
        },
        {
            id: 4,
            src: grupal,
        },
        {
            id: 12,
            src: gif2,
        },
        {
            id: 9,
            src: opinion3.PNG,
        },
        {
            id: 10,
            src: globalFit.gif,
        },
        {
            id: 11,
            src: funcional.gif,
        },
        {
            id: 8,
            src: opinion2.PNG,
        },

    ]

    const [model, setModel] = useState(false);
    const [temingSrc, setTempSrc] = useState('');
    const getImg = (src) => {
        setTempSrc(src);
        setModel(true);
    }
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const items = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <secton className='gallery-container'>
            <main className='layout'>
                {/* <motion.div className={model ? "model open" : "model"} >
                    <img src={temingSrc} alt="" />
                    <GrClose onClick={() => setModel(false)} />
                </motion.div> */}
                {/* <motion.div  variants={container} >
                    {images.map((item, index) => {
                        return (
                            <motion.div
                                key={index}
                                onClick={() => getImg(item.src)}
                            >
                                <img src={item.src} alt="" variants={items} />
                            </motion.div>
                        )
                    })}
                </motion.div> */}
                <div className='img-container'>
                    <img src={gif1} alt="" className='img-gallery' />
                </div>
                <div className='img-container'>
                    <img src={gif2} alt="" className='img-gallery' />
                </div>
                <div className='img-container'>
                    <img src={grupal} alt="" className='img-gallery' />
                </div>
                <div className='img-container'>
                    <img src={opinion1} alt="" className='img-gallery' />
                </div>
                <div className='img-container'>
                    <img src={mayor} alt="" className='img-gallery' />
                </div>
                <div className='img-container'>
                    <img src={opinion3} alt="" className='img-gallery' />
                </div>
                <div className='img-container'>
                    <img src={globalFit} alt="" className='img-gallery' />
                </div>
                <div className='img-container'>
                    <img src={funcional} alt="" className='img-gallery' />
                </div>
                <div className='img-container'>
                    <img src={opinion2} alt="" className='img-gallery' />
                </div>
                <div className='img-container'>
                    <img src={estimulacion} alt="" className='img-gallery' />
                </div>

            </main>
        </secton>

    )
}

export default Gallery