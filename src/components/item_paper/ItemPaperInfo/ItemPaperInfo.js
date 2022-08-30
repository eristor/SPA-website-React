import React, { useState } from 'react'
import ReadMoreReact from 'read-more-react';


import './ItemPaperInfo.scss';
function ItemPaperInfo({counter, setCounter}) {

    const [value, setValue] = useState(0);

    const increase = () => {
        setValue(value => +value + 1);
    };
    const decrease = () => {
        if (value > 0) {
            setValue(value => value - 1);
        }
    };

    const handleChange = event => {
        const result = event.target.value.replace(/\D/g, '');

        setValue(result);
    };

    const addToCard = () => {
        const result = +(counter + value)

        setCounter(result)
    }





    return (
        <div className='ItemPaperInfo__content__ItemInfo'>
            <h2 className='ItemPaperInfo__content__ItemInfo__price'>$299.99</h2>
            <div className='ItemPaperInfo__content__ItemInfo__filter'>
                <div className='ItemPaperInfo__content__ItemInfo__filter__leftPart'>
                    <div className='Gray__curlce'></div>
                    <p>Dark Gray</p>
                </div>
                <div className='filter__img'></div>
            </div>
            <div className='ItemInfo__wrapper'>
                <div className='ItemPaperInfo__content__ItemInfo__Add'>
                    <div className='ItemPaperInfo__content__ItemInfo__Add__Numeric'>
                        <div onClick={decrease}>-</div>
                        <input
                            type="text"
                            value={value}
                            onChange={handleChange}
                        />
                        <div onClick={increase}>+</div>
                    </div>
                </div>
                <div className='ItemPaperInfo__content__ItemInfo__Add__btn' onClick={addToCard}>ADD TO CARD</div>
            </div>
            <div className='ItemPaperInfo__content__ItemInfo__text'>
                <ReadMoreReact text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,"}
                    min={100}
                    ideal={150}
                    max={200}
                    readMoreText="Read more" />
            </div>
            <div className='ItemPaperInfo__content__ItemInfo__icons'>
                <div className='ItemPaperInfo__content__ItemInfo__icons__share'>Share</div>
                <div className='ItemPaperInfo__content__ItemInfo__icons__bar'>
                    <div className='ItemPaperInfo__content__ItemInfo__icons__bar__facebook'></div>
                    <div className='ItemPaperInfo__content__ItemInfo__icons__bar__google'></div>
                    <div className='ItemPaperInfo__content__ItemInfo__icons__bar__twitter'></div>
                    <div className='ItemPaperInfo__content__ItemInfo__icons__bar__pintrest'></div>
                </div>
            </div>

        </div>
    )
}

export default ItemPaperInfo