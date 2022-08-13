import React from 'react'
import { useState } from 'react'

import {GiGoldBar} from "react-icons/gi"


const Header = () => {
    const [activeHeader, setActiveHeader] = useState('#')
    
    
    const league = "Бронзовая лига"
    const wood = 153
    const iron = 32
    const gold = 5


  return (
    <div className='w-full bg-white fixed z-50 border-b-2 h-10 flex justify-between'>

        <a href="#" onClick={() => setActiveHeader('#')} className={activeHeader === '#' ? 'active' : ''} >
                <div className='flex'>
                <GiGoldBar className='h-full mt-3 ml-4'/>
                <div className='h-full mt-2'>{league}</div>
                </div>
        </a>

        <div className='flex justify-around mr-4'>

            
            <a href="#" onClick={() => setActiveHeader('#')} className={activeHeader === '#' ? 'active' : ''} >
                <div className='flex'>
                <GiGoldBar className='h-full mt-3 ml-4'/>
                <div className='h-full mt-2'>{wood}</div>
                </div>
            </a>


            <a href="#" onClick={() => setActiveHeader('#')} className={activeHeader === '#' ? 'active' : ''} >
                <div className='flex '>
                <GiGoldBar className='h-full mt-3 ml-4'/>
                <div className='h-full mt-2'>{iron}</div>
                </div>
            </a>

            <a href="#" onClick={() => setActiveHeader('#')} className={activeHeader === '#' ? 'active' : ''} >
                <div className='flex'>
                <GiGoldBar className='h-full mt-3 ml-4'/>
                <div className='h-full mt-2'>{gold}</div>
                </div>
            </a>


        </div>

    </div>
  )
}

export default Header