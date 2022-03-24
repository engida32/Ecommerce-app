import React from 'react'
import Announcement from '../sections/Announcement'
import Category from '../sections/Categories';
import Navbar from '../sections/Navbar'
import Slider from '../sections/Slider';
import Products from '../sections/Products';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <Products/>
    </div>
  )
}

export default Home