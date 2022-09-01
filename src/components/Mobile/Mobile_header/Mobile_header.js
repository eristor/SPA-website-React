import React from 'react'
import $ from 'jquery';
import { Routes, Route, Link, } from 'react-router-dom';

import './Mobile_header.scss'

function Mobile_header({ setModalActive, counter, likeCounter }) {
    $('nav .button').click(function () {
        $('nav .button span').toggleClass("rotate");
    });
    $('nav ul li .first').click(function () {
        $('nav ul li .first span').toggleClass("rotate");
    });
    $('nav ul li .second').click(function () {
        $('nav ul li .second span').toggleClass("rotate");
    });

    return (
        <div className='Mobile__header__wrapper'>
            <div className='Mobile__header'>
                <nav>
                    <label htmlFor="btn" className="button">
                        <span className="burger"></span>
                    </label>
                    <input type="checkbox" id="btn" />
                    <ul className="menu">

                        <li>
                            <label htmlFor="btn-2" className="first">SERVICES
                                <span className="fas fa-caret-down"></span>
                            </label>
                            <input type="checkbox" id="btn-2" />
                            <ul>
                                <li>
                                    <label htmlFor="btn-2.1" className="first_one">Product categories
                                        <span className="fas fa-caret-down"></span>
                                    </label>
                                    <input type="checkbox" id="btn-2.1" />
                                    <ul>
                                        <li><Link to="/404" >Accessories</Link></li>
                                        <li><Link to="/404" >Alcohol</Link><a></a></li>
                                        <li><Link to="/404" >Art</Link><a></a></li>
                                        <li><Link to="/404" >Books</Link><a></a></li>
                                        <li><Link to="/404" >Brink</Link><a></a></li>
                                        <li><Link to="/404" >Electronics</Link><a></a></li>
                                        <li><Link to="/404" >Flowers &amp; Plants</Link><a></a></li>
                                        <li><Link to="/404" >Food</Link><a></a></li>
                                        <li><Link to="/404" >Gadgets</Link><a></a></li>
                                        <li><Link to="/404" >Garden</Link><a></a></li>
                                        <li><Link to="/404" >Grocery</Link><a></a></li>
                                        <li><Link to="/404" >Home</Link><a></a></li>
                                        <li><Link to="/404" >Jewelry</Link><a></a></li>
                                        <li><Link to="/404" >Kids &amp; Baby</Link><a></a></li>
                                        <li><Link to="/404" >Man's Fashion</Link><a></a></li>
                                        <li><Link to="/404" >Mobile</Link><a></a></li>
                                        <li><Link to="/404" >Motorcycles</Link><a></a></li>
                                        <li><Link to="/404" >Movies</Link><a></a></li>
                                        <li><Link to="/404" >Music</Link><a></a></li>
                                        <li><Link to="/404" >Office</Link><a></a></li>
                                        <li><Link to="/404" >Pets</Link><a></a></li>
                                        <li><Link to="/404" >Romantic</Link><a></a></li>
                                        <li><Link to="/404" >Sport</Link><a></a></li>
                                        <li><Link to="/404" >Toys</Link><a></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <label htmlFor="btn-2.2" className="first_two">sale
                                        <span className="fas fa-caret-down"></span>
                                    </label>
                                    <input type="checkbox" id="btn-2.2" />
                                    <ul>
                                        <li><Link to="/404" >Accessories</Link><a></a></li>
                                        <li><Link to="/404" >Alcohol</Link><a></a></li>
                                        <li><Link to="/404" >Art</Link><a></a></li>
                                        <li><Link to="/404" >Books</Link><a></a></li>
                                        <li><Link to="/404" >Brink</Link><a></a></li>
                                        <li><Link to="/404" >Electronics</Link><a></a></li>
                                        <li><Link to="/404" >Flowers &amp; Plants</Link><a></a></li>
                                        <li><Link to="/404" >Food</Link><a></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">COMPANY</a></li>
                        <li><a href="#">LIBRARY</a></li>
                        <li><a href="#">CONTACT US</a></li>
                        <li id='Chill'><a><div className='Header__img'></div></a></li>
                    </ul>
                </nav>
                <div className='Mobile__header__logo'></div>
            </div>

        </div>

    )
}

export default Mobile_header