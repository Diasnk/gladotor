import React from 'react'
import { useState } from 'react'

import gl1 from '../../../assets/gl1.png'

const Register = () => {


  return (
    <div className='w-full h-screen bg-gray-200 flex justify-center items-center'>
        <div className='bg-white w-4/5'>
            <div className='flex justify-center mt-2'>
                <img src={gl1} className='h-20'></img>
            </div>
            <div className='flex justify-center mt-2 '>
                <div className='font-extrabold text-3xl'>Register</div>
            </div>

            <div className='ml-4'>
                <div className='mt-2' >Username</div>
                <input className='border-2 w-11/12 focus:outline-none focus:border-blue-500 focus:bg-gray-100 mt-2 p-1' type='text' placeholder='Enter your username'></input>
                <div className='mt-2' >Email</div>
                <input className='border-2 w-11/12 focus:outline-none focus:border-blue-500 focus:bg-gray-100 mt-2 p-1' type='email' placeholder='Enter your email'></input>
                <div className='mt-2'>Password</div>
                <input className='border-2 w-11/12 focus:outline-none focus:border-blue-500 focus:bg-gray-100 mt-2 p-1' type='password' placeholder='Enter your password'></input>
                <div className='mt-2'>Confirm Password</div>
                <input className='border-2 w-11/12 focus:outline-none focus:border-blue-500 focus:bg-gray-100 mt-2 p-1' type='password' placeholder='Confirm your password'></input>
            </div>

            <div className='flex justify-center'>
                <a href='/' className='w-11/12 h-10 flex items-center justify-center mt-7 mb-5 text-white bg-blue shadow-lg shadow-blue/50 hover:shadow-blue-500/40 font-semibold'>
                    Register
                </a>
            </div>
        </div>
    </div>
  )
}

export default Register