import React from "react";
import hero_image from "../assets/hero_image.png";
import HomeSlider from "../home-slider/HomeSlider";
import Popular from "../Popular/Popular";
import SaleOff from "../SaleSlider/SaleSlider";
import NavDown from "../navbar/NavDown";
import Footer from "../Footer/Footer";
import SaleSlider from "../SaleSlider/SaleSlider";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Popular />
      <SaleSlider />
      <Footer/>
      <NavDown />
    </>
  );
};

export default Home;
