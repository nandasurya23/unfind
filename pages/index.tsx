import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./home/HeroSection";
import UniversitasRecomend from "./home/UniversitasRecomend";

const index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <UniversitasRecomend />
    </>
  );
};

export default index;
