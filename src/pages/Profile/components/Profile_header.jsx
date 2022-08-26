import React from 'react'
import {MdOutlineSettings} from 'react-icons/md'

const Profile_header = () => {
  return (
    <div className='fixed w-full z-50 top-0'>
      <div className='flex border-b-2  bg-white content-center w-full '>
        <div className='profile flex w-full h-8 mt-2 justify-center'>
            <div className='font-semibold text-slate-500'>
                Профиль
            </div>
        </div>
        <div className='flex w-6 mr-2 mt-2 h-6 justify-start'>
            <MdOutlineSettings className='w-6 text-blue h-6'/>
        </div>
      </div>
    </div>

  )
}

export default Profile_header