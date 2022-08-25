import React from 'react';
import { Link } from 'react-router-dom';


import './ItemPaper.scss';
import Product_swip from './item_swipre/Product_swip';

function ItemPaper() {


    return (
        <div className='ItemPaper'>
            <nav className='ItemPaper__nav'>
                <Link to="/" className='ItemPaper__nav__home'>Home</Link>
                <div className='ItemPaper__nav__slash'>/</div>
                <Link to="/" className='ItemPaper__nav__home'>OSF Theme</Link>
                <div className='ItemPaper__nav__slash'>/</div>
                <span>Archi Desk Accessories Pen Cup</span>
            </nav>
            <div className='ItemPaper__header'>
                <div className='ItemPaper__header__decor'></div>
                <div className='ItemPaper__header__404'>Archi Desk Accessories Pen Cup</div>
                <div className='ItemPaper__header__decor'></div>
            </div>
            <div className='ItemPaper__content'>
                <div className='ItemPaper__content__swiper'>
                    <Product_swip />
                </div>
            </div>
        </div>
    )
}

export default ItemPaper