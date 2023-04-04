/* eslint-disable @next/next/no-img-element */
import React from "react";

const InfoButton = () => {
  return (
    <div className="flex items-center justify-center bg-white text-blue-500 rounded-md px-3 py-3 w-1/2 font-Poppins cursor-pointer font-medium hover:scale-105 duration-200">
      <button>Info Selengkapnya</button>
      <img
        src="https://res.cloudinary.com/df82hir2r/image/upload/v1680589023/xdradio/unifind/Whatsapp_uyukav.svg"
        alt=""
        className="ml-2"
      />
    </div>
  );
};

export default InfoButton;
