import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Tabs from './Tabs/Tabs';


import './ItemPaper.scss';
import Card from '../Content/card/Card';
import ContentFooter from '../Content/ContentFooter/ContentFooter';
import IPSwiper from './ItemPaper__swiper/IPSwiper';
import ItemPaperInfoInfo from './ItemPaperInfo/ItemPaperInfo';

function ItemPaper({ Likeincrease, increase,counter, setCounter }) {


    return (
        <div>
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
                    <div className='Procol5'>
                        <div className='Procol'>
                            <IPSwiper />
                        </div>
                        <div className='Procol2'>
                            <ItemPaperInfoInfo counter= {counter} setCounter = {setCounter}/>
                        </div>
                        <div className='Procol3'>
                            <Tabs />
                        </div>
                    </div>
                    <div className='content__popularItem'>
                        <div className='content__popularItem__header'>
                            <div className='content__popularItem__header__'></div>
                            <h2>Popular Items</h2>
                            <div className='content__popularItem__header__'></div>
                        </div>
                        <div className='content__popularItem__card'>
                            <Card quant={4} needBtn={true} Likeincrease={Likeincrease} increase={increase} />
                        </div>
                    </div>
                </div>

            </div>
            <ContentFooter />
        </div>

    )
}

export default ItemPaper