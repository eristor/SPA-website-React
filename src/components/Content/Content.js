import React, { useState } from 'react';
import Card from './card/Card';
import './content.scss';
import Banner_bottom from '../banner/Banner_bottom/Banner_bottom';
import Sliders from './Slider/Sliders';
import ContentFooter from './ContentFooter/ContentFooter';

function Content({Likeincrease, increase}) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <div className='Content'>
        <div className='Content__popularItem'>
          <div className='Content__popularItem__header'>
            <div className='Content__popularItem__header__'></div>
            <h2>Popular Items</h2>
            <div className='Content__popularItem__header__'></div>
          </div>
          <div className='Content__popularItem__card'>
            <Card quant={8} needBtn={false} Likeincrease = {Likeincrease} increase = {increase}/>
          </div>
        </div>
        <div className='Content__banner'>
          <Banner_bottom />
        </div>
        <Sliders />


      </div>
      <ContentFooter />
    </div>

  )
}

export default Content