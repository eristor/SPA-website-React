import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../Content/card/Card';
import Sliders from '../Content/Slider/Sliders';

import './Category.scss'

function Category() {
    return (
        <div className='CategoryPage'>
            <nav className='CategoryPage__nav'>
                <Link to="/" className='CategoryPage__home'>Home</Link>
                <div className='CategoryPage__nav__slash'>/</div>
                <span>Category Landing Services</span>
            </nav>
            <div className='CategoryPage__header'>
                <div className='CategoryPage__header__decor'></div>
                <div className='CategoryPage__header__404'>Services</div>
                <div className='CategoryPage__header__decor'></div>
            </div>
            <div className='CategoryPage__content'>
                <div className='CategoryPage__content__filtres'>
                    <div className='CategoryPage__content__filtres__block'>
                        <p>Price</p>
                        <div className='CategoryPage__content__filtres__block__filter'>
                            <p>$0.00 -$100.00</p>
                            <div className='CategoryPage__content__filtres__block__filter__img'></div>
                        </div>
                    </div>
                    <div className='CategoryPage__content__filtres__block'>
                        <p>Brands</p>
                        <div className='CategoryPage__content__filtres__block__filter'>
                            <p>Ukraine sport</p>
                            <div className='CategoryPage__content__filtres__block__filter__img'></div>
                        </div>
                    </div>
                    <div className='CategoryPage__content__filtres__block'>
                        <p>Size </p>
                        <div className='CategoryPage__content__filtres__block__filter'>
                            <p>Small</p>
                            <div className='CategoryPage__content__filtres__block__filter__img'></div>
                        </div>
                    </div>
                    <div className='CategoryPage__content__filtres__block'>
                        <p id="color">Color</p>
                        <div className='CategoryPage__content__filtres__block__color'>
                            <div className='bubble active' style={{ backgroundColor: 'white' }}></div>
                            <div className='bubble' style={{ backgroundColor: '#43c0d0' }}></div>
                            <div className='bubble' style={{ backgroundColor: '#3d402f' }}></div>
                            <div className='bubble' style={{ backgroundColor: '#4aaf00' }}></div>
                            <div className='bubble' style={{ backgroundColor: '#315abe' }}></div>
                            <div className='bubble' style={{ backgroundColor: '#eb6116' }} ></div>
                            <div className='bubble' style={{ backgroundColor: '#dd031d' }}></div>
                            <div className='bubble' style={{ backgroundColor: '#efead8' }}></div>
                        </div>
                    </div>
                    <div className='CategoryPage__content__filtres__block'>
                        <p>Sort by</p>
                        <div className='CategoryPage__content__filtres__block__filter'>
                            <p>Price</p>
                            <div className='CategoryPage__content__filtres__block__filter__img'></div>
                        </div>
                    </div>
                    <div className='CategoryPage__content__filtres__block'>
                        <p>Show</p>
                        <div className='CategoryPage__content__filtres__block__filter'>
                            <p>16 per page</p>
                            <div className='CategoryPage__content__filtres__block__filter__img'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='CategoryPage__text'><p>12,931 result in apparel</p></div>
            <Card green={true} quant={16} />
            <div className='Content__slider'>
                <Sliders />
            </div>
        </div>
    )
}

export default Category