/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimony } from "../api/data/testimony";

const Testimony = () => {
  const settings = {
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 2,
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
    <section className="bg-gray font-Poppins px-3 py-20">
      <div className="container px-3 mx-auto">
        <div className="w-9/12 mx-auto">
          <h1 className="text-5xl font-semibold text-center leading-normal">
            Testimoni Langsung dari Alumni dan Mahasiswa yang Berkuliah di Luar
            Negeri
          </h1>
        </div>
        <Slider {...settings}>
          {testimony.map((items) => {
            return (
              <div className="flex">
                <div
                  className="flex flex-row items-center rounded-xl"
                  key={items.id}
                >
                  <img src={items.image} alt="" />
                  <div className="bg-white rounded-xl px-10 py-10 shadow-md -translate-x-20">
                    <p className="text-justify">{items.desc}</p>
                    <h2 className="mt-3 text-xl font-semibold">
                      {items.alumni_name}
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Testimony;
