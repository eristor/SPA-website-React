import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cardjson from "./Card.json";

import './card.scss';


function Card(props) {

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
        <div className='Wrapper'>
            <div className='Main'>
                {slice.map((item, index) => {
                    return (
                        <div className='Card' key={index}>
                            {item.dif ? (<div style={{ backgroundImage: `url(${getImage(item.img)})` }} className='Card__dif' >
                                <div className='Card__dif__effect2'></div>
                                <div className='Card__dif__text'>
                                    <p>{item.text}</p>
                                    <div className='Bottom__box__dif'>
                                        <div className='Card__dif__text__icon'></div>
                                        <p className='Card__dif__text__ago'>{item.ago}</p>
                                    </div>
                                </div>

                            </div>) : (<>
                                <Link to="/ItemPaper" className='link'><div className='Card__back' id='Card__back' style={{ backgroundImage: `url(${getImage(item.img)})` }}></div></Link>
                                {item.btn ? <></> : (<div>
                                    <div className='Card__effect'></div>
                                    <div className='Card__purch'>
                                        <div className='Card__purch__heart' onClick={props.Likeincrease}></div>
                                        <div className='Card__purch__plus' onClick={props.increase}></div>
                                    </div>
                                </div>)}

                                <Link to="/ItemPaper" className='link'><div className='Card__text'><p>{item.text}</p></div></Link>
                                {item.btn ? (<div className='Card__priceblock'>
                                    <div className='Card__priceblock__price'>${item.price}</div>
                                    <div className='Card__priceblock__btn' onClick={props.increase}>BUY NOW</div>
                                </div>) : (<div className='Card__priceblock__priceOnly'>$ {item.price}</div>)}
                            </>)}


                        </div>
                    )
                })}
            </div>
            {props.needBtn ? (<></>) : (props.green ? (
                <div className='btn__green' onClick={() => loadMore()}>
                    <div className='btn__green__text'>LOAD MORE</div>
                    <div className='btn__green__img'></div>
                </div>) : (<div className='btn' onClick={() => loadMore()}>
                    <div className='btn__text'>LOAD MORE</div>
                    <div className='btn__img'></div>
                </div>))}
        </div>
    )
}

export default Card