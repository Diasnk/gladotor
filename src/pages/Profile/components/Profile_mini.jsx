import React from 'react'
import test from '../../../assets/test.jpg'
import './profile_mini.css'

import {MdGroupAdd, MdOutlineIosShare} from 'react-icons/md'

const Profile = () => {
  return (
    <div className=''>
      <div className='ml-5 mt-12'>

        <div className='flex justify-between w-full h-28'>
          <div className=''>
            <h1 className='font-bold text-2xl'> Username </h1>
            <h5>login</h5>
            <h5>registrationn date</h5>
            <div className='flex gap-4'>
              <div className='podpiski text-blue'>
                podpiski
              </div>
              <div className='podpischiki text-blue'>
                podpishchiki
              </div>
            </div>
          </div>

          <div className='w-20 h-20 mr-5 mt-2 border-2 rounded-full'>
            <img src={test} className='rounded-full '></img>
          </div>

        </div>


          <div className='flex'>
            <div className='ml-4 text-blue shadow-lg shadow-blue/50 text-lg font-semibold justify-center items-center flex w-3/5 h-14 border-2'>
              <MdGroupAdd className='h-7 w-7' />
              Add friends
            </div>
            <div className='ml-4 text-blue shadow-lg shadow-blue/50 w-1/5 flex h-14 items-center justify-center border-2' >
              <MdOutlineIosShare className='h-6 w-6'/>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Profile