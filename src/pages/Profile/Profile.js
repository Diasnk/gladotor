import React from 'react'
import Profile_header from './components/Profile_header'
import Profile_mini from './components/Profile_mini'
import Statistics from './components/Statistics'
import Rating from './components/Rating'
import Footer from '../Course/components/Footer'

const Profile = () => {
  return (
    <div>
        <Profile_header/>
        <Profile_mini/>
        <Statistics/>
        <Rating/>
        <Footer/>
    </div>
  )
}

export default Profile