import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eye from './eye.png'

import './LoginWin.scss';

function LoginWin({ active, setActive }) {

    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [message2, setMessage2] = useState('');
    const [error2, setError2] = useState(null);


    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    function isValidPass(password) {
        return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password);
    }

    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }

        setMessage(event.target.value);
    };
    const handleChange2 = event => {
        if (!isValidPass(event.target.value)) {
            setError2('Pass is invalid');
        } else {
            setError2(null);
        }

        setMessage2(event.target.value);
    };
    const btn = document.querySelector('.Password__btn');
    const input = document.querySelector('.password__input');


    return (
        <div className={active ? "LoginWin active" : "LoginWin"} onClick={() => setActive(false)}>
            <div className='LoginWin__content' onClick={(e) => e.stopPropagation()}>
                <h2>Sign in</h2>
                <form className='LoginWin__content__form'>
                    <p>Email</p>
                    <input className='LoginWin__content__form__email' placeholder="Email" onChange={handleChange}></input>
                    {error && <h2 style={{ color: 'red', fontSize: '18px' }}>{error}</h2>}
                    <div className='LoginWin__content__form__part'>
                        <p>Password</p>
                        <Link to="/404" >forgot password</Link>
                    </div>
                    <label className='Password__label'>
                        <input type="password" name="password" placeholder="Password" onChange={handleChange2} className='LoginWin__content__form__password password__input' />
                        <div className='Password__btn' onClick={() => { 
                            btn.classList.toggle('active');
                            if (input.getAttribute('type') === 'password'){
                                input.setAttribute('type' , 'text')
                            } else {
                                input.setAttribute('type' , 'password')
                            }
                        }}><img src={eye} alt="img" /></div>
                    </label>
                    {error2 && <h2 style={{ color: 'red', fontSize: '18px' }}>{error2}</h2>}
                    <div className='LoginWin__content__form__btnContainer'>
                        <button type="submit" className='LoginWin__content__form__btnContainer__btn' >LOGIN</button>
                        <Link to="/404" >I don't have an account</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginWin