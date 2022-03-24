import React from 'react'
import Announcement from '../sections/Announcement'
import Category from '../sections/Categories';
import Navbar from '../sections/Navbar'
import Slider from '../sections/Slider';
import Products from '../sections/Products';
import NewsLetter from '../sections/NewsLetter';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <Products />
      <NewsLetter />
    </div>
  )
}

export default Home