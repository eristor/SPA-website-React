import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';

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
                                    <li><Link to ="/404" >Accessories</Link></li>
                                    <li><Link to ="/404" >Alcohol</Link><a></a></li>
                                    <li><Link to ="/404" >Art</Link><a></a></li>
                                    <li><Link to ="/404" >Books</Link><a></a></li>
                                    <li><Link to ="/404" >Brink</Link><a></a></li>
                                    <li><Link to ="/404" >Electronics</Link><a></a></li>
                                    <li><Link to ="/404" >Flowers &amp; Plants</Link><a></a></li>
                                    <li><Link to ="/404" >Food</Link><a></a></li>
                                </ul>
                                <ul>
                                    <li><Link to ="/404" >Gadgets</Link><a></a></li>
                                    <li><Link to ="/404" >Garden</Link><a></a></li>
                                    <li><Link to ="/404" >Grocery</Link><a></a></li>
                                    <li><Link to ="/404" >Home</Link><a></a></li>
                                    <li><Link to ="/404" >Jewelry</Link><a></a></li>
                                    <li><Link to ="/404" >Kids &amp; Baby</Link><a></a></li>
                                    <li><Link to ="/404" >Man's Fashion</Link><a></a></li>
                                    <li><Link to ="/404" >Mobile</Link><a></a></li>
                                </ul>
                                <ul>
                                    <li><Link to ="/404" >Motorcycles</Link><a></a></li>
                                    <li><Link to ="/404" >Movies</Link><a></a></li>
                                    <li><Link to ="/404" >Music</Link><a></a></li>
                                    <li><Link to ="/404" >Office</Link><a></a></li>
                                    <li><Link to ="/404" >Pets</Link><a></a></li>
                                    <li><Link to ="/404" >Romantic</Link><a></a></li>
                                    <li><Link to ="/404" >Sport</Link><a></a></li>
                                    <li><Link to ="/404" >Toys</Link><a></a></li>
                                </ul>
                                <ul>
                                    <li><Link to ="/404" >Accessories</Link><a></a></li>
                                    <li><Link to ="/404" >Alcohol</Link><a></a></li>
                                    <li><Link to ="/404" >Art</Link><a></a></li>
                                    <li><Link to ="/404" >Books</Link><a></a></li>
                                    <li><Link to ="/404" >Brink</Link><a></a></li>
                                    <li><Link to ="/404" >Electronics</Link><a></a></li>
                                    <li><Link to ="/404" >Flowers &amp; Plants</Link><a></a></li>
                                    <li><Link to ="/404" >Food</Link><a></a></li>
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