/* eslint-disable @next/next/no-img-element */
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-3 box-border font-Poppins bg-white fixed shadow w-full z-50">
      <div className="container px-3 py-2 mx-auto">
        <div className="flex justify-between items-center">
          <img
            src="https://res.cloudinary.com/df82hir2r/image/upload/v1680536221/xdradio/unifind/Logo_obqj9h.svg"
            alt="logo"
          />
          <ul className="flex items-center justify-center font-medium space-x-10">
            <li className="cursor-pointer hover:text-blue-primary/80 duration-200">
              Beranda
            </li>
            <li className="cursor-pointer hover:text-blue-primary/80 duration-200">
              Universitas
            </li>
            <li className="cursor-pointer hover:text-blue-primary/80 duration-200">
              Program
            </li>
            <li className="cursor-pointer hover:text-blue-primary/80 duration-200">
              About
            </li>
          </ul>
          <div className="flex items-center space-x-3">
            <button className="border border-blue-primary text-sm text-blue-primary rounded-lg px-4 py-2 hover:bg-blue-primary hover:text-white duration-200">
              Sign Up
            </button>
            <button className="bg-blue-primary px-4 py-2 text-sm rounded-lg text-white hover:bg-white hover:border hover:border-blue-primary hover:text-blue-primary duration-150">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
