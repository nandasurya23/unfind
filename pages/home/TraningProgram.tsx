/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { program, scholarship } from "../api/data/program";
import InfoButton from "../components/InfoButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TraningProgram = () => {
    const settings = {
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
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
        <section className="bg-gray font-Poppins">
            <div className="bg-white px-3  rounded-t-3xl">
                <div className="container px-3 mx-auto py-10 text-center">
                    <h1 className="text-5xl font-bold w-7/12 mx-auto leading-normal ">
                        Program Pelatihan yang Tersedia di{" "}
                        <span className="text-orange-primary">UNI</span>
                        <span className="text-blue-primary">FIND</span>
                    </h1>
                    {program.map((items) => {
                        return (
                            <div
                                className="flex space-x-5 items-center mt-10 bg-white shadow-md rounded-md px-3 py-5"
                                key={items.id}
                            >
                                <img src={items.image} alt="" />
                                <div className="flex flex-col text-left">
                                    <h2 className="text-2xl w-8/12">{items.title}</h2>
                                    <p className="my-2">{items.desc}</p>
                                    <img src={items.rate} alt="" className="w-36" />
                                    <p className="text-blue-primary font-medium mt-2">
                                        Rp.
                                        {items.price
                                            .toString()
                                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                    </p>
                                    <button className="px-3 py-3 bg-blue-primary text-white mt-2 w-1/2 rounded-md hover:bg-orange-primary hover:scale-105 duration-200">
                                        Lihat Selengkapnya
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* university favorite */}
            <div className="bg-blue-primary px-3 py-10">
                <div className="container px-3 mx-auto">
                    <div className="flex items-center justify-center">
                        <img
                            src="https://res.cloudinary.com/df82hir2r/image/upload/v1680617811/xdradio/unifind/Frame_1_arck4p.png"
                            alt=""
                        />
                        <div className="flex flex-col ml-6 ">
                            <h3 className="text-white text-2xl mb-7 w-8/12 leading-normal ">
                                Diterima di Kampus Impianmu bersama Unifind!
                            </h3>
                            <InfoButton />
                        </div>
                    </div>
                </div>
            </div>
            {/* INFORMASI */}

            <div className="bg-white px-3 rounded-b-3xl">
                <div className="container px-3 mx-auto py-10">
                    <h1 className="text-5xl text-center font-bold w-7/12 mx-auto leading-normal ">
                        Informasi Seputar Beasiswa Bulan Ini yang Tersedia di{" "}
                        <span className="text-orange-primary">UNI</span>
                        <span className="text-blue-primary">FIND</span>
                    </h1>
                    <Slider {...settings}>
                        {scholarship.map((datas) => {
                            return (
                                <div
                                    className="bg-white shadow-md rounded-md px-4 py-4  my-10"
                                    key={datas.id}
                                >
                                    <div className="flex flex-col">
                                        <div className="flex space-x-4 ">
                                            <div className="bg-gray px-3 py-2 text-sm rounded-md">
                                                {datas.major}
                                            </div>
                                            <div className="bg-gray px-3 py-2 text-sm rounded-md">
                                                {datas.region}
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-3">
                                            <p>{datas.scholarship}</p>
                                            <h3 className="font-semibold mt-1 w-10/12">
                                                {datas.scholarship_type}
                                            </h3>
                                        </div>
                                        <div className="flex items-center justify-between bg-gray px-5 text-red-primary py-3 rounded-md mt-3">
                                            <p>Deadline</p>
                                            <p>{datas.deadline}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                    <div className="flex justify-center">
                        <button className="mt-5 px-2 py-3 bg-blue-primary text-white w-2/12 rounded-md text-base font-medium hover:scale-105 duration-200">
                            Lihat lebih banyak
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TraningProgram;
