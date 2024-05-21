import React from 'react'
import Slider from 'react-slick';
import new_collections from '../assets/new_collections'
import Item from '../Item/Item';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from '../SliderItem/SliderItem';
import off from '../assets/off.png'
import '../SaleOff/saleOff.css'

const SaleOff = () => {
  const offProduct=new_collections;
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
   <div className=" off bg-danger p-4 mx-2">
     <div className="slider-container ">
     
      <Slider {...settings}>
      <img src={off} alt="" />
     {offProduct.map((item,index)=>{return(
     <SliderItem key={item.id} id={item.id} image={item.image} name={item.name} old_price={item.old_price} price={item.price} />
     )}
    )}
      </Slider>
    </div>
   </div>
  );
}

export default SaleOff;
