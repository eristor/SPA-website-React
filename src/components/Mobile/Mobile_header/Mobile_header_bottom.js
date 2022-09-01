import React from 'react'

import './Mobile_header_bottom.scss'
function Mobile_header_bottom({ setModalActive, counter, likeCounter }) {
  return (
    <div className='Mobile__bottom'>
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

export default Mobile_header_bottom