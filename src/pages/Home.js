import React from 'react'
import Announcement from '../sections/Announcement'
import Category from '../sections/Categories';
import Navbar from '../sections/Navbar'
import Slider from '../sections/Slider';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Category/>
    </div>
  )
}

export default Home