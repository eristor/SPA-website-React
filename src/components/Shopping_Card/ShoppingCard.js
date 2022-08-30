import React from 'react';
import { Link, } from 'react-router-dom';

import './ShoppingCard.scss';

function ShoppingCard() {
    return (
        <div>
            <div className='ShoppingCard'>
                <nav className='ShoppingCard__nav'>
                    <Link to="/" className='ShoppingCard__home'>Home</Link>
                    <div className='ShoppingCard__nav__slash'>/</div>
                    <span>Shopping Card</span>
                </nav>
                <div className='ShoppingCard__header'>
                    <div className='ShoppingCard__header__decor'></div>
                    <div className='ShoppingCard__header__404'>Shopping Card</div>
                    <div className='ShoppingCard__header__decor'></div>
                </div>
                <div>
                    <div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCard