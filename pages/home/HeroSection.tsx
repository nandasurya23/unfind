/* eslint-disable @next/next/no-img-element */
import React from "react";
import InfoButton from "../components/InfoButton";

const HeroSection = () => {
  return (
    <section className="bg-blue-primary banner px-3 font-Poppins text-white">
      <div className="container mx-auto px-3 pt-32">
        <div className="flex items-center justify-between">
          <div className="flex flex-col w-4/12">
            <h1 className="text-5xl font-bold leading-normal">
              Study abroad? We give you the route!
            </h1>
            <p className="mt-2 mb-10 text-base">
              Platform yang memberikan solusi untuk membantu perjalanan kamu
              menemukan kampus luar negeri impianmu!
            </p>
            <InfoButton />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/df82hir2r/image/upload/v1680588087/xdradio/unifind/Image_k27ljn.png"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
