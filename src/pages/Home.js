import React from "react";
import Announcement from "../sections/Announcement";
import Category from "../sections/Categories";
import Navbar from "../sections/Navbar";
import Slider from "../sections/Slider";
import Products from "../sections/Products";
import NewsLetter from "../sections/NewsLetter";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Slider />
      <Category />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
