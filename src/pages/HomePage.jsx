import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="mx-4">
        <Slider />
        <Categories />
        <Products />
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
