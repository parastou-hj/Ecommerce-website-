import React from 'react'
import hero_image from '../assets/hero_image.png'
import HomeSlider from '../home-slider/HomeSlider'
import Popular from '../Popular/Popular'
import SaleOff from '../SaleOff/SaleOff'
import NavDown from '../navbar/NavDown'


const Home = () => {
  return (
    <>
    <HomeSlider/>
    <Popular/>
    <SaleOff/>
    <NavDown/>
    </>
  )
}

export default Home
