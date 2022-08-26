import React from 'react'
import { useState } from 'react'
import { Spring } from 'react-spring'
import { useTransition, animated } from 'react-spring'

import './first.css'

const First = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    // const transition = useTransition(isVisible, {

    // });

  return (
    <div className='app bg-red-500'>
        <button className='bg-white' onClick={() => {
            setIsVisible(v => !v)
        }}>{isVisible ? 'unmount' : "mount" }</button>
        <div className='container'>
            {isVisible ? <div className='item'/> : ''}
            {/* {transition((style, item) => 
                item ? <animated.div className='item'/> : ''
            )} */}
        </div>
    </div>
  )
}

export default First