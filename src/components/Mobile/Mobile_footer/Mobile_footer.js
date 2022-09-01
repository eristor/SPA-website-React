import React, { useState } from 'react'
import $ from 'jquery';
import { Routes, Route, Link, } from 'react-router-dom';

import "./Mobile_footer.scss";

function Mobile_footer() {

    const [readMore, setReadMore] = useState(false);
    const [readMore2, setReadMore2] = useState(false);
    const [readMore3, setReadMore3] = useState(false);
    const extraContent = <div className='Info'>
        <span>Headquaters:<br /></span>
        <span>5600,Blvd. des Galeries, Bur 530<br /></span>
        <span>Quebec, Quebec G2K 2H6<br /></span>
        <div className='Footer__mobile__contacts__info__data'>
            <div><a href="mailto:contact@osf-global.com">contact@osf-global.com<br /></a></div>
            <div><a href="tel:+18885484344">+1 (888) 548-4344</a></div>
        </div>
    </div>
    const extraContent2 = <div>
        <ul>
            <li><a>Alcohol</a></li>
            <li><a>Art</a></li>
            <li><a>Books</a></li>
            <li><a>Drink</a></li>
            <li><a>Electronics</a></li>
            <li><a>Home</a></li>
            <li><a>Jewelry</a></li>
            <li><a>Kids &amp; Baby</a></li>
            <li><a>Men's Fashion</a></li>
            <li><a>Mobile</a></li>
            <li><a>Motorcycles</a></li>
            <li><a>Movies</a></li>
            <li><a>Music</a></li>
            <li><a>Sport</a></li>
            <li><a>Toys</a></li>
            <li><a>Travel</a></li>
            <li><a>Women's Fashion</a></li>
        </ul>
    </div>
    const extraContent3 = <div>
        <ul>
            <li><a>About us</a></li>
            <li><a>Delivery</a></li>
            <li><a>Testimonials</a></li>
            <li><a>Contact</a></li>
        </ul>
    </div>
    const linkName1 = 'CONTACT';
    const linkName2 = 'CATEGORIEST';
    const linkName3 = 'ABOUT';

    return (
        <div className='Mobile__footer'>
            <div className='Mobile__footer__copy'>
                <p>&#169; Copyright 2022.</p>
                <p>All Rights Reserved.</p>
            </div>
            <div className='Mobile__footer__contact'>
                <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h2>{linkName1}</h2></a>
                {readMore && extraContent}
            </div>
            <div className='Mobile__footer__categoriest'>
                <a className="read-more-link" onClick={() => { setReadMore2(!readMore2) }}><h2>{linkName2}</h2></a>
                {readMore2 && extraContent2}
            </div>
            <div className='Mobile__footer__about'>
                <a className="read-more-link" onClick={() => { setReadMore3(!readMore3) }}><h2>{linkName3}</h2></a>
                {readMore3 && extraContent3}
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

export default Mobile_footer