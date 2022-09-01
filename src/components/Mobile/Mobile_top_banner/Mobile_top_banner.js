import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Link } from 'react-router-dom';


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Mobile_top_banner.scss';

function Mobile_top_banner() {
    return (
        <div className='Banner__left__mobile'>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                pagination={{
                    clickable: true
                }}
                modules={[Navigation, Pagination]}

            >
                <SwiperSlide>
                    <div className='left__slider__box one'>
                        <header>
                            Control and manage any device with cloud solutions
                        </header>
                        <p>Improve business perfomance and the user experiance with the right mix of loT technology and processes</p>
                        <Link to="/Category" className='link'><div className='__button'>VIEW MORE</div></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='left__slider__box two'>
                        <header>
                            Control and manage any device with cloud solutions
                        </header>
                        <p>Improve business perfomance and the user experiance with the right mix of loT technology and processes</p>
                        <Link to="/Category" className='link'><div className='__button'>VIEW MORE</div></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='left__slider__box three'>
                        <header>
                            Control and manage any device with cloud solutions
                        </header>
                        <p>Improve business perfomance and the user experiance with the right mix of loT technology and processes</p>
                        <Link to="/Category" className='link'><div className='__button'>VIEW MORE</div></Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Mobile_top_banner