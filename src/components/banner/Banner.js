import React from 'react';

import './banner.scss';
import Banner__slider from './Banner_slider/Banner__slider';

function Banner() {
    return (
        <div className='Banner'>
            <Banner__slider />
            <div className='Banner__right'>
                <div className='right__sale'>
                    <div className='right__sale__text'>
                        <h2>55%</h2>
                        <span>SUMMER <br /></span>
                        <span>SALES</span>
                    </div>

                </div>
                <div className='right__follow'>
                    <header>Follow us on Facebook</header>
                    <p>Sed ut perspiciatis unde omnis iste</p>
                    <p>natus error sit</p>
                    <a href='https://www.facebook.com/'>
                        <div className='right__follow__btn'>
                            <div className='right__follow__btn__img'></div>
                            <p>FOLLOW</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner