import React from 'react'

import './Mobile_contentFooter.scss'

function Mobile_contentFooter() {
    return (
        <div className='ContentFooters__mobile'>
            <div className='ContentFooters__mobile__footer__block one'>
                <div className='ContentFooters__mobile__footer__block__img' id='footer__img__1'></div>
                <div className='ContentFooters__mobile__footer__block__text'>
                    <header>FOCUS</header>
                    <p>Our unwavering focus on superior service delivery and building next generation competencies</p>
                </div>
            </div>
            <div className='ContentFooters__mobile__footer__block two'>

                <div className='ContentFooters__mobile__footer__block__text'>
                    <header>METHOD</header>
                    <p>A standardized methodology designed to deliver measurable business results and predictable costs</p>
                </div>
                <div className='ContentFooters__mobile__footer__block__img' id='footer__img__2'></div>
            </div>
            <div className='ContentFooters__mobile__footer__block three'>
                <div className='ContentFooters__mobile__footer__block__img' id='footer__img__3'></div>
                <div className='ContentFooters__mobile__footer__block__text'>
                    <header>KNOWLADGE</header>
                    <p>A highly skilled, proactive workforce that reliably improves each client's RO! while mitigating their business risk</p>
                </div>
            </div>
        </div>
    )
}

export default Mobile_contentFooter