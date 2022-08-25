import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className='Footer'>
        <div className='Footer__contacts'>
            <div className='Footer__contacts__copyright'>
                <span>&#169; Copyright 2019.<br/></span>
                <span>All Rights Reserved.</span>
            </div>
            <div className='Footer__contacts__info'>
                <h3>CONTACT</h3>
                <span>Headquaters:<br/></span>
                <span>5600,Blvd. des Galeries, Bur 530</span>
                <span>Quebec, Quebec G2K 2H6<br/></span>
                <div className='Footer__contacts__info__data'>
                    <div><a href="mailto:contact@osf-global.com">contact@osf-global.com<br/></a></div>
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
                    <li><a>Alcohol</a></li>
                    <li><a>Art</a></li>
                    <li><a>Books</a></li>
                    <li><a>Drink</a></li>
                    <li><a>Electronics</a></li>
                </ul>  
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Jewelry</a></li>
                    <li><a>Kids &amp; Baby</a></li>
                    <li><a>Men's Fashion</a></li>
                    <li><a>Mobile</a></li>
                    <li><a>Motorcycles</a></li>
                    <li><a>Movies</a></li>
                    <li><a>Music</a></li>
                </ul>
                
                <ul>
                    <li><a>Sport</a></li>
                    <li><a>Toys</a></li>
                    <li><a>Travel</a></li>
                    <li><a>Women's Fashion</a></li>
                </ul>
                <ul>
                    <li><a>About us</a></li>
                    <li><a>Delivery</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
        <div className='Footer__iconbar'>
            <div className='Footer__iconbar__facebook'></div>
            <div className='Footer__iconbar__google'></div>
            <div className='Footer__iconbar__twitter'></div>
            <div className='Footer__iconbar__pintrest'></div>
        </div>
    </div>
  )
}

export default Footer