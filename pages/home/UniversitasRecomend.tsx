/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { univ } from "../data/univ";

const UniversitasRecomend = () => {
  const settings = {
    arrows: false,
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-gray font-Poppins px-3">
      <div className="container mx-auto px-3 py-10 text-center">
        <h1 className="text-5xl font-bold w-7/12 mx-auto leading-normal ">
          Rekomendasi{" "}
          <span className="text-blue-primary">Universitas Luar Negeri</span>{" "}
          Terbaik
        </h1>
        <div className="mt-5">
          <Slider {...settings}>
            {univ.map((items) => {
              return (
                <div
                  key={items.id}
                  className="bg-white shadow-sm rounded-md py-4 mt-10"
                >
                  <img
                    src={items.image}
                    alt=""
                    className="mx-auto object-contain"
                  />
                  <h3 className="mt-3 text-lg">{items.univresity_name}</h3>
                  <p className="text-gray2/50 mt-2 text-base">
                    {items.location}
                  </p>
                </div>
              );
            })}
          </Slider>
          <button className="mt-20 px-2 py-3 bg-blue-primary text-white w-2/12 rounded-md text-base font-medium hover:scale-105 duration-200">
            Lihat lebih banyak
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniversitasRecomend;
