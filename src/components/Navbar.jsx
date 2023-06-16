import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RiLoginCircleFill } from "react-icons/ri";

import { IoClose, IoMenu } from "react-icons/io5";
import { FaSistrix, FaBars } from "react-icons/fa";
import logo from "../assets/images/trendify.svg";
import logosm from "../assets/images/trendifysmall.svg";

import LoginButton from "./buttons /LoginButton";

import React from "react";

const Navbar = () => {
  return (
    <nav className="   md:py-5  z-50 md:mb-8  sticky top-0 md:px-24 px-2 shadow-sm bg-seashell-100    ">
      <div className="flex items-center  py-4 md:py-0 justify-between ">
        <div
          className="flex gap-3 items-center
        "
        >
          <div className="hidden sm:block mr-8">
            <img src={logo} alt="logo" className="" />
          </div>
          <div className="sm:hidden">
            <img src={logosm} alt="logo" className="" />
          </div>
          <div>
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search"
                className="py-2 pl-8 md:pr-3 placeholder:pl-2 text-sm w-52 sm:w-96 rounded-md   border border-gray-300 placeholder-gray-500   focus:outline-none focus:ring-kgreen-500 focus:border-kgreen-500 sm:text-sm  "
              />
              <div className="absolute inset-y-0 left-1   flex items-center pl-2">
                <FaSistrix className=" text-gray-400  t" title="" />
              </div>{" "}
            </div>
            <ul
              className={` flex flex-col absolute w-full  md:w-auto bg-white shadow-md md:shadow-none md:bg-transparent  top-20 left-0 md:relative md:top-0 md:flex md:flex-row lg:space-x-2    text-trueGray-600 items-center justify-center `}
            >
              <a href="#" className=" block md:hidden">
                <>
                  {" "}
                </>
              </a>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center ">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon color="" />
          </Badge>
          <div>
            <div className="hidden md:block">
              {" "}
              <LoginButton />
            </div>
            <div className="block md:hidden  text-4xl">
              <RiLoginCircleFill />
            </div>
          </div>
        </div>
        {/* Hamburger Icon */}
        {/* <button
          id="menu-btn"
          className=" block md:hidden text-3xl   focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>{" "} */}
      </div>
      {/* Mobile Menu */}
    </nav>
  );
};

export default Navbar;
