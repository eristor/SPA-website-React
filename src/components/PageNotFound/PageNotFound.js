import React from 'react';
import {Link} from 'react-router-dom';

import './PageNotFound.scss';

function PageNotFound() {
  return (
    <div className='PageNotFound'>
        <nav className='PageNotFound__nav'>
            <Link to ="/" className='PageNotFound__nav__home'>Home</Link>
            <div className='PageNotFound__nav__slash'>/</div>
            <span>404</span>
        </nav>
        <div className='PageNotFound__header'>  
            <div className='PageNotFound__header__decor'></div>
            <div className='PageNotFound__header__404'>404</div>
            <div className='PageNotFound__header__decor'></div>
        </div>
        <div className='PageNotFound__content'>
            <div className='PageNotFound__content__img'></div>
            <div className='PageNotFound__content__text'>
                <h3>Sorry, this page could not be found!</h3>
                <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                <Link to ="/" className='PageNotFound__content__text__home'>Go back to Homepage</Link>
                <div className='PageNotFound__content__text__search'>
                    <h3>Search our site</h3>
                    <input type='text' value="SEARCH" className='Search'></input>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageNotFound