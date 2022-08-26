import React from 'react'
import { useState } from 'react'
import {ImBooks} from 'react-icons/im'
import {GiBroadsword, GiElfHelmet} from 'react-icons/gi'

import './footer.css'

const Footer = () => {
    const [opened, setOpened] = useState(1)

  return (
    <div className='Footer bg-white flex w-full h-16 border-t-2 z-50 fixed bottom-0 '>
        <a href='/' className='course def_colorBg flex w-1/3 border-r-2 justify-center items-center'>
            <ImBooks className=' w-8 h-8'/>
        </a>
        <a href='#' className='sword flex w-1/3 border-r-2 justify-center items-center'>
            <GiBroadsword className='w-8 h-8'/>
        </a>
        <a href='/profile' className='arena flex w-1/3 justify-center items-center'>
            <GiElfHelmet className='w-8 h-8'/>
        </a>
    </div>
  )
}

export default Footer