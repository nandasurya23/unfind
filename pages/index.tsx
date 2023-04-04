import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./home/HeroSection";
import UniversitasRecomend from "./home/UniversitasRecomend";
import TraningProgram from "./home/TraningProgram";

const index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <UniversitasRecomend />
      <TraningProgram />
    </>
  );
};

export default index;
