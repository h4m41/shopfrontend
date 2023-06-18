import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";

const ProductList = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <h1 className="md:text-3xl  text-2xl md:ml-10 mx-10 mb-6 md:mb-10 mt-6 font-semibold">
        Dresses
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between mx-10">
        <div className="mb-2 md:mb-0 flex items-center gap-2">
          <p className="  md:text-xl">Filter Products:</p>
          <select
            className="border border-kgreen-500 p-1 px-2 md:p-2"
            name=""
            id=""
          >
            {" "}
            <option disabled selected value="">
              Color
            </option>
            <option value="">Red</option>
            <option value="">Blue</option> <option value="">Violet</option>{" "}
            <option value="">Green</option> <option value="">Black</option>
          </select>
          <select
            className=" border-solid border border-kgreen-500 p-1 px-2 md:p-2"
            name=""
            id=""
          >
            {" "}
            <option disabled selected value="">
              Size
            </option>
            <option value="">XS</option>
            <option value="">S</option> <option value="">M</option>{" "}
            <option value="">L</option> <option value="">XL</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <p className=" md:text-xl">Sort Products:</p>
          <select
            className="border border-kgreen-500 p-1 px-2 md:p-2"
            name=""
            id=""
          >
            {" "}
            <option selected value="">
              Sort
            </option>
            <option value="">Price &#9650;</option>{" "}
            <option value="">Price &#x25Bc;</option>
          </select>
        </div>
      </div>{" "}
      <Products />
      <Footer />
    </div>
  );
};

export default ProductList;
