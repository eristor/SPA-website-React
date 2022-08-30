import React, { useState } from 'react';

import img1 from '../item_img/2.jpg';
import img2 from '../item_img/1.jpg';
import img3 from '../item_img/4.jpg';
import img4 from '../item_img/3.jpg';

import './IPSwiper.scss';

function IPSwiper() {

    const [imgs, setImgs] = useState([
        {
            id: 0,
            value: img1
        },
        {
            id: 1,
            value: img2
        },
        {
            id: 2,
            value: img3
        },
        {
            id: 3,
            value: img4
        }
    ]);

    const [sliderData, setSliderData] = useState(imgs[0])

    const handleClick = (index) => {
        const slider = imgs[index];
        setSliderData(slider);
    }

    return (
        <div className='IPSwiper__content__swiper'>
            <div className='IPSwiper__content__swiper__big' style={{ backgroundImage: `url(${sliderData.value})` }} />
            <div className='IPSwiper__content__swiper__little'>
                {
                    imgs.map((data, index) =>
                        <div className={sliderData.id === index ?
                            "IPSwiper__content__swiper__little__img active" :
                            "IPSwiper__content__swiper__little__img "}
                            key={data.id}
                            style={{ backgroundImage: `url(${data.value})` }}
                            onClick={() => handleClick(index)} />
                    )
                }
            </div>
        </div>
    )
}

export default IPSwiper