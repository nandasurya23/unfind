import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./home/HeroSection";
import UniversitasRecomend from "./home/UniversitasRecomend";
import TraningProgram from "./home/TraningProgram";
import Seminar from "./home/Seminar";
import AboutUs from "./home/AboutUs";
import Testimony from "./home/Testimony";
import Footer from "./components/Footer";

const index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <UniversitasRecomend />
      <TraningProgram />
      <Seminar />
      <AboutUs />
      <Testimony />
      <Footer />
    </>
  );
};

export default index;
