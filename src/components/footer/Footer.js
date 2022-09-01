import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer__contacts'>
                <div className='Footer__contacts__copyright'>
                    <span>&#169; Copyright 2022.<br /></span>
                    <span>All Rights Reserved.</span>
                </div>
                <div className='Footer__contacts__info'>
                    <h3>CONTACT</h3>
                    <span>Headquaters:<br /></span>
                    <span>5600,Blvd. des Galeries, Bur 530</span>
                    <span>Quebec, Quebec G2K 2H6<br /></span>
                    <div className='Footer__contacts__info__data'>
                        <div><a href="mailto:contact@osf-global.com">contact@osf-global.com<br /></a></div>
                        <div><a href="tel:+18885484344">+1 (888) 548-4344</a></div>
                    </div>
                </div>
            </div>
            <div className='Footer__nav'>
                <div className='Footer__nav__header'>
                    <span><b>CATEGORIEST</b></span>
                    <span><b>ABOUT</b></span>
                </div>
                <div className='Footer__nav__content'>
                    <ul>
                        <li><Link to="/404" >Alcohol</Link></li>
                        <li><Link to="/404" >Art</Link></li>
                        <li><Link to="/404" >Books</Link></li>
                        <li><Link to="/404" >Drink</Link></li>
                        <li><Link to="/404" >Electronics</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/404" >Home</Link></li>
                        <li><Link to="/404" >Jewelry</Link></li>
                        <li><Link to="/404" >Kids &amp; Baby</Link></li>
                        <li><Link to="/404" >Men's Fashion</Link></li>
                        <li><Link to="/404" >Mobile</Link></li>
                        <li><Link to="/404" >Motorcycles</Link></li>
                        <li><Link to="/404" >Movies</Link></li>
                        <li><Link to="/404" >Music</Link></li>
                    </ul>

                    <ul>
                    <li><Link to="/404" >Sport</Link></li>
                    <li><Link to="/404" >Toys</Link></li>
                    <li><Link to="/404" >Travel</Link></li>
                    <li><Link to="/404" >Women's Fashion</Link></li>
                    </ul>
                    <ul>
                    <li><Link to="/404" >About us</Link></li>
                    <li><Link to="/404" >Delivery</Link></li>
                    <li><Link to="/404" >Testimonials</Link></li>
                    <li><Link to="/404" >Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className='Footer__iconbar'>
                <a href='https://www.facebook.com/'><div className='Footer__iconbar__facebook'></div></a>
                <a href='https://myaccount.google.com/'><div className='Footer__iconbar__google'></div></a>
                <a href='https://twitter.com/'><div className='Footer__iconbar__twitter'></div></a>
                <a href='https://ru.pinterest.com/'><div className='Footer__iconbar__pintrest'></div></a>
            </div>
        </div>
    )
}

export default Footer