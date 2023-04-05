/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray font-Poppins">
      <div className="bg-white px-3  rounded-3xl">
        <div className="container px-3 mx-auto py-10 text-center">
          <div className="flex items-center justify-between">
            <div className="flex flex-col w-5/12 text-left">
              <div className="flex flex-row text-4xl font-semibold">
                <span className="text-orange-primary">UNI</span>
                <span className="text-blue-primary">FIND</span>
              </div>
              <h1 className="mt-3 text-4xl font-semibold">
                Study abroad? We give you the route!
              </h1>
              <p className="mt-3">
                Kami hadir untuk memberikan solusi kepada siswa atau mahasiswa
                Indonesia yang masih kebingungan bagaimana cara dalam menentukan
                ataupun melanjutkan studi ke luar negeri:
              </p>
              <div className="flex flex-col font-semibold">
                <div className="flex items-start  my-5 space-x-4">
                  <img
                    src="https://res.cloudinary.com/df82hir2r/image/upload/v1680664278/xdradio/unifind/Ellipse_1_fxp7ca.svg"
                    alt=""
                    className="mt-1.5"
                  />
                  <h2 className="">
                    Rekomendasi Kampus Luar Negeri Terbaik dan Informasi
                    Beasiswa Luar Negeri Terbaru
                  </h2>
                </div>
                <hr />
                <div className="flex items-start my-5 space-x-4">
                  <img
                    src="https://res.cloudinary.com/df82hir2r/image/upload/v1680664278/xdradio/unifind/Ellipse_1_fxp7ca.svg"
                    alt=""
                    className="mt-1.5"
                  />
                  <h2 className="">
                    Program Pelatihan dan Events Persiapan Studi Luar Negeri
                  </h2>
                </div>
                <hr />
                <div className="flex items-start my-5 space-x-4">
                  <img
                    src="https://res.cloudinary.com/df82hir2r/image/upload/v1680664278/xdradio/unifind/Ellipse_1_fxp7ca.svg"
                    alt=""
                    className="mt-1.5"
                  />
                  <h2 className="">
                    Program Konsultasi Persiapan Administrasi Studi Luar Negeri
                  </h2>
                </div>
                <hr />
                <div className="flex items-center justify-center bg-blue-primary text-white mt-5 rounded-md px-3 py-3 w-1/2 font-Poppins cursor-pointer font-medium hover:scale-105 duration-200">
                  <button>Hubungi Kami</button>
                  <img
                    src="https://res.cloudinary.com/df82hir2r/image/upload/v1680664770/xdradio/unifind/Whatsapp_white_pyvvov.svg"
                    alt=""
                    className="ml-2"
                  />
                </div>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/df82hir2r/image/upload/v1680664279/xdradio/unifind/Frame_7_iy6lnj.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
