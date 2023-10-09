import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ipod from '../images/ipod.png'
import ipod2 from '../images/ipod2.png'
import ipodtouch from '../images/ipodtouch.png' 
import ipodshuffle from '../images/ipodshuffle.png' 

import '../styles/carousel.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

export const PhotoCarousel = () => {
    return (
        <div className='container'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 50,
                    modifier: 2.5,
                }}
                pagination={{el:'.swiper-pagination',clickable:true}}
                navigation={{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow,Pagination,Navigation]}
                className='swiper_container'
            >
                <SwiperSlide>
                    <img src={ipod} alt='ipod'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ipodtouch} alt='ipodtouch'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ipodshuffle} alt='ipodshuffle'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ipod2} alt='ipod2'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ipod2} alt='ipod2'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ipod2} alt='ipod2'></img>
                </SwiperSlide>


                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name='arrow-back-outline'></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name='arrow-forward-outline'></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    )
}