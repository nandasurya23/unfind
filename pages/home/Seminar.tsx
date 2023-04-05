/* eslint-disable @next/next/no-img-element */
import React from "react";

const Seminar = () => {
  return (
    <section className="bg-gray font-Poppins px-3 py-20">
      <div className="container px-3 mx-auto">
        <h1 className="text-5xl font-semibold text-center">
          Seminar dan Workshop
        </h1>
        <div className="flex items-center justify-center space-x-10 my-10">
          <img
            src="https://res.cloudinary.com/df82hir2r/image/upload/v1680661936/xdradio/unifind/s1_g9kjp6.png"
            alt=""
          />
          <div className="flex flex-col w-5/12">
            <h2 className="text-2xl font-semibold">
              <span className="text-blue-primary">[Exclusive Workshop]</span>{" "}
              Financial Savvy for Millennials
            </h2>
            <p className="mt-3 text-sm">
              Apa pentingnya memahami finansial literasi untuk generasi
              millennial? Temukan jawabannya, langsung bersama expertnya
              melalui: Exclusive Workshop Financial Savvy for Millennials,
              Minggu, 11 Desember 2022, online via Zoom.
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-center space-x-10 my-10">
          <img
            src="https://res.cloudinary.com/df82hir2r/image/upload/v1680661936/xdradio/unifind/s2_hmigqu.png"
            alt=""
          />
          <div className="flex flex-col w-5/12">
            <h2 className="text-2xl font-semibold">
              <span className="text-blue-primary">[Free Webinar]</span> Everyone
              Can Be a Coach: “Why Coaching is Important?”
            </h2>
            <p className="mt-3 text-sm">
              Apa yang membuat coaching bisa meningkatkan produktivitas
              seseorang? Cari tahu jawabannya dalam webinar: EVERYONE CAN BE A
              COACH: WHY COACHING IS IMPORTANT, Sabtu, 3 Desember 2022, 09.00
              WIB – Selesai, online via Zoom.
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-center space-x-10 my-10">
          <img
            src="https://res.cloudinary.com/df82hir2r/image/upload/v1680661936/xdradio/unifind/s3_en1hqa.png"
            alt=""
          />
          <div className="flex flex-col w-5/12">
            <h2 className="text-2xl font-semibold">
              <span className="text-blue-primary">[Free Webinar]</span> Milenial
              Melek Finansial
            </h2>
            <p className="mt-3 text-sm">
              Berdasarkan riset, hanya 14,3% milenial yang mencoba untuk
              menjalankan finansial secara sehat. Lalu bagaimana caranya
              milenial bisa berhasil mengelola keuangan. Cari solusinya bersama
              sang ahli melalui: Webinar Milenial Melek Finansial, Jumat, 2
              Desember 2022, 19.45 WIB , online via Zoom
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-end">
          <button className="mt-5 px-2 py-3 bg-blue-primary text-white w-2/12 rounded-md text-base font-medium hover:scale-105 duration-200">
            Lihat lebih banyak
          </button>
        </div>
      </div>
    </section>
  );
};

export default Seminar;
