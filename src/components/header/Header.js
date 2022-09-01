import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

function Header({ setModalActive, counter, likeCounter }) {

    return (
        <div className='Header'>
            <Link to="/"><div className='Header__logo' /></Link>

            <nav className='Header__navbar'>
                <ul className='navbar__mainul'>
                    <li className='navbar__item navbar__mega'>
                        <Link to="/Category" className='Link'>SERVICES</Link>
                        <div className='item__scroll' />
                        <div className='item__megamenu'>
                            <div className='megamenu__text'>
                                <div className='text__header'>
                                    <span>PRODUCT CATEGORIES</span>
                                    <span>SALE</span>
                                </div>
                                <div className='text__main'>
                                    <ul>
                                        <li><Link to="/404" className='Link'>Accessories</Link></li>
                                        <li><Link to="/404" className='Link'>Alcohol</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Art</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Books</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Brink</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Electronics</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Flowers &amp; Plants</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Food</Link><a></a></li>
                                    </ul>
                                    <ul>
                                        <li><Link to="/404" className='Link'>Gadgets</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Garden</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Grocery</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Home</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Jewelry</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Kids &amp; Baby</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Man's Fashion</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Mobile</Link><a></a></li>
                                    </ul>
                                    <ul>
                                        <li><Link to="/404" className='Link'>Motorcycles</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Movies</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Music</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Office</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Pets</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Romantic</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Sport</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Toys</Link><a></a></li>
                                    </ul>
                                    <ul>
                                        <li><Link to="/404" className='Link'>Accessories</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Alcohol</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Art</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Books</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Brink</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Electronics</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Flowers &amp; Plants</Link><a></a></li>
                                        <li><Link to="/404" className='Link'>Food</Link><a></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='megamenu__photo'></div>
                        </div>
                    </li>
                    <li className='navbar__item'>
                        <a>COMPANY</a>
                    </li>
                    <li className='navbar__item'>
                        <a>LIBRARY</a>
                    </li>
                    <li className='navbar__item'>
                        <a>CONTACT US</a>
                    </li>
                    <li className='navbar__item navbar__lang'>
                        <a>EN</a>
                        <div className='item__scroll' />
                    </li>
                    <li className='navbar__item navbar__currency'>
                        <a>$US</a>
                        <div className='item__scroll' />
                    </li>
                </ul>
            </nav>

            <div className='Header__iconbar'>
                <div className='iconbar__search' />
                <div className='iconbar__user' onClick={() => setModalActive(true)} />
                <div className='iconbar__likes' >
                    <div className='Header__iconbar__curcle'>
                        {likeCounter}
                    </div>
                </div>
                <div className='iconbar__bucket' >
                    <div className='Header__iconbar__curcle'>
                        {counter}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header