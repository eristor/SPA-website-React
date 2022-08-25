import React, { useRef } from 'react'
import one from './slider_img/Layer158.png';
import two from './slider_img/Layer159.png';
import three from './slider_img/Layer160.png';
import four from './slider_img/Layer161.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import './slider.scss';

function Sliders() {


    const sliderData = [
        {
            id: 1,
            img: one,
            text: 'Kristina Dam Oak Table With White Marble Top',
            tag: 'Awesome'
        },
        {
            id: 2,
            img: two,
            text: 'Kristina Dam Oak Table With White Marble Top',
            tag: 'Marketing'
        },
        {
            id: 3,
            img: three,
            text: 'Kristina Dam Oak Table With White Marble Top',
            tag: 'Awesome'
        },
        {
            id: 21,
            img: three,
            text: 'Kristina Dam Oak Table With White Marble Top',
            tag: 'Awesome'
        },
        {
            id: 34,
            img: three,
            text: 'Kristina Dam Oak Table With White Marble Top',
            tag: 'Awesome'
        },
        {
            id: 567,
            img: three,
            text: 'Kristina Dam Oak Table With White Marble Top',
            tag: 'Awesome'
        },
        {
            id: 4,
            img: four,
            text: 'Kristina Dam Oak Table With White Marble Top',
            tag: 'Marketing'
        }

    ]


    return (
        <div className='Slider__wrapper'>
            <div className='Content__featured__products'>
                <h2>Featured Products</h2>
                <p>Unde omnis iste natus error sit voluptatem</p>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                modules={[Navigation]}
                className = "MySwiper"

            >
                <div className='btn__section' slot="container-start">
                    <div className='btn__section__press prev' id='Left__btn' ></div>
                    <div className='btn__section__mid'>
                        <div className='btn__section__mid__'></div>
                        <div className='btn__section__mid__dec'><b>///</b></div>
                        <div className='btn__section__mid__'></div>
                    </div>
                    <div className='btn__section__press next' id='Right__btn' ></div>
                </div>
                <div className='Main__content'>
                    {sliderData.map((item) => {
                        return (
                            <SwiperSlide key={item.id + 1}>
                                <div className='Slider__card' key={item.id}>
                                    <div className='Slider__card__top' style={{ backgroundImage: `url(${item.img})` }}></div>
                                    <div className='Slider__card__text'><p>{item.text}</p></div>
                                    <div className='Slider__card__tag'><p><b>{item.tag}</b></p></div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </div>
            </Swiper>
        </div>
    );
}

export default Sliders