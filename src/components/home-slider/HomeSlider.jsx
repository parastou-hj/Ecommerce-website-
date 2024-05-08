import { useState } from 'react';
import '../home-slider/HomeSlider.css'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.jpg'



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={3000}>
        <img  src={slider3} alt="" />
      </Carousel.Item >
      <Carousel.Item interval={3000}>
      <img src={slider2} alt=""  />
      </Carousel.Item>
      <Carousel.Item> 
      <img src={slider1} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;