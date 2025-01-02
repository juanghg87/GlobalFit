import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, EffectCoverflow, Keyboard, Mousewheel, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-coverflow';
import "./slider3.scss";
import gif1 from '../../Assets/giphy.gif';
import gif2 from '../../Assets/deportivo.gif';
import gif3 from '../../Assets/funcional.gif';
import gif4 from '../../Assets/grupal.gif';
import gif5 from '../../Assets/mayor.gif';

const images = [
    gif1, gif2, gif3, gif4, gif5
]

const Slider3 = () => {
    return (
        // <div className='container-swiper'>
        //     <Swiper
        //         className="suiper"
        //         modules={[Navigation, EffectCoverflow, Keyboard, Mousewheel]}
        //         effect={'coverflow'}
        //         grabCursor={true}
        //         centeredSlides={true}
        //         loop={true}
        //         loopFillGroupWithBlank= {false}
        //         slidesPerView={7}
        //         loopedSlides={7}
        //         autoplay={{
        //             delay: 3000,
        //             disableOnInteraction: true,
        //         }}
        //         lazy={{
        //             loadPrevNext: true,
        //         }}
        //         coverflowEffect={{
        //             rotate: 1,
        //             stretch: 10,
        //             depth: 100,
        //             modifier: 4,
        //             slideShadows: false,
        //         }}
        //         navigation={{
        //             nextEl: ".nxt-swipper-btn",
        //             prevEl: ".prev-swipper-btn",
        //             clickable: true
        //         }}
        //         keyboard={{
        //             enabled: true,
        //         }}
        //         mousewheel={{
        //             thresholdDelta: 70,
        //         }}
        //         breakpoints={{
        //             560: {
        //                 slidesPerView: 2.5,
        //             },
        //             768: {
        //                 slidesPerView: 3,
        //             },
        //             1024: {
        //                 slidesPerView: 3,
        //             },
        //         }}
        //         onSwiper={(swiper) => swiper.update()}
        //     >
               
        //         <SwiperSlide className='slide-swiper'>
        //             <div className="content-slide">
        //                 {/* slide-content */}
        //                 <img src={gif1} alt="" />
        //             </div>
        //         </SwiperSlide>
        //         <SwiperSlide className='slide-swiper'>
        //             <div className="content-slide">
        //                 <img src={gif2} alt="" />
        //             </div>
        //         </SwiperSlide>
        //         <SwiperSlide className='slide-swiper'>
        //             <div className="content-slide">
        //                 <img src={gif3} alt="" />
        //             </div>
        //         </SwiperSlide>
        //         <SwiperSlide className='slide-swiper'>
        //             <div className="content-slide">
        //                 <img src={gif4} alt="" />
        //             </div>
        //         </SwiperSlide>
        //         <SwiperSlide className='slide-swiper'>
        //             <div className="content-slide">
        //                 <img src={gif5} alt="" />
        //             </div>
        //         </SwiperSlide>
                

        //         <div className="slider-controler">
        //             <div className="prev-swipper-btn">
        //                 <img src="https://img.icons8.com/?size=100&id=357&format=png&color=000000" alt="" />
        //             </div>
        //             <div className="nxt-swipper-btn">
        //                 <img src="https://img.icons8.com/?size=100&id=355&format=png&color=000000" alt="" />
        //             </div>
        //             <div className='swiper-pagination' ></div>
        //         </div>
        //     </Swiper>
        // </div>
        <div className='App'>
            <Slider>
                {images.map((img, idx) => {
                    <div>
                        <img src={img} alt={img}></img>
                    </div>
                })}
            </Slider>
        </div>
    );
};

export default Slider3;
