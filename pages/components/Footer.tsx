/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <section>
      <footer className="bg-blue-primary font-Poppins px-3 rounded-t-3xl py-20">
        <div className="container px-3 mx-auto">
          <img
            src="https://res.cloudinary.com/df82hir2r/image/upload/v1680667467/xdradio/unifind/logo_putih_cks1vj.svg"
            alt=""
          />
          <div className="w-5/12">
            <p className="text-white mt-5">
              Jalan Tukad Badung No.135, Renon, Denpasar Selatan, Kota Denpasar,
              Bali.
            </p>
            <div className=" flex space-x-5 items-center mt-4 font-semibold">
              <p className="text-yellow-primary">unifind@gmail.com</p>
              <p className="text-white">|</p>
              <p className="text-yellow-primary">081 529 123 648</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-5 ">
            <div className="flex items-center space-x-3 text-white  bg-white/50 py-3 px-5 rounded-full">
              <img
                src="https://res.cloudinary.com/df82hir2r/image/upload/v1680668233/xdradio/unifind/yt_dhgxl9.svg"
                alt=""
              />
              <button>Youtube</button>
            </div>
            <div className="flex items-center space-x-3 text-white bg-white/50 py-3 px-5 rounded-full">
              <img
                src="https://res.cloudinary.com/df82hir2r/image/upload/v1680668233/xdradio/unifind/ig_z7fltl.svg"
                alt=""
              />
              <button>Instagram</button>
            </div>
            <div className="flex items-center space-x-3 text-white bg-white/50 py-3 px-5 rounded-full">
              <img
                src="https://res.cloudinary.com/df82hir2r/image/upload/v1680668233/xdradio/unifind/fb_dxcbgh.svg"
                alt=""
              />
              <button>Facebook</button>
            </div>
            <div className="flex items-center space-x-3 text-white bg-white/50 py-3 px-5 rounded-full">
              <img
                src="https://res.cloudinary.com/df82hir2r/image/upload/v1680668234/xdradio/unifind/tw_ovyntd.svg"
                alt=""
              />
              <button>Twitter</button>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray py-3 px-3">
        <div className=" flex justify-center space-x-5 items-center font-medium">
          <p className="text-black/30">unifind@gmail.com</p>
          <p className="text-black/30">|</p>
          <p className="text-black/30">Develop by Unifind</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
