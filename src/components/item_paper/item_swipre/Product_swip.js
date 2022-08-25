import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import img1 from './item_img/Layer6.png'

import "swiper/css";
import "swiper/css/pagination";
import './Product_swip.scss';

function Product_swip() {

    const [images, setImages] = useState([img1, img1, img1, img1])

    return (
        <div className='Product__swip'>
            <Swiper
            allowTouchMove={false}
            direction={"vertical"}
            spaceBetween={1}
            slidesPerView={1}
            pagination={{
                clickable: true
            }}
            modules={Pagination}
            
        >
            {
                images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='Product__slide' style={{ backgroundImage: `url(${item})` }}></div>
                    </SwiperSlide>

                )
                )
            }
        </Swiper>
        </div>
    )
}


export default Product_swip