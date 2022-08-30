import React from 'react';
import { Link } from 'react-router-dom';

import './LoginWin.scss';

function LoginWin({ active, setActive }) {
    return (
        <div className={ active ? "LoginWin active" : "LoginWin"} onClick={() => setActive(false)}>
            <div className='LoginWin__content' onClick={(e) => e.stopPropagation()}>
                <h2>Sign in</h2>
                <form className='LoginWin__content__form'>
                    <p>Email</p>
                    <input className='LoginWin__content__form__email'></input>
                    <div className='LoginWin__content__form__part'>
                        <p>Lato</p>
                        <Link to="/404" >forgot password</Link>
                    </div>
                    <input className='LoginWin__content__form__password'></input>
                    <div className='LoginWin__content__form__btnContainer'>
                        <button type="submit" className='LoginWin__content__form__btnContainer__btn'>LOGIN</button>
                        <Link to="/404" >I don't have an account</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginWin