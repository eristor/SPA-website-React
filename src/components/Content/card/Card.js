import React, { useState } from 'react';
import './card.scss';
import one from './card_img/Layer149.png';
import two from './card_img/Layer151.png';
import three from './card_img/Layer152.png';
import four from './card_img/Layer153.png';
import five from './card_img/Layer154.png';
import six from './card_img/Layer155.png';
import seven from './card_img/Layer156.png';
import eight from './card_img/Layer157.png'
import { v4 as uuid } from 'uuid';

function Card(props) {

    const cardData = [
        {
            id: uuid(),
            img: one,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        },
        {
            id: uuid(),
            img: two,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        },
        {
            id: uuid(),
            img: three,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        },
        {
            id: uuid(),
            img: four,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        },
        {
            id: uuid(),
            img: five,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        },
        {
            id: uuid(),
            img: six,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        },
        {
            id: uuid(),
            img: seven,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        },
        {
            id: uuid(),
            img: seven,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        },
        {
            id: uuid(),
            img: seven,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        },
        {
            id: uuid(),
            img: seven,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        },
        {
            id: uuid(),
            img: seven,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        },
        {
            id: uuid(),
            img: seven,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        },
        {
            id: uuid(),
            img: seven,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        },
        {
            id: uuid(),
            img: seven,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        },
        {
            id: uuid(),
            img: seven,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        },
        {
            id: uuid(),
            img: seven,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        },
        {
            id: uuid(),
            img: eight,
            text: 'Kristina Dam Oak Table With White Marble Top',
            price: '799.55',
            btn: false
        }

    ]

    const [noOfElement, setnoOfElement] = useState(props.quant);
    const slice = cardData.slice(0, noOfElement);

    function loadMore() {
        setnoOfElement(noOfElement + noOfElement);
    }

    return (
        <div className='Wrapper'>
            <div className='Main'>
                {slice.map((item, index) => {
                    return (
                        <div className='Card' key={index}>
                            <div className='Card__back' id='Card__back' style={{ backgroundImage: `url(${item.img})` }}></div>
                            <div className='Card__text'><p>{item.text}</p></div>
                            {item.btn ? (<div className='Card__priceblock'>
                                <div className='Card__priceblock__price'>${item.price}</div>
                                <div className='Card__priceblock__btn'>BUY NOW</div>
                            </div>) : (<div className='Card__priceblock__priceOnly'>$ {item.price}</div>)}
                        </div>
                    )
                })}
            </div>
            {props.green ? (
                <div className='btn__green' onClick={() => loadMore()}>
                    <div className='btn__green__text'>LOAD MORE</div>
                    <div className='btn__green__img'></div>
                </div>) : (<div className='btn' onClick={() => loadMore()}>
                    <div className='btn__text'>LOAD MORE</div>
                    <div className='btn__img'></div>
                </div>)}

        </div>
    )
}

export default Card