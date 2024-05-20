import React from 'react'
import hero_image from '../assets/hero_image.png'
import HomeSlider from '../home-slider/HomeSlider'
import Popular from '../Popular/Popular'
import SaleOff from '../SaleOff/SaleOff'


const Home = () => {
  return (
    <>
    <HomeSlider/>
    <Popular/>
    <SaleOff/>
    </>
  )
}

export default Home
