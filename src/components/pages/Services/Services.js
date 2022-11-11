import React from "react";
import Pricing from "../../Pricing";
import HeroSection from "../HeroSection";
import {  homeObjFour } from "./Data";

function Home() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
