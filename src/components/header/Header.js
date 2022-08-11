import React from 'react';
import './header.scss';

function Header() {
  return (
    <div className='Header'>
        <div className='Header__logo'>
        </div>

        <nav className='Header__navbar'>
            <ul className='navbar__mainul'>
                <li className='navbar__item navbar__mega'>
                    <a>SERVICES</a>
                    <div className='item__scroll'/>
                    <div className='item__megamenu'>
                        <div className='megamenu__text'>
                            <div className='text__header'>
                                <span>PRODUCT CATEGORIES</span>
                                <span>SALE</span>
                            </div>
                            <div className='text__main'>
                                <ul>
                                    <li><a>Accessories</a></li>
                                    <li><a>Alcohol</a></li>
                                    <li><a>Art</a></li>
                                    <li><a>Books</a></li>
                                    <li><a>Brink</a></li>
                                    <li><a>Electronics</a></li>
                                    <li><a>Flowers &amp; Plants</a></li>
                                    <li><a>Food</a></li>
                                </ul>
                                <ul>
                                    <li><a>Accessories</a></li>
                                    <li><a>Alcohol</a></li>
                                    <li><a>Art</a></li>
                                    <li><a>Books</a></li>
                                    <li><a>Brink</a></li>
                                    <li><a>Electronics</a></li>
                                    <li><a>Flowers &amp; Plants</a></li>
                                    <li><a>Food</a></li>
                                </ul>
                                <ul>
                                    <li><a>Accessories</a></li>
                                    <li><a>Alcohol</a></li>
                                    <li><a>Art</a></li>
                                    <li><a>Books</a></li>
                                    <li><a>Brink</a></li>
                                    <li><a>Electronics</a></li>
                                    <li><a>Flowers &amp; Plants</a></li>
                                    <li><a>Food</a></li>
                                </ul>
                                <ul>
                                    <li><a>Accessories</a></li>
                                    <li><a>Alcohol</a></li>
                                    <li><a>Art</a></li>
                                    <li><a>Books</a></li>
                                    <li><a>Brink</a></li>
                                    <li><a>Electronics</a></li>
                                    <li><a>Flowers &amp; Plants</a></li>
                                    <li><a>Food</a></li>
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
                    <div className='item__scroll'/>
                </li>
                <li className='navbar__item navbar__currency'>
                    <a>$US</a>
                    <div className='item__scroll'/>
                </li>
            </ul>
        </nav>

        <div className='Header__iconbar'>
            <div className='iconbar__search' />
            <div className='iconbar__user' />
            <div className='iconbar__likes' />
            <div className='iconbar__bucket' />
        </div>
    </div>
  )
}

export default Header