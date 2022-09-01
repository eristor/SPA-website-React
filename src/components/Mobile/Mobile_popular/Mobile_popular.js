import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cardjson from "../../Content/card/Card.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Mobile_popular.scss';

function Mobile_popular(props) {

    const [itemCard, setItemCard] = useState(Cardjson)


    const [noOfElement, setnoOfElement] = useState(props.quant);
    const slice = itemCard.slice(0, noOfElement);

    function loadMore() {
        setnoOfElement(noOfElement + noOfElement);
    }

    function getImage(image) {

        switch (image) {
            case "Layer149.png":
                return require("./card_img/Layer149.png")
                break;
            case "Layer151.png":
                return require("./card_img/Layer151.png")
                break;
            case "Layer152.png":
                return require("./card_img/Layer152.png")
                break;
            case "Layer153.png":
                return require("./card_img/Layer153.png")
                break;
            case "Layer154.png":
                return require("./card_img/Layer154.png")
                break;
            case "Layer155.png":
                return require("./card_img/Layer155.png")
                break;
            case "Layer156.png":
                return require("./card_img/Layer156.png")
                break;
            case "Layer157.png":
                return require("./card_img/Layer157.png")
                break;

            default:
                return require("./card_img/Layer149.png");
                break;
        }
    }

    return (
        <div className='Mobile__popularItem'>
            <Swiper
                spaceBetween={50}
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
                className="MySwiper"

            >
                <div className='PopularItem__header' slot="container-start">
                        <div className='PopularItem__header__'></div>
                        <div className='PopularItem__header__dec'>Popular item</div>
                        <div className='PopularItem__header__'></div>
                </div>
                <div className='Main__mobile__content'>
                    {slice.map((item, index) => {
                        return (
                            <SwiperSlide key={item.id + 1}>
                                <div className='Card' key={index}>
                                    <div className='Card__back' id='Card__back' style={{ backgroundImage: `url(${getImage(item.img)})` }}></div>
                                    {item.btn ? <></> : (<div>
                                        <div className='Card__effect'></div>
                                        <div className='Card__purch'>
                                            <div className='Card__purch__heart' onClick={props.Likeincrease}></div>
                                            <div className='Card__purch__plus' onClick={props.increase}></div>
                                        </div>
                                    </div>)}

                                    <div className='Card__text'><p>{item.text}</p></div>
                                    {item.btn ? (<Link to="/ItemPaper" className='link'><div className='Card__priceblock'>
                                        <div className='Card__priceblock__price'>${item.price}</div>
                                        <div className='Card__priceblock__btn'>BUY NOW</div>
                                    </div></Link>) : (<div className='Card__priceblock__priceOnly'>$ {item.price}</div>)}

                                </div>
                            </SwiperSlide>
                        )
                    })}
                </div>
            </Swiper>
        </div>
    )
}

export default Mobile_popular