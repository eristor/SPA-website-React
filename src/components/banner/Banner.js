import React from 'react';
import './banner.scss';

function Banner() {
  return (
    <div className='Banner'>
        <div className='Banner__left'>
            <div className='left__slider__one slide __active'>
                <header>
                    Control and manage any <br /> device with cloud solutions
                </header>
                <p>Improve business perfomance and the user experiance <br /> with the right mix of loT technology and processes</p>
                <div className='__button'><p>VIEW MORE</p></div>
            </div>
            <div className='left__slider__two slide'>
                <header>
                    Control and manage any device with cloud solutions
                </header>
                <p>Improve business perfomance and the user experiance with the right mix of loT technology and processes</p>
                <div className='__button'>VIEW MORE</div>
            </div>
            <div className='left__slider__three slide'>
                <header>
                    Control and manage any device with cloud solutions
                </header>
                <p>Improve business perfomance and the user experiance with the right mix of loT technology and processes</p>
                <div className='__button'>VIEW MORE</div>
            </div>
            <div className='__dots'>
                <div className='__dot __active'></div>
                <div className='__dot'></div>
                <div className='__dot'></div>
            </div>
        </div>

        <div className='Banner__right'>
            <div className='right__sale'>
                <div className='right__sale__text'>
                    <h2>55%</h2>
                    <span>SUMMER <br/></span>
                    <span>SALES</span>
                </div>
                    
            </div>
            <div className='right__follow'>
                <header>Follow us on Facebook</header>
                <p>Sed ut perspiciatis unde omnis iste</p>
                <p>natus error sit</p>
                <div className='right__follow__btn'>
                    <div className='right__follow__btn__img'></div>
                    <p>FOLLOW</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner