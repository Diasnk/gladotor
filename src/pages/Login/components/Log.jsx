import React from 'react'
import './log.css'

import gl1 from '../../../assets/gl1.png'
import gl2 from '../../../assets/gl2.png'

const Reg = () => {
  return (
    <div className='h-screen flex bg-gray-200 justify-center items-center w-full border-2'>
        <div className='bg-white w-4/5 '>
            <div className='flex justify-center mt-2'>
                <img src={gl1} className='h-20'></img>
            </div>
            <div className='flex justify-center mt-2 '>
                <div className='font-extrabold text-3xl'>Sign In</div>
            </div>
            
            <div className='ml-4'>
                <div className='mt-2' >Login</div>
                <input className='border-2 w-11/12 focus:outline-none focus:border-blue-500 focus:bg-gray-100 mt-2 p-1' type='text' placeholder='Enter your login'></input>
                <div className='mt-4'>Password</div>
                <input className='border-2 w-11/12 focus:outline-none focus:border-blue-500 focus:bg-gray-100 mt-2 p-1' type='password' placeholder='Enter your password'></input>
            </div>
            <div className='flex justify-center'>
                <a href='/' className='w-11/12 flex justify-center items-center h-10 mt-7 text-white bg-blue shadow-lg shadow-blue/50 hover:shadow-blue-500/40 font-semibold'>
                    Login
                </a>
            </div>
            <div className='flex justify-between m-4'>
                <div className='text-sm flex justify-center'>
                    <input className='mr-2' type='checkbox'></input>
                    Remember Me
                </div>
                <div className='text-sm'>Create an Account</div>
            </div>
        </div>
    </div>
  )
}

export default Reg